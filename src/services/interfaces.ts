export interface SignUpRequestParams {
  email: string;
  phone: string;
  interests: string[];
  starSigns: string[];
}

export interface LogInRequestParams {
  email: string;
  phone: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error: string | null;
}

export interface User {
  email: string;
  phone: string;
  interests: string[];
  starSigns: string[];
}
