import { NavLink, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { fetchDetailsMovies } from "../../services/api";
import s from "./MovieDetailsPage.module.css";
import { CiCalendarDate } from "react-icons/ci";
import { GoStarFill } from "react-icons/go";
import Loader from "../../components/Loader/Loader";

const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    const goBackUrl = useRef(location?.state ?? "/movies");

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await fetchDetailsMovies(movieId);
                setMovie(data);
            } catch (error) {
                console.error("Error fetching movie details:", error);
            }
        };
        getData();
    }, [movieId]);

    if (!movie) {
        return <div> <Loader /> </div>;
    }

    return (
        <div className={s.container}>
            <div className={s.goBackUrl}>
                <NavLink to={goBackUrl.current}>Go back</NavLink>
            </div>

            <div className={s.movieDetails}>
                {movie.poster_path && (
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        width={280}
                        className={s.poster}
                    />
                )}

                <div className={s.details}>
                    <h2 className={s.title}>{movie.title}</h2>
                    <p className={s.year}>
                        <CiCalendarDate /> {movie.release_date ? movie.release_date.slice(0, 4) : "N/A"}
                    </p>
                    <p className={s.rating}>
                        <GoStarFill /> {movie.vote_average?.toFixed(1) || "N/A"}
                    </p>
                    <p className={s.genres}>
                        <strong>Genres:</strong>{" "}
                        {movie.genres && movie.genres.length > 0
                            ? movie.genres.map((genre) => genre.name).join(", ")
                            : "Unknown"}
                    </p>

                    <p className={s.overview}>
                        <strong>Overview:</strong> {movie.overview || "No description available."}
                    </p>


                </div>
            </div>

            <nav className={s.nav}>
                <div className={s.cast}>
                    <NavLink to="cast">Cast</NavLink>
                </div>
                <div className={s.reviews}>
                    <NavLink to="reviews">Reviews</NavLink>
                </div>
            </nav>

            <section>
                <Outlet />
            </section>
        </div>
    );
};

export default MovieDetailsPage;
