import { BrowserRouter as Router, Routes, Route } from "react-router";
import { MovieProvider } from "./contexts/MovieContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { lazy, Suspense } from "react";
import { CircularProgress } from "@mui/material";

import ThemeBtn from "./components/ThemeBtn";
import Layout from "./components/Layout";
import Footer from "./components/Footer";

import Home from "./pages/Home";
const Movies = lazy(() => import("./pages/Movies"));
import MovieDetail from "./pages/MovieDetail";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <ThemeProvider>
      <ThemeBtn />
      <MovieProvider>
        <Router>
          <Suspense
            fallback={
              <div className="h-[100vh] bg-gray-950 text-white flex justify-center items-center">
                <CircularProgress color="white" size="2rem" />
              </div>
            }
          >
            <Routes>
              <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/movies/:id" element={<MovieDetail />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Router>
        <Footer />
      </MovieProvider>
    </ThemeProvider>
  );
};

export default App;
