import { API_BASE_IMAGE_URL } from "../constants/constants"; // Adjust based on your setup

const MovieBanner = ({ movie }) => {
  return (
    <div className="relative w-full h-[500px] md:h-[500px] flex items-center justify-between bg-gray-900 text-white p-6 rounded-lg overflow-hidden">
      {/* Left Side: Movie Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className="flex gap-4">
          <img
            className="w-[200px] h-[300px] rounded-lg shadow-lg"
            src={`${API_BASE_IMAGE_URL}/${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-4xl font-bold mb-2">
              {movie.title}
            </h2>
            <h3 className="text-xl font-semibold mb-2">
              Rating: {movie.vote_average}
            </h3>
            <div className="flex space-x-2 text-sm mb-2">
              <span>{movie.runtime} min</span>
              <span>|</span>
              <span>{movie.genres.map((genre) => genre.name).join(", ")}</span>
            </div>
            <p className="text-sm mb-2">
              <strong>Release Date:</strong>{" "}
              {new Date(movie.release_date).toDateString()}
            </p>
          </div>
        </div>
        <div className="md:col-span-2 md:w-1/2">
          <h2 className="text-2xl font-semibold mt-4">Overview</h2>
          <p className="text-sm">{movie.overview}</p>
        </div>
      </div>

      {/* Right Side: Background Image */}
      <div className="absolute top-0 right-0 w-[50%] h-full">
        <div className="w-full h-full bg-gradient-to-l from-transparent to-black absolute" />
        <img
          className="w-full h-full object-cover"
          src={`${API_BASE_IMAGE_URL}/${movie.backdrop_path}`}
          alt={`${movie.title} backdrop`}
        />
      </div>
    </div>
  );
};

export default MovieBanner;
