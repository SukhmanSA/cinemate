import { useEffect, useRef, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { MovieCard } from "../components/index";
import { useTitle } from "../hooks/useTitle";
import Loader from "../components/Loader";

export const MovieList = ({ apiPath }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false)
  const { data: movies } = useFetch(apiPath, pageNumber);
  const lastMovieRef = useRef(null);

  if (apiPath === "movie/now_playing") {
    useTitle("Now Playing");
  } else if (apiPath === "movie/popular") {
    useTitle("Popular");
  } else if (apiPath === "movie/top_rated") {
    useTitle("Top Rated");
  } else if (apiPath === "movie/upcoming") {
    useTitle("Upcoming");
  }
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
        setLoading(true)
          setPageNumber((prevPageNumber) => prevPageNumber + 1); 

        }
      });
    });

    if (lastMovieRef.current) {
      observer.observe(lastMovieRef.current);
    }

    return () => {
      if (lastMovieRef.current) {
        observer.unobserve(lastMovieRef.current);
      }
    };
  }, [movies]);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start spsm:justify-evenly flex-wrap">
          {movies && movies.length > 0 ? (
            movies.map((movie, index) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                ref={index === movies.length - 1 ? lastMovieRef : null}
              />
            ))
          ) : (
            <Loader/>
          )}
          { loading && <Loader/> }
        </div>
      </section>
    </main>
  );
};
