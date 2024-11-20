import { motion } from "framer-motion";
import "./styles/Hero.css";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className=" pt-5 hero-section text-white position-relative">
      <div className=" container-sm mt-2 pt-4  d-flex flex-column ">
        <div className="  d-flex flex-row">
          <div className=" d-flex flex-column pt-5 justify-content-center">
            <div className=" violet-round"></div>
            <div className=" violet-line"></div>
          </div>
          <div className="  mt-5 ms-3 pt-1">
            <h1 className=" fw-bold">
              Hi, I'm <span className="hero-txtColor">Mohammed Ashraf Ali</span>
            </h1>
            <p className="fs-5 text-break">
              <span className=" fw-semibold">UI Full Stack Developer</span>{" "}
              <br />I Develop seamless, user-friendly and responsive web
              applications
            </p>
          </div>
        </div>
        <div className=" ms-2 mt-2 position-relative z-1 ">
          <ul className=" social-links d-flex gap-3 fs-4 list-unstyled">
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/mohammed-ashraf377/"
                className=" bi bi-linkedin"
              ></a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://github.com/AshrafGit0"
                className=" bi bi-github"
              ></a>
            </li>
            <li>
              <a
                target="_blank"
                href="mailto:mohammedashrafali377@gmail.com"
                className=" bi bi-envelope-at"
              ></a>
            </li>
            <li>
              <a href="#twitter" className=" bi bi-twitter"></a>
            </li>
            <li>
              <a href="#instagram" className=" bi bi-instagram"></a>
            </li>
          </ul>
        </div>
      </div>
      <div className=" d-flex justify-content-start container-fluid computer-canvas">
        <ComputersCanvas />
      </div>
      <div className=" d-flex w-100 heroPill-container justify-content-center  position-absolute">
        <a href="#about">
          <div className="hero-navPill d-flex justify-content-center">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="animate-pill"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
