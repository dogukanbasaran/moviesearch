import { useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  const { query, setQuery, handleFetchingData } = useContext(MovieContext);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="rounded-xl border-none bg-gray-500/15 h-[50px] max-w-[700px] w-[90%] flex items-center">
      <input
        className="h-[100%] w-[93%] outline-none px-[10px] text-[1.25rem]"
        type="text"
        placeholder="search a movie name"
        onChange={handleChange}
        value={query}
        onKeyDown={handleFetchingData}
      />
      <div className="h-[100%]  w-[50px] flex justify-center items-center">
        <Search />
      </div>
    </div>
  );
};

export default SearchBar;
