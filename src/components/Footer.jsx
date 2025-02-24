import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <footer
      className={`border-t duration-300 ${
        theme === "dark"
          ? "bg-gray-950 text-white border-slate-200/10"
          : "bg-gray-200 text-gray-950 border-slate-950/10"
      }  h-[8vh] flex justify-center items-center`}
    >
      <span className="font-[700] text-[1.25rem]">
        Dogukan Basaran &copy; 2025.
      </span>
    </footer>
  );
};

export default Footer;
