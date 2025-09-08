import { useState, useEffect } from "react";
import useThrottle from "./useThrottle";
import { useLocation } from "react-router-dom";

export const useFetch = (apiPath, pageNumber = 1, queryTerm = "") => {
  const [data, setData] = useState(null); 
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=458f7240c3571a98c54843ae305dab72&language=en-US&page=${pageNumber}&query=${queryTerm}`;
  const location = useLocation()

  const throttledValue = useThrottle(url, 3000);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchMovies() {
      try {
        const response = await fetch(throttledValue, {
          signal: controller.signal,
        });
        const json = await response.json();
        setData((prev) => 
          prev ? [...prev, ...json.results] : json.results
        );
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Fetch error:", error);
        }
      }
    }

    fetchMovies();

    return () => controller.abort();
  }, [throttledValue, location]);

  return { data };
};
