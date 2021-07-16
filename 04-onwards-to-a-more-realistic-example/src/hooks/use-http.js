import { useCallback, useState } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const enterTaskHandler =useCallback(async (httpConfig, dataUses) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(httpConfig.url, {
        method: httpConfig.method ? httpConfig.method : "GET",
        body: httpConfig.body
          ? JSON.stringify({ text: httpConfig.body })
          : null,
        headers: httpConfig.headers ? httpConfig.headers : {},
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }
      const data=response.json();
      dataUses(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);

}, [] )
return {
  isLoading,
  error,
  enterTaskHandler,
};
};

export default useHttp;
