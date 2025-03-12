import { register } from "@/api/services/auth";

export const handleRegister = async (
  email: string,
  username: string,
  password: string,
  nama: string
): Promise<void> => {
  try {
    const response = await register(email, username, password, nama);

    if (response) {
      console.log("Registration successful");
    } else {
      throw new Error("An error occurred during registration");
    }
  } catch (error) {
    throw error;
  }
};
