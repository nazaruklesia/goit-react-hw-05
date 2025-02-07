
import { Link, useLocation } from 'react-router-dom';

function MovieList({ movies = [] }) {
  const location = useLocation();
  console.log(location);


  return (

    <div>
      <ul>
        {movies.map(item => (
          <li key={item.id.toString()}>
            <Link to={`/movies/${item.id}`} state={location} >
              {item.title}
              {/* {item.release_date} */}
            </Link>
          </li>
        ))}
      </ul>



    </div >

  );
}

export default MovieList;
