import axios from "axios";
import { createContext, useState } from "react";

const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const API_URL = `https://www.omdbapi.com/?i=tt3896198&apikey=5f004e13&s=${query}`;

  const searchMovie = async () => {
    if (!query) return;

    try {
      setError("");
      const response = await axios.get(API_URL);
      if (response.data.Response === "True") {
        setData(response.data.Search);
      } else {
        setData([]);
        setError("Movie(s) not found.");
      }
    } catch (error) {
      setError(`Error: ${error}`);
      setData([]);
    }
  };

  const handleFetchingData = async (e) => {
    if (e.key === "Enter") {
      setLoading(true);
      await searchMovie();
      setLoading(false);
    }
  };

  return (
    <MovieContext.Provider
      value={{
        query,
        setQuery,
        data,
        setData,
        error,
        loading,
        setLoading,
        handleFetchingData,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export { MovieContext, MovieProvider };
