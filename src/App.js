import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "../src/components/Nav/Nav";
import HomePage from "./pages/HomePage/HomePage";
import MealBuild from "./pages/MealBuild/MealBuild";
import PlannedMeals from "./pages/PlannedMeals/PlannedMeals";
import Groceries from "./pages/Groceries/Groceries";
import AboutUs from "./pages/AboutUs/AboutUs";
import "../src/styles/partials/_global.scss";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/build" element={<MealBuild />} />
          <Route path="/plannedmeals" element={<PlannedMeals />} />
          <Route path="/groceries" element={<Groceries />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
        <Nav />
      </BrowserRouter>
    </div>
  );
}

export default App;
