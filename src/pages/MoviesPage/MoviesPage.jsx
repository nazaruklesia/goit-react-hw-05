import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import MovieList from "../../components/MovieList/MovieList";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";
import { fetchAllMovies } from "../../services/api";
import { useLocation, useSearchParams } from "react-router-dom";
import s from "./MoviePage.module.css"

const MoviePage = () => {
        const [movies, setMovies] = useState([]);
        const [page, setPage] = useState(1);
        const [totalPages, setTotalPages] = useState(1);
        const [searchParams, setSearchParams] = useSearchParams();
        const query = searchParams.get("query") ?? "";

        const location = useLocation();
        console.log(location);

        useEffect(() => {
                const getData = async () => {
                        try {
                                const data = await fetchAllMovies(query, page);
                                setMovies(prevMovies => (page === 1 ? data.results : [...prevMovies, ...data.results]));
                                setTotalPages(data.total_pages);
                        } catch (error) {
                                console.error("Error fetching movies:", error);
                        }
                };
                getData();
        }, [query, page]);

        const handleChangeQuery = value => {
                setSearchParams({ query: value });
                setPage(1);
        };

        const handleLoadMore = () => setPage(prev => prev + 1);

        return (
                <div className={s.container}>
                        <SearchBar handleChandeQuery={handleChangeQuery} query={query} />
                        <MovieList movies={movies} />
                        {movies.length > 0 && page < totalPages && <LoadMoreBtn onClick={handleLoadMore} />}
                </div>
        );
};

export default MoviePage;
