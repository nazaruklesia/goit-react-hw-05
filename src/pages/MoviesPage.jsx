import { useEffect, useState } from "react";
import MovieList from "../components/MovieList/MovieList";
import { fetchAllMovies } from "../services/api";
import { useLocation } from "react-router-dom";

const MoviePage = () => {

        const [movies, setMovies] = useState([])
        const location = useLocation();
        console.log(location);

        useEffect(() => {
                const getData = async () => {
                        try {
                                const data = await fetchAllMovies(1);
                                setMovies(data.results || []);
                        } catch (error) {
                                console.error("Error fetching  movies:", error);
                        }
                }
                getData()
        }, [])

        return (
                <div>
                        <p>вмі фільми</p>
                        <MovieList movies={movies} />
                </div>
        );
};

export default MoviePage;
