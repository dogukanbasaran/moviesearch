import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";

const ThemeBtn = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);
  return (
    <button
      onClick={toggleTheme}
      className={`absolute right-4 top-4 cursor-pointer ${
        theme === "dark" ? "text-yellow-600" : "text-gray-600"
      }`}
    >
      {theme == "dark" ? (
        <LightModeIcon fontSize="large" />
      ) : (
        <NightlightRoundIcon fontSize="large" />
      )}
    </button>
  );
};

export default ThemeBtn;
