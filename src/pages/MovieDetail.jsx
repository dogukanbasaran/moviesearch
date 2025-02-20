import { useParams } from "react-router";

const MovieDetail = ({ movieData }) => {
  const { movieId } = useParams();

  const movie = movieData.find((movie) => movie.id === parseInt(movieId));

  console.log(movie);
  return (
    <div className="h-[100vh] flex items-center justify-center">
      <div>
        <h1 className="text-[3rem]">MOVIE TITLE</h1>
      </div>
    </div>
  );
};

export default MovieDetail;
