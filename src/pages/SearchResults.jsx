import MovieCard from '../components/MovieCard';
import { API_KEY } from '../constants/constants';
import { Link } from 'react-router-dom';
import useFetch from '../hook/useFetch';

const SearchResults = ({ query }) => {
  const { data:movies, loading, error } = useFetch(
    query ? `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}` : null
  );


  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!movies || movies.length === 0) return <div>No results found for {query}</div>;

  return (
    <div className="p-4">
      <h1>Search Results for  {query}</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {movies.results.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            <MovieCard
              image={movie.poster_path}
              movieName={movie.title}
              rating={movie.vote_average}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
