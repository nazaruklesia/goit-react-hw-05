import { useEffect, useState } from "react";
import MovieList from "../components/MovieList/MovieList";
import { fetchTrendingMovies } from "../services/api.js"
const MoviePage = () => {

        const [movies, setMovies] = useState([])
        useEffect(() => {
                const getData = async () => {
                        try {
                                const data = await fetchTrendingMovies();
                                setMovies(data.results || []);
                        } catch (error) {
                                console.error("Error fetching trending movies:", error);
                        }
                }
                getData()
        }, [])


        return (<div>

                <MovieList movies={movies} />

                {/* <MovieDetailsPage/> */}
        </div>)
}
export default MoviePage;
