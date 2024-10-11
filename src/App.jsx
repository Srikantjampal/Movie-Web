import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import TopRated from "./pages/TopRated";
import Upcoming from "./pages/Upcoming";
import MovieDetail from "./pages/MovieDetail";
import Layout from './layout/layout';
import SearchResults from "./pages/SearchResults";
import { useState } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (search) => {
    console.log(search)
    setSearchQuery(search); 
  };


  return (
    <Router>
      <Navbar onSearch={handleSearch} />
      <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/popular" element={<Popular />} /> */}
        <Route path="/top-rated" element={<TopRated />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/search" element={<SearchResults query={searchQuery} />} />
      </Routes>
      </Layout>
    </Router>
  );
}

export default App;
