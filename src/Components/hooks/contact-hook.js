import { useCallback } from "react";

export const useHttpContact = () => {
  const sendRequest = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      try {
        const response = await fetch(url, {
          method,
          body,
          headers,
        });
        const responseData = await response.json();

        if (!response.ok) {
          throw new Error(responseData.message);
        }
        return responseData;
      } catch (err) {
        throw err;
      }
    },
    []
  );

  return { sendRequest };
};
