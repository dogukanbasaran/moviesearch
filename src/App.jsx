import { BrowserRouter, Routes, Route } from "react-router";

import Home from "./pages/Home";
import Movies from "./pages/Movies";
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

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies movies={movies} />} />
        <Route
          path="/movies/:movieId"
          element={<MovieDetail movies={movies} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
