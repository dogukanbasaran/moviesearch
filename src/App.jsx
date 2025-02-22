import { BrowserRouter as Router, Routes, Route } from "react-router";
import { MovieProvider } from "./contexts/MovieContext";
import { lazy, Suspense } from "react";
import { CircularProgress } from "@mui/material";

import Home from "./pages/Home";
const Movies = lazy(() => import("./pages/Movies"));
import MovieDetail from "./pages/MovieDetail";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <MovieProvider>
      <Router>
        <Suspense
          fallback={
            <div className="h-[100vh] flex justify-center items-center">
              <CircularProgress color="white" size="2rem" />
            </div>
          }
        >
          <Routes>
            <Route index element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:id" element={<MovieDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </MovieProvider>
  );
};

export default App;
