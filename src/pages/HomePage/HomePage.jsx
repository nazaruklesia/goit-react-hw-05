import { useEffect, useState } from "react"
import SearchBar from "../../components/SearchBar/SearchBar.jsx"
import MovieList from "../../components/MovieList/MovieList.jsx"
import { fetchTrendingMovies } from "../../services/api.js"
import { useLocation, useSearchParams } from "react-router-dom"
import s from "./HomePage.module.css"


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
    return <div className={s.container}>
        <SearchBar handleChandeQuery={handleChandeQuery} query={query} />
        <p>Popular Movies of the Day</p>
        <MovieList movies={filteredMovies} />
    </div>
}
export default HomePage