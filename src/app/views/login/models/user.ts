export interface UserResponse {
  id: number;
  token: string;
  username: string;
  username_color: string;
}

export interface LogoutResponse {
  success: string;
}

export interface UserData {
  username: string;
  username_color: string;
}
