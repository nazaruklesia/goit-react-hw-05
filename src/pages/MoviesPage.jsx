import { useEffect, useState } from "react";
import MovieList from "../components/MovieList/MovieList";
import LoadMoreBtn from "../components/LoadMoreBtn/LoadMoreBtn";
import { fetchAllMovies } from "../services/api";
import { useLocation } from "react-router-dom";

const MoviePage = () => {
        const [movies, setMovies] = useState([]);
        const [page, setPage] = useState(1);
        const [totalPages, setTotalPages] = useState(1);
        const location = useLocation();
        console.log(location);

        useEffect(() => {
                const getData = async () => {
                        try {
                                const data = await fetchAllMovies(page);
                                setMovies(prevMovies => [...prevMovies, ...data.results]);
                                setTotalPages(data.total_pages);
                        } catch (error) {
                                console.error("Error fetching movies:", error);
                        }
                };

                getData();
        }, [page]);

        const handleLoadMore = () => setPage(prev => prev + 1);

        return (
                <div>
                        <h2>Усі фільми</h2>
                        <MovieList movies={movies} />
                        {movies.length > 0 && page < totalPages && <LoadMoreBtn onClick={handleLoadMore} />}
                </div>
        );
};

export default MoviePage;
