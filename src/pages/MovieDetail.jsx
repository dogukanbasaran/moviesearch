import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "axios";
import { ThemeContext } from "../contexts/ThemeContext";

const MovieDetail = () => {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState("");
  const { theme } = useContext(ThemeContext);

  const fetchMovieDetail = async () => {
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=5f004e13&i=${id}`
      );
      setMovieDetail(response.data);
    } catch (error) {
      console.error("Error", error);
    }
  };

  useEffect(() => {
    fetchMovieDetail();
  }, [id]);

  useEffect(() => {}, [movieDetail]);

  const navigate = useNavigate();

  function backToPrev() {
    navigate(-1);
  }

  return (
    <>
      <div
        className={`h-[auto] min-h-[500px] w-[90%] max-w-[700px] min-[550px]:text-[1.50rem] border ${
          theme === "dark" ? "border-slate-200/20" : "border-slate-950/20"
        } rounded-2xl p-4 gap-[20px] flex flex-col`}
      >
        <span className=" w-[100%] flex justify-center text-[2rem] min-[550px]:text-[3rem] font-[600]">
          {movieDetail.Title}
        </span>
        <div className="flex gap-[20px]">
          <img
            src={`${movieDetail.Poster} != "N/A" ? ${movieDetail.Poster} : "/noimage.jpg"`}
            alt="movie poster"
            className="w-[120px] min-[550px]:w-[300px] rounded-2xl"
          />
          <div className="flex flex-col">
            <span>
              <b className="text-yellow-500">Released Year:</b>{" "}
              {movieDetail.Year}
            </span>
            <span className="flex gap-[4px]">
              <b className="text-yellow-500">Rating:</b>{" "}
              {movieDetail.imdbRating}
              /10
            </span>
            <span>
              <b className="text-yellow-500">Genre:</b> {movieDetail.Genre}
            </span>
            <span>
              <b className="text-yellow-500">Director:</b>{" "}
              {movieDetail.Director}
            </span>
            <span>
              <b className="text-yellow-500">Actors:</b> {movieDetail.Actors}
            </span>
          </div>
        </div>
        <p className="text-[1.25rem] min-[550px]:text-[1.50rem]">
          {movieDetail.Plot}
        </p>
      </div>
      <button
        onClick={backToPrev}
        className="bg-gradient-to-r from-sky-900 to-sky-700 font-[600] min-[500px]:text-[1.25rem] text-white rounded-[30px] py-[10px] px-[20px]
        cursor-pointer flex justify-center items-center hover:shadow-[0px_0px_20px_rgba(0,0,0,0.1)] hover:scale-[105%] shadow-sky-700/50 transition-all duration-300 ease-in-out"
      >
        Back to previous page
      </button>
    </>
  );
};

export default MovieDetail;
