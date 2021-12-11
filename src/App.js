import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Hero />
        <Routes>
          <Route path="/" exact />
          new version of react router dom
          {/* <Route path='/welcome' element={<Home/>} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
