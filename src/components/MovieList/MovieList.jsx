import { Link, useLocation } from 'react-router-dom';
import s from "./MovieList.module.css"
import { CiCalendarDate } from "react-icons/ci";
import { GoStarFill } from "react-icons/go";

function MovieList({ movies = [] }) {

  const uniqueMovies = movies.filter(
    (movie, index, moviesArray) => index === moviesArray.findIndex(element => element.id === movie.id)
  );

  const location = useLocation();
  console.log(location);

  return (

    <div className={s.containet}>
      <ul className={s.listMovies}  >
        {uniqueMovies.map(item => (
          <li key={item.id.toString()} className={s.item} >
            <Link to={`/movies/${item.id}`} state={location}>
              {item.poster_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  alt={item.poster_path}
                  width={180}
                />
              )}
              <p className={s.title}>{item.title}</p>
              <p className={s.year}> <CiCalendarDate /> {item.release_date ? item.release_date.slice(0, 4) : 'N/A'}</p>
              <p className={s.raiting}> <GoStarFill /> {item.vote_average?.toFixed(1) || 'N/A'}</p>


            </Link>
          </li>
        ))}

      </ul>
    </div >

  );
}
export default MovieList;
