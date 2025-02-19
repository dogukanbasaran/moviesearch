import { Search } from "@mui/icons-material";
const SearchBar = () => {
  return (
    <div className="rounded-xl border-none bg-gray-500/15 h-[50px] max-w-[700px] w-[100%] flex items-center">
      <input
        className="h-[100%] w-[93%] outline-none px-[10px]"
        type="text"
        placeholder="search a movie name"
      />
      <div className="h-[100%] w-[7%] flex justify-center items-center">
        <Search />
      </div>
    </div>
  );
};

export default SearchBar;
