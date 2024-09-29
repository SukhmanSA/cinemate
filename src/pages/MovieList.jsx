import { useFetch } from "../hooks/useFetch"
import { MovieCard } from "../components/index"
import { useTitle } from "../hooks/useTitle"

export const MovieList = ({apiPath}) =>{
    const { data:movies } = useFetch(apiPath)

    if(apiPath == "movie/now_playing"){
        useTitle("Now playing")
    }else if(apiPath == "movie/popular"){
        useTitle("Popular")
    }else if(apiPath == "movie/top_rated"){
        useTitle("Top Rated")
    }else if(apiPath == "movie/upcoming"){
        useTitle("Upcoming")
    }

    return(
        <main>
            <section className="max-w-7xl mx-auto py-7">
                <div className="flex justify-start spsm:justify-evenly flex-wrap">
                    {movies.map((movie)=>(
                        <MovieCard key={movie.id} movie={movie}/>
                    ))}
                </div>
            </section>
        </main>
    )
}