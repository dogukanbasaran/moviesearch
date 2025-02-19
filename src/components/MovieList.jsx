import Movie from "../components/Movie";

const movies = [
  {
    name: "movie 1",
  },
  {
    name: "movie 2",
  },
  {
    name: "movie 3",
  },
  {
    name: "movie 4",
  },
  {
    name: "movie 5",
  },
  {
    name: "movie 1",
  },
  {
    name: "movie 2",
  },
  {
    name: "movie 3",
  },
  {
    name: "movie 4",
  },
  {
    name: "movie 5",
  },
  {
    name: "movie 4",
  },
  {
    name: "movie 5",
  },
];

const MovieList = () => {
  return (
    <div>
      <div className="grid  min-[768px]:grid-cols-2 min-[1024px]:grid-cols-3 gap-[50px]">
        {movies.map((movie) => {
          return <Movie key={movie.name} name={movie.name} />;
        })}
      </div>
    </div>
  );
};

export default MovieList;
