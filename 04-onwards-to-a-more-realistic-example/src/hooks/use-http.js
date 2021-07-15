import { useState } from "react";

const useHttp = (httpConfig, dataUses) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const enterTaskHandler = async (taskText) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(httpConfig.url, {
        method: httpConfig.method ? httpConfig.method : "GET",
        body: taskText
          ? JSON.stringify({ text: taskText })
          : null,
        headers: httpConfig.headers ? httpConfig.headers : {},
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }
      const data=response.json();
      dataUses(data,taskText);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);

};
return {
  isLoading,
  error,
  enterTaskHandler,
};
};

export default useHttp;
