import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { CircularProgress } from "@mui/material";

import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import NotFound from "./pages/NotFound";

const App = () => {
  const movies = [
    {
      id: 1,
      name: "rocky 1",
      description: "rocky 1 description",
    },
    {
      id: 2,
      name: "rocky 2",
      description: "rocky 2 description",
    },
    {
      id: 3,
      name: "rocky 3",
      description: "rocky 3 description",
    },
  ];

  const Movies = lazy(() => import("./pages/Movies"));

  return (
    <Router>
      <Suspense
        fallback={
          <div className="h-[100vh] flex justify-center items-center">
            <CircularProgress color="white" size="3rem" />
          </div>
        }
      >
        <Routes>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies movies={movies} />} />
          <Route
            path="/movies/:movieId"
            element={<MovieDetail movies={movies} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
