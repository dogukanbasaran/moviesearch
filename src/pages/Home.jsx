import { useContext } from "react";
import Hero from "../components/Hero";
import { ThemeContext } from "../contexts/ThemeContext";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`h-[100vh] flex justify-center items-center duration-300 ${
        theme === "dark"
          ? "bg-gray-950 text-white"
          : "bg-gray-200 text-gray-950"
      }`}
    >
      <Hero />
    </div>
  );
};

export default Home;
