import * as Location from "expo-location";
import { useState, useEffect } from "react";
import Constants from "expo-constants";

interface LocationData {
  city: string;
  state: string;
  country: string;
}

/**
 * Hook for fetching the geo location of the device.
 */
export const useGeolocation = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchAddressFromCoordinates = async (
    latitude: number,
    longitude: number
  ): Promise<LocationData | null> => {
    const API_KEY = Constants.expoConfig?.extra?.apiKey;
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${API_KEY}`;

    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setLoading(false);
      if (data.results.length > 0) {
        const components = data.results[0].components;

        const city =
          components.city || components.town || components.village || "";
        const state = components.state || "";
        const country = components.country || "";

        return { city, state, country };
      }
      return null;
    } catch (error) {
      setLoading(false);
      console.error(error);
      return null;
    }
  };

  const fetchLocation = async (): Promise<LocationData | null> => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setError("Permission to access location was denied");
        return null;
      }
      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;
      const readableLocation = await fetchAddressFromCoordinates(
        latitude,
        longitude
      );
      return readableLocation;
    } catch (error: any) {
      console.log(error.message);
      setError(error.message);
      return null;
    }
  };

  return { fetchLocation, loading, error };
};
