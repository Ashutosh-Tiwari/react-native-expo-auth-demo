import axiosInstance from "./axiosInstance";

export const sendOtp = async (data: { mobile: string }) => {
  const response = await axiosInstance.post("/mobile/send", data);
  return response.data;
};

export const verifyOtp = async (data: { mobile: string; otp: string }) => {
  const response = await axiosInstance.post("/mobile/verify", data);
  return response.data;
};

export const sendEmailOtp = async (data: { email: string }, token: string) => {
  const response = await axiosInstance.post("/email/send", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const verifyEmailOtp = async (
  data: { email: string; otp: string },
  token: string
) => {
  const response = await axiosInstance.post("/email/verify", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const addName = async (data: { name: string }, token: string) => {
  const response = await axiosInstance.post("/user/add", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
