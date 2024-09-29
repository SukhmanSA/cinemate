import { useState,useEffect } from "react"


export const useFetch = (apiPath,queryTerm="") =>{
    const [data,setData] = useState([]);
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=458f7240c3571a98c54843ae305dab72&language=en-US&page=1&query=${queryTerm}`
    useEffect(()=>{
        async function fetchMovies(){
            const response = await fetch(url);
            const json = await response.json();
            setData(json.results)
        }
        fetchMovies()
    },[url])

    return { data }
}