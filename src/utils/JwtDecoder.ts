import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

interface DecodedToken {
  UserId: string;
  exp: number;
}

export const getTokenFromCookies = (): string | undefined => {
  return Cookies.get("token");
};

export const getUUIDFromToken = (): string | null => {
  const token = getTokenFromCookies();
  if (!token) {
    console.error("Token not found in cookies.");
    return null;
  }

  try {
    const decodedToken = jwtDecode<DecodedToken>(token);
    return decodedToken.UserId;
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
};
