import { useEffect, useState } from "react"
import SearchBar from "../components/SearchBar/SearchBar"
import MovieList from "../components/MovieList/MovieList"
import { fetchTrendingMovies } from "../services/api"
import { useLocation, useSearchParams } from "react-router-dom"



const HomePage = () => {

    const [movies, setMovies] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    const query = searchParams.get('query') ?? '';
    const location = useLocation();
    console.log(location);


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


    const filteredMovies = movies.filter(movie => movie.title?.toLowerCase().includes((query ?? "").toLowerCase()))

    const handleChandeQuery = value => {
        searchParams.set('query', value)
        setSearchParams(searchParams)
    }
    return <div>
        <SearchBar handleChandeQuery={handleChandeQuery} query={query} />
        <MovieList movies={filteredMovies} />
    </div>
}
export default HomePage