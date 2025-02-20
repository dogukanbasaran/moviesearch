import { CircularProgress } from "@mui/material";
import Movie from "../components/Movie";

const MovieList = ({ movieData, error, loading }) => {
  return (
    <div>
      <div className="grid  min-[768px]:grid-cols-2 min-[1024px]:grid-cols-3 gap-[50px]">
        {loading == true ? (
          <CircularProgress
            color="white"
            size="2rem"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        ) : (
          movieData?.Search?.map((movie) => (
            <Movie
              key={movie.imdbID}
              id={movie.imdbID}
              name={movie.Title}
              poster={movie.Poster}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default MovieList;
