import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../src/pages/homePage/homePage";
import Nav from "../src/components/Nav/Nav";
import './App.scss';
import "../src/styles/partials/_global.scss";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/build" />
          <Route path="/plannedmeals" />
          <Route path="/groceries" />
          <Route path="/aboutus" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
