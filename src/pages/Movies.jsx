import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";

const Movies = () => {
  return (
    <div className="h-[auto] w-[96%] m-auto py-[50px] flex flex-col items-center gap-[50px]">
      <SearchBar />
      <MovieList />
    </div>
  );
};

export default Movies;
