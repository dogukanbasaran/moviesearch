import { BrowserRouter, Routes, Route } from "react-router";

// import Header from "./components/Header";
// import Footer from "./components/Footer";

import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route index element={<Home />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default App;
