/* eslint-disable */
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Hero,
  Navbar,
  Tech,
  Works,
  Contact,
  StarsCanvas,
} from "./components";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div
        data-spy="scroll"
        data-bs-target="#scrollspy"
        data-offset="0"
        className=" containerFluid p-1  text-white position-relative"
      >
        <div id="scrollspy">
          <div className=" bg-main">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Tech />
          <Works />
          <div className=" position-relative z-1">
            <Contact />
            {/* <StarsCanvas /> */}
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
