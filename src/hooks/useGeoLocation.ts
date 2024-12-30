import * as Location from 'expo-location';
import { useState, useEffect } from 'react';

/**
 * Hook for fetching the geo location of the device.
 */
export const useGeolocation = () => {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setError('Permission to access location was denied');
          return;
        }
        const location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      } catch (e: any) {
        console.log(e.message);
        setError('Failed to fetch location');
      }
    };
    fetchLocation();
  }, []);

  return { location, error };
};