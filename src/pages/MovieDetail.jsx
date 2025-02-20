import { useParams } from "react-router";

const MovieDetail = ({ movies }) => {
  const { movieId } = useParams();

  const movie = movies.find((movie) => movie.id === parseInt(movieId));
  return (
    <div className="h-[100vh] flex items-center justify-center">
      <div>
        <h1 className="text-[3rem]">{movie.name}</h1>
        <p className="text-[1.5rem]"> {movie.description}</p>
      </div>
    </div>
  );
};

export default MovieDetail;
