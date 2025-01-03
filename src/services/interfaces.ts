export interface ApiResponse<T> {
  status: boolean;
  data?: T;
  error: string | null;
}

export interface User {
  email: string;
  phone: string;
  interests: string[];
  starSigns: string[];
}
