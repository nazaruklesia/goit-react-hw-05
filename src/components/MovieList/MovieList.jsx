
import { Link } from 'react-router-dom';

function MovieList({ movies = [] }) {

  return (

    <div>
      <ul>
        {movies.map(item => (
          <li key={item.id.toString()}>
            <Link to={`/movies/${item.id}`}>
              {item.title}
              {/* {item.release_date} */}
            </Link>
          </li>
        ))}
      </ul>


    </div>

  );
}

export default MovieList;
