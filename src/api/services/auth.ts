import apiInstance from "../core/core";

export const login = async (username: string, password: string) => {
  try {
    const response = await apiInstance.post("/users/login", {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

export const register = async (
  email: string,
  username: string,
  password: string,
  nama: string,
  institusi: string,
  preferensi: string
) => {
  try {
    const response = await apiInstance.post("/users/register", {
      email,
      username,
      password,
      nama,
      institusi,
      preferensi,
    });
    return response.data;
  } catch (error) {
    console.error("Error registering:", error);
    throw error;
  }
};
