import "./App.css";
import HomePage from "./pages/HomePage";
import CarDetail from "./pages/CarDetail";
import SearchCar from "./pages/SearchCar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/carimobil" element={<SearchCar />} />
        <Route path="/detailmobil/:id" element={<CarDetail />} />
        {/* <Route path="/detailmobil/:id" element={<Footer />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
