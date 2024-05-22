import { Link, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import User from "./Components/User";
import NavBar from "./Components/NavBar";
import Routing from "./utils/Routing";

const App = () => {
  return (
    <>
      <NavBar />

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user" element={<User />} />
      </Routes> */}

      <Routing />
    </>
  );
};

export default App;
