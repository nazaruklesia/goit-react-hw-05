
import { Link, useLocation } from 'react-router-dom';

function MovieList({ movies = [] }) {

  const uniqueMovies = movies.filter(
    (movie, index, moviesArray) => index === moviesArray.findIndex(element => element.id === movie.id)
  );


  const location = useLocation();
  console.log(location);


  return (

    <div>
      <ul>
        {uniqueMovies.map(item => (
          <li key={item.id.toString()}>
            <Link to={`/movies/${item.id}`} state={location}>
              {item.title}
            </Link>
          </li>
        ))}

      </ul>



    </div >

  );
}

export default MovieList;
