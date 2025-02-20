import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";

const Movies = ({
  query,
  setQuery,
  onHandleFetchingData,
  movieData,
  error,
  loading,
}) => {
  return (
    <div className="h-[auto] w-[96%] m-auto py-[50px] flex flex-col items-center gap-[50px]">
      <SearchBar
        query={query}
        setQuery={setQuery}
        onHandleFetchingData={onHandleFetchingData}
      />
      <MovieList movieData={movieData} error={error} loading={loading} />
    </div>
  );
};

export default Movies;
