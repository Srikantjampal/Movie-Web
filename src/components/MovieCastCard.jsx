import { useEffect, useState } from "react";
import { API_BASE_IMAGE_URL, API_KEY } from "../constants/constants";

const MovieCastCard = ({ movieId }) => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovieCast = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
      );
      const data = await response.json();
      setCast(data.cast);
    };

    fetchMovieCast();
  }, [movieId]);

  return (
    <div className="relative">
      <h2 className="text-2xl mb-4">Cast</h2>
      
      <div className="relative flex items-center">
        <ul
          id="castSlider"
          className="flex space-x-4 overflow-x-scroll scrollbar-hide scroll-smooth scrollbar-hide"
        >
          {cast.map((member) => (
            <li key={member.cast_id} className="min-w-[200px]">
              <img
                className="h-[300px] w-full object-cover rounded"
                src={`${API_BASE_IMAGE_URL}/${member.profile_path}`}
                alt={member.name}
              />
              <div className="text-center mt-2">
                <p className="font-semibold">{member.name}</p>
                <p className="text-sm text-gray-500">as {member.character}</p>
                <p className="text-sm text-gray-400">Popularity: {member.popularity}</p>
              </div>
            </li>
          ))}
        </ul>

       
      </div>
    </div>
  );
};

export default MovieCastCard;
