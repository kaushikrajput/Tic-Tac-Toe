import "./App.css";
import Movies from "./components/movie/Movies";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import Summary from "./components/summary/Summary";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/summary/:id" element={<Summary />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
