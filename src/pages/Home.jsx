import { useState } from 'react';
import MovieCard from '../components/MovieCard';
import { Link } from 'react-router-dom';
import { API_KEY } from '../constants/constants';
import useFetch from '../hook/useFetch';

const Home = () => {
  const [page, setPage] = useState(1); 

  const { data, loading, error } = useFetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`);

  const movies = data?.results || []; 
  const totalPages = data?.total_pages || 1; 

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1); 
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1); 
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            <MovieCard
              image={movie.poster_path}
              movieName={movie.title}
              rating={movie.vote_average}
            />
          </Link>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-8">
        <button
          onClick={handlePreviousPage}
          disabled={page === 1}
          className="bg-blue-500 text-white px-4 py-2 mr-4 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-xl">Page {page} of {totalPages}</span>
        <button
          onClick={handleNextPage}
          disabled={page === totalPages}
          className="bg-blue-500 text-white px-4 py-2 ml-4 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
