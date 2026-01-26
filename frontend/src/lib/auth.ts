import {
  type IUserResponse,
  type IUserCheckResponse,
  type IUserCredentials,
} from "../interfaces/auth.interface";
import { axiosInstance } from "./axios";

export const register = async (
  payload: IUserCredentials,
): Promise<IUserResponse> => {
  const res = await axiosInstance.post("/auth/register", payload);
  return res.data;
};

export const signin = async (payload: IUserCredentials) => {
  const res = await axiosInstance.post<IUserResponse>("/auth/signin", payload);
  return res.data;
};

export const logout = async () => {
  await axiosInstance.post("/auth/logout");
};

export const getUser = async () => {
  const res = await axiosInstance.get<IUserCheckResponse>("/auth/user-check");
  return res.data.user;
};
