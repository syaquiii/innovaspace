import Cookies from "js-cookie";
export const getTokenFromCookies = (): string | undefined => {
  return Cookies.get("token");
};
