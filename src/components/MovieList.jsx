import Movie from "../components/Movie";

const MovieList = ({ movies }) => {
  return (
    <div>
      <div className="grid  min-[768px]:grid-cols-2 min-[1024px]:grid-cols-3 gap-[50px]">
        {movies.map((movie) => {
          return <Movie key={movie.id} name={movie.name} id={movie.id} />;
        })}
      </div>
    </div>
  );
};

export default MovieList;
