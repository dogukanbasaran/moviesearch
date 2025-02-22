import { Link } from "react-router";
const Movie = ({ id, name, poster }) => {
  return (
    <div
      className={`group opacity-75 hover:opacity-100 h-[400px] w-[300px] bg-center rounded-2xl flex items-end justify-center`}
      style={{
        backgroundImage: `URL(${poster != "N/A" ? poster : "noimage.jpg"})`,
      }}
    >
      <div className="translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 duration-300 flex flex-col items-center gap-[5px] py-[10px] w-[100%]  bg-black/75">
        <span className="font-[600] text-[1.25rem] text-center w-[100%]">
          {name}
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
