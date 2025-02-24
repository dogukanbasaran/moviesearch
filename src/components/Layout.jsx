import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { Outlet } from "react-router";

const Layout = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <main
      className={`py-[100px] min-h-[100vh] h-auto flex flex-col justify-center items-center gap-[20px] 
    duration-300 ${
      theme === "dark" ? "bg-gray-950 text-white" : "bg-gray-200 text-gray-950"
    }`}
    >
      <Outlet />
    </main>
  );
};

export default Layout;
