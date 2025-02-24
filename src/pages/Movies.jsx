import { useContext } from "react";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";
import { ThemeContext } from "../contexts/ThemeContext";

const Movies = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`h-[auto] min-h-[100vh] w-[100%] m-auto py-[50px] flex flex-col items-center gap-[50px] duration-300 ${
        theme === "dark"
          ? "bg-gray-950 text-white"
          : "bg-gray-200 text-gray-950"
      }`}
    >
      <SearchBar />
      <MovieList />
    </div>
  );
};

export default Movies;
