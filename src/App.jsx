import { BrowserRouter, Routes, Route } from "react-router";

import Home from "./pages/Home";
import Movies from "./pages/Movies";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
