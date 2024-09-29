import { Routes,Route } from "react-router-dom"
import { MovieDetail,MovieList,PageNotFound,Search } from "../pages"

export const AllRoutes = () =>{

    return(
        <>
        <Routes>
            <Route path="" element={<MovieList apiPath="movie/now_playing"/>}/>
            <Route path="/movies/popular" element={<MovieList apiPath="movie/popular"/>}/>
            <Route path="/movies/top" element={<MovieList apiPath="movie/top_rated"/>}/>
            <Route path="/movies/upcoming" element={<MovieList apiPath="movie/upcoming"/>}/>
            <Route path="/movie/:id" element={<MovieDetail apiPath="movie/{movie.id}"/>}/>
            <Route path="/search" element={<Search apiPath="search/movie"/>}/>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
        </>
    )

}