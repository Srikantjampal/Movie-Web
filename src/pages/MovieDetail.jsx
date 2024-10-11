import { useParams } from "react-router-dom";
import MovieBanner from "../components/MovieBanner";
import MovieCastCard from "../components/MovieCastCard";
import { API_KEY } from "../constants/constants";
import useFetch from "../hook/useFetch";

const MovieDetail = () => {
  const { id } = useParams(); // Get movie ID from URL

  // Using the custom useFetch hook to fetch movie details
  const { data: movieDetails, loading, error } = useFetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {movieDetails && (
        <>
          <MovieBanner movie={movieDetails} />
          <MovieCastCard movieId={id} />
        </>
      )}
    </div>
  );
};

export default MovieDetail;
