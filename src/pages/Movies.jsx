import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";

const Movies = () => {
  return (
    <div className="min-h-[100vh] w-[100%] flex flex-col  items-center gap-[50px]">
      <SearchBar />
      <MovieList />
    </div>
  );
};

export default Movies;
