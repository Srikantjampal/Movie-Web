import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ onSearch }) => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearch(query);
    if (query.trim()) {
      onSearch(query);
      navigate('/search'); 
    }
  };

  const handleSearchClick = () => {
    if (search.trim()) {
      onSearch(search); 
      navigate('/search'); 
      setSearch(''); 
    }
  };

  return (
    <nav className="bg-gray-700 p-4 text-white">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl">
          <Link to="/">Movie App</Link>
        </h1>

        <div className="flex ml-auto items-center space-x-6">
          <ul className="flex space-x-4">
            
            <li>
              <Link to="/top-rated" className="hover:underline">
                Top Rated
              </Link>
            </li>
            <li>
              <Link to="/upcoming" className="hover:underline">
                Upcoming
              </Link>
            </li>
          </ul>

          <input
            type="text"
            value={search}
            onChange={handleSearch} 
            className="p-2 rounded bg-gray-500 text-white"
            placeholder="Search movies"
          />
          <button
            type="submit"
            onClick={handleSearchClick} 
            className="bg-blue-500 p-2 rounded"
          >
            Search
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
