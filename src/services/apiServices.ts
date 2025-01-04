import axiosInstance from "./axiosInstance";

export const sendOtp = async (data: { mobile: string }) => {
  try {
    const response = await axiosInstance.post("/mobile/send", data);
    return response.data;
  } catch (error: any) {
    const message =
      error.response?.data?.message || error.message || "An error occurred.";
    throw { message };
  }
};

export const verifyOtp = async (data: { mobile: string; otp: string }) => {
  try {
    const response = await axiosInstance.post("/mobile/verify", data);
    return response.data;
  } catch (error: any) {
    const message =
      error.response?.data?.message || error.message || "An error occurred.";
    throw { message };
  }
};

export const sendEmailOtp = async (data: { email: string }, token: string) => {
  try {
    const response = await axiosInstance.post("/email/send", data, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (error: any) {
    const message =
      error.response?.data?.message || error.message || "An error occurred.";
    throw { message };
  }
};

export const verifyEmailOtp = async (
  data: { email: string; otp: string },
  token: string
) => {
  try {
    const response = await axiosInstance.post("/email/verify", data, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (error: any) {
    const message =
      error.response?.data?.message || error.message || "An error occurred.";
    throw { message };
  }
};

export const addName = async (data: { name: string }, token: string) => {
  try {
    const response = await axiosInstance.post("/user/add", data, {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  } catch (error: any) {
    const message =
      error.response?.data?.message || error.message || "An error occurred.";
    throw { message };
  }
};
