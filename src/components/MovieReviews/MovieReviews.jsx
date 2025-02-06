import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviewsMovies } from "../../services/api";

const MovieReviews = () => {

    const { movieId } = useParams()
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        const getData = async () => {
            const data = await fetchReviewsMovies(movieId)
            setReviews(data.results)
        };
        getData()
    }, [movieId])


    return <div>
        <ul>
            {reviews.length === 0 ? (
                <p>No reviews available for this movie.</p>
            ) : (
                reviews.map(review =>
                    <li key={review.id}>

                        <h3>{review.author}</h3>
                        <p>{review.content}</p>



                    </li>
                ))}
        </ul>

    </div>
}

export default MovieReviews;