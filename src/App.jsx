import { lazy, Suspense, useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { CircularProgress } from "@mui/material";

import Home from "./pages/Home";
const Movies = lazy(() => import("./pages/Movies"));
import MovieDetail from "./pages/MovieDetail";
import NotFound from "./pages/NotFound";

const App = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // const API_KEY = import.meta.env.VITE_API_KEY;

  const API_URL = `https://www.omdbapi.com/?i=tt3896198&apikey=5f004e13&s=${query}`;

  const searchMovie = async () => {
    if (!query) return;

    try {
      setError("");
      const response = await axios.get(`${API_URL}`);
      if (response.data.Response === "True") {
        setData(response.data);
      } else {
        setData(null);
        setError("Movie(s) not found.");
      }
    } catch (error) {
      setError(`Error: ${error}`);
      setData(null);
    }
  };

  const handleFetchingData = (e) => {
    if (e.key === "Enter") {
      setLoading(true);
      setTimeout(() => {
        searchMovie();
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <Router>
      <Suspense
        fallback={
          <div className="h-[100vh] flex justify-center items-center">
            <CircularProgress color="white" size="2rem" />
          </div>
        }
      >
        <Routes>
          <Route index element={<Home />} />
          <Route
            path="/movies"
            element={
              <Movies
                query={query}
                setQuery={setQuery}
                onHandleFetchingData={handleFetchingData}
                movieData={data}
                error={error}
                loading={loading}
              />
            }
          />
          <Route
            path="/movies/:movieId"
            element={<MovieDetail movieData={data} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
