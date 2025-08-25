import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/tooltip";

const Tech = () => {
  const renderTooltip = (props) => <Tooltip id="tooltip" {...props}></Tooltip>;
  return (
    <section id="tech" className=" pt-5 position-relative">
      <div className="container-sm">
        <div>
          <h2 className="about-headtxt">Tech Skills</h2>
          <p className="text-secondary about-description">
            These are the tools and technologies I use to build modern web
            applications.
          </p>
        </div>
        <div className=" d-flex pt-2 flex-wrap flex-row mt-4 gap-4 col-lg-12 col-xxl-9">
          {technologies.map((technology, index) => (
            <Tilt index={index} key={index}>
              <motion.div
                variants={fadeIn("left", "spring", 0.2 * index, 0.75)}
              >
                <OverlayTrigger
                  placement="top"
                  delay={{ show: 100, hide: 100 }}
                  overlay={renderTooltip({
                    children: technology.name,
                    className: "tech-tooltip",
                  })}
                >
                  <div
                    options={{
                      max: 45,
                      scale: 1,
                      speed: 450,
                    }}
                    style={{ width: "104px", height: "104px" }}
                    className="tech-card p-4 border border-1 border-info border-opacity-50 rounded rounded-4"
                  >
                    <img
                      src={technology.icon}
                      height="100%"
                      width="100%"
                      alt="Tech image"
                    />
                  </div>
                </OverlayTrigger>
              </motion.div>
            </Tilt>
          ))}
        </div>
        {/* <div className=" about-cards mt-5 pb-4 gap-5 d-flex justify-content-center justify-content-md-start flex-wrap">
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
        </div> */}
      </div>
    </section>
  );
};

export default SectionWrapper(Tech);
