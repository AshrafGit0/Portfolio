import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { services, AboutDescription } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import "./styles/About.css";
import { SectionWrapper } from "../hoc";

const About = () => {
  return (
    <section id="about" className=" pt-5 position-relative z-2">
      <div className=" section container-sm">
        <div className=" col-lg-8 col-xl-7">
          <motion.div variants={textVariant()} className=" mt-4">
            <p className=" about-subtxt ">INTRODUCTION</p>
            <h2 className=" about-headtxt ">Overview.</h2>
          </motion.div>
          <motion.p
            className=" mt-2 about-description text-secondary"
            variants={fadeIn("", "", 0.1, 1)}
          >
            {AboutDescription}
          </motion.p>
        </div>
        {/* Service Cards */}
        <div className=" about-cards mt-5 pb-4 gap-5 d-flex justify-content-center justify-content-md-start flex-wrap">
          {services.map((service, index) => (
            <Tilt
              className={`${service.title}`}
              index={index}
              key={service.title}
            >
              <motion.div
                className="tilt-card"
                variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
              >
                <div
                  options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                  }}
                  className=" p-2 d-flex flex-column justify-content-center text-center gap-4 align-items-center tilt-body"
                >
                  <img src={service.icon} width="50px" alt={service.icon} />
                  <h4 className="fw-semibold">{service.title}</h4>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(About);
