import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchCreditsMovies } from "../../services/api"

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

        <h2>Movie cast:</h2>
        <ul>
            {cast.map(actor => <li key={actor.id}>

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

    </div>
}


export default MovieCast