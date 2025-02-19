import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <div className="h-[100vh]  w-[80%] min-[768px]:w-[90%] m-auto py-[150px] flex flex-col justify-center items-center gap-[20px]">
      <h1 className="font-[600] text-[4rem] min-[768px]:text-[5rem] text-center">
        MovieSearch
      </h1>
      <h2 className="font-[500] text-[3rem] min-[768px]:text-[4rem]  text-center bg-gradient-to-r from-sky-700 to-lime-200 bg-clip-text text-transparent">
        Discover Your Next Favorite Movie
      </h2>
      <h2 className="font-[500] text-[1.25rem] min-[768px]:text-[1.50rem] text-center bg-gradient-to-r from-gray-200 to-gray-200 bg-clip-text text-transparent">
        Your go-to app for discovering, rating, and saving your favorite movies.
        Explore now and never miss a great film!
      </h2>
      <button
        className="
        mt-[50px]  bg-gradient-to-r from-sky-900 to-sky-700 font-[600] text-[1.25rem] 
        py-[10px] px-[30px] rounded-[30px]
        cursor-pointer flex justify-center items-center gap-[10px]
        hover:shadow-[0px_0px_20px_rgba(0,0,0,0.1)] hover:scale-[105%] shadow-sky-700/50 transition-all duration-300 ease-in-out
        "
      >
        Find Movies <ArrowForwardIcon />
      </button>
    </div>
  );
};

export default Hero;
