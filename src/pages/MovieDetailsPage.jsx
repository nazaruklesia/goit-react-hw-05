import { NavLink, Outlet, useParams } from "react-router-dom";
import MovieCast from "../components/MovieCast/MovieCast";
import MovieReviews from "../components/MovieReviews/MovieReviews";
import { useEffect, useState } from "react";
import { fetchDetailsMovies } from "../services/api";

const MovieDetailsPage = () => {
    const { movieId } = useParams()
    const [movie, setMovie] = useState(null)

    useEffect(() => {
        const getData = async () => {
            const data = await fetchDetailsMovies(movieId)
            setMovie(data)
        }
        getData()

    }, [movieId])

    if (!movie) {
        return <p>Loading...</p>;
    }


    return <div>


        <h2>{movie.title}</h2>

        <nav>
            <NavLink to="cast" >Cast222</NavLink>
            <NavLink to="reviews" >Reviews222</NavLink>
        </nav>
        <section><Outlet /></section>


        {/* <MovieCast />
        <MovieReviews/> */}
    </div>
}
export default MovieDetailsPage;


