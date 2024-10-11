import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { API_KEY } from "../constants/constants";
import { Link } from "react-router-dom";
import useFetch from "../hook/useFetch";

const Upcoming = () => {
  const [page, setPage] = useState(1); // State for current page
  const [totalPages, setTotalPages] = useState(1); // State for total pages

  // Using the custom useFetch hook to fetch upcoming movies based on the current page
  const { data: movies, loading, error } = useFetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`
  );

  // Update total pages based on movies data if available
  useEffect(() => {
    if (movies) {
      setTotalPages(movies.total_pages); // Update total pages from the API response
    }
  }, [movies]);

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1); // Go to the previous page
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1); // Go to the next page
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!movies || movies.length === 0) return <div>No upcoming movies found.</div>;

  return (
    <div className="p-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {movies.results.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            <MovieCard
              image={movie.poster_path} // Poster image
              movieName={movie.title} // Movie title
              rating={movie.vote_average} // Movie rating
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
        <span className="text-xl">
          Page {page} of {totalPages}
        </span>
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

export default Upcoming;
