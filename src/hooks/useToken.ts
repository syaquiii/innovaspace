import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const useToken = () => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const fetchedToken = Cookies.get("token");
    setToken(fetchedToken || null);
  }, []);

  return token;
};

export default useToken;
