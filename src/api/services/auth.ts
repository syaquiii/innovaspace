import axios, { AxiosError } from "axios";
import apiInstance from "../core/core";
interface ErrorResponse {
  error: string;
}
export const login = async (username: string, password: string) => {
  try {
    const response = await apiInstance.post("/users/login", {
      username,
      password,
    });
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ErrorResponse>;
      if (axiosError.response && axiosError.response.status === 401) {
        throw new Error(
          axiosError.response.data.error || "Invalid username or password"
        );
      } else {
        throw new Error(
          "An error occurred during login. Please try again later."
        );
      }
    } else {
      throw new Error("An unexpected error occurred. Please try again later.");
    }
  }
};

export const register = async (
  email: string,
  username: string,
  password: string,
  nama: string
) => {
  try {
    const response = await apiInstance.post("/users/register", {
      email,
      username,
      password,
      nama,
      institusi: " ",
      preferensi: " ",
    });
    console.log("INI RESPONSE NYA", response);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ErrorResponse>;
      if (axiosError.response) {
        if (axiosError.response.status === 409) {
          throw new Error(
            axiosError.response.data.error || "Username already in use"
          );
        } else if (axiosError.response.status === 400) {
          throw new Error(
            axiosError.response.data.error || "Email sudah digunakan"
          );
        } else {
          throw new Error(
            "An error occurred during registration. Please try again later."
          );
        }
      }
    }
    throw new Error("An unexpected error occurred. Please try again later.");
  }
};
