export interface IUser {
  email: string;
  id: string;
  confirm?: string;
}

export interface IUserCredentials {
  email: string;
  password: string;
}

export interface IUserCheckResponse {
  user: IUser;
}

export interface IUserResponse {
  message: string;
  user: IUserCheckResponse;
}
