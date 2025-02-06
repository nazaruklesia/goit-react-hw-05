import { useEffect, useState } from "react"
import SearchBar from "../components/SearchBar/SearchBar"
import MovieList from "../components/MovieList/MovieList"
import { fetchTrendingMovies } from "../services/api"



const HomePage = () => {

    const [movies, setMovies] = useState([])
    const [query, setQuery] = useState('')




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


    const filteredMovies = movies.filter(movie => movie.title.includes(query))

    const handleChandeQuery = (value) => {
        setQuery(value)

    }


    return <div>
        <SearchBar handleChandeQuery={handleChandeQuery} />
        <MovieList movies={filteredMovies} />


    </div>
}
export default HomePage