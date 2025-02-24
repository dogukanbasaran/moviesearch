import { Link } from "react-router";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Movie = ({ id, title, poster }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`group opacity-75 hover:opacity-100 h-[400px] w-[300px]  bg-center rounded-2xl flex items-end justify-center duration-300 border ${
        theme === "dark" ? "border-slate-200/20" : "border-slate-950/20"
      }`}
      style={{
        backgroundImage: `URL(${poster != "N/A" ? poster : "noimage.jpg"})`,
      }}
    >
      <div className=" flex flex-col items-center gap-[5px] py-[10px] w-[100%] bg-black/75 rounded-b-2xl text-white">
        <span className="font-[600] text-[1.25rem] text-center w-[100%]">
          {title}
        </span>
        <button
          className="bg-gradient-to-r from-sky-900 to-sky-700 font-[600] min-[500px]:text-[1.25rem] rounded-[30px]
        cursor-pointer flex justify-center items-center hover:shadow-[0px_0px_20px_rgba(0,0,0,0.1)] hover:scale-[105%] shadow-sky-700/50 transition-all duration-300 ease-in-out"
        >
          <Link to={`/movies/${id}`} className="py-[5px] px-[20px]">
            More
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Movie;
