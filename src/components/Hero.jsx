import { Link } from "react-router";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Hero = () => {
  return (
    <div className="h-[auto] w-[96%] flex flex-col justify-center items-center gap-[20px]">
      <h1 className="font-[600] text-[3rem] min-[500px]:text-[4rem] min-[768px]:text-[5rem] text-center">
        MovieSearch
      </h1>
      <h2 className="font-[500] text-[2rem] min-[500px]:text-[3rem] min-[768px]:text-[4rem]  text-center bg-gradient-to-r from-sky-700 to-lime-200 bg-clip-text text-transparent">
        Discover Your Next Favorite Movie
      </h2>
      <h2 className="font-[500] min-[500px]:text-[1.25rem] min-[768px]:text-[1.50rem] text-center bg-gradient-to-r from-gray-200 to-gray-200 bg-clip-text text-transparent">
        Your go-to app for discovering, rating, and saving your favorite movies.
        Explore now and never miss a great film!
      </h2>
      <button
        className="
        mt-[50px] bg-gradient-to-r from-sky-900 to-sky-700 font-[600] min-[500px]:text-[1.25rem] rounded-[30px]
        cursor-pointer flex justify-center items-center gap-[10px]
        hover:shadow-[0px_0px_20px_rgba(0,0,0,0.1)] hover:scale-[105%] shadow-sky-700/50 transition-all duration-300 ease-in-out
        "
      >
        <Link
          to="/movies"
          className="py-[10px] min-[500px]:py-[10px] px-[15px] min-[500px]:px-[30px]"
        >
          {" "}
          Find Movies <ArrowForwardIcon />
        </Link>
      </button>
    </div>
  );
};

export default Hero;
