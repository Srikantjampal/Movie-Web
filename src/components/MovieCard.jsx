import { API_BASE_IMAGE_URL } from "../constants/constants";

const MovieCard = ({ image, movieName, rating }) => {
  return (
    <div className="bg-gray-600 w-80 text-white rounded-lg shadow-md overflow-hidden mb-10">
      <img
        src={`${API_BASE_IMAGE_URL}/${image}`}
        alt={movieName}
        className="w-full h-96 object-cover bg-slate-300"
      />
      <div className="p-4">
        <h2 className="text-xl text-start font-bold mb-2">{movieName}</h2>
        <p className="text-sm">Rating: {rating} / 10</p>
      </div>
    </div>
  );
};

export default MovieCard;
