import { useParams, useNavigate } from "react-router";

const MovieDetail = () => {
  const { id } = useParams();

  console.log(id);

  const navigate = useNavigate();

  function backToPrev() {
    navigate(-1);
  }

  return (
    <div className="min-h-[100vh] flex flex-col items-center justify-center">
      <button
        onClick={backToPrev}
        className="bg-gradient-to-r from-sky-900 to-sky-700 font-[600] min-[500px]:text-[1.25rem] rounded-[30px] py-[10px] px-[20px]
        cursor-pointer flex justify-center items-center hover:shadow-[0px_0px_20px_rgba(0,0,0,0.1)] hover:scale-[105%] shadow-sky-700/50 transition-all duration-300 ease-in-out"
      >
        Back to previous page
      </button>
    </div>
  );
};

export default MovieDetail;
