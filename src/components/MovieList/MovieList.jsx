
import { Link } from 'react-router-dom';
import s from './MovieList.module.css';

function MovieList({ movies }) {
    {
        
}
  return (
    <ul className={s.list}>
      {movies.map(movie => (
        <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{`movies/${movie.title}`}</Link>
              
          </li>
          
      ))}
    </ul>
  );
}

export default MovieList;
