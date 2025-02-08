import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchCreditsMovies } from "../../services/api"
import s from "./MovieCast.module.css"

const MovieCast = () => {

    const { movieId } = useParams()
    const [cast, setCast] = useState([])

    useEffect(() => {
        const getData = async () => {
            const data = await fetchCreditsMovies(movieId)
            setCast(data.cast)
        };
        getData()
    }, [movieId])


    return <div>

        <ul className={s.movieCast} >
            {cast.map((actor, index) =>
                <li key={`${actor.id}-${index}`} className={s.item}>

                    <p>{actor.name}</p>
                    {actor.profile_path && (
                        <img
                            src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                            alt={actor.name}
                            width={120}
                        />
                    )}

                </li>)}
        </ul>

    </div >
}


export default MovieCast