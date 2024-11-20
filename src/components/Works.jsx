import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { github } from "../assets";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Tooltip, OverlayTrigger } from "react-bootstrap";

const Works = () => {
  const rednerTooltip = (props) => {
    return (
      <Tooltip id="github-tooltip" {...props}>
        <span>{props.title}</span>
      </Tooltip>
    );
  };

  return (
    <section id="projects" className=" py-5  position-relative">
      <div className=" pt-5 container-sm work-section">
        <motion.div variants={textVariant()}>
          <p style={{ opacity: 0.5, fontSize: "16px", letterSpacing: "1px" }}>
            My Work
          </p>
          <h2
            style={{ fontWeight: 700, fontSize: "35px", letterSpacing: "1px" }}
          >
            Projects
          </h2>
        </motion.div>
        <div className="col-lg-8 col-xl-7">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            style={{ textAlign: "justify", lineHeight: "27px" }}
            className=" mt-3 text-secondary"
          >
            Following Projects showcase my skills. Each project is briefly
            described with links to code repositories and live demo in it. It
            reflects my ability to solve complex problems, work with different
            technologies and manage projects effectively.
          </motion.p>
        </div>
        {/* Project Cards */}
        <div className=" mt-5 d-flex flex-wrap gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              variants={fadeIn("up", "spring", index * 0.5, 0.75)}
            >
              <Tilt
                style={{
                  width: "320px",
                  backgroundColor: "rgb(17, 14, 47)",
                }}
                className="p-4 rounded-5"
                options={{
                  max: 45,
                  scale: 1,
                  speed: 450,
                }}
              >
                <div
                  className=" overflow-hidden rounded-3 position-relative"
                  style={{ height: "160px" }}
                >
                  <img
                    width="100%"
                    height="100%"
                    src={project.image}
                    alt={project.name}
                  />
                  <div
                    style={{
                      width: "35px",
                      position: "absolute",
                      height: "35px",
                      borderRadius: "50%",
                      cursor: "pointer",
                      backgroundColor: "rgba(0,0,0,0.9)",
                      right: "10px",
                      top: "10px",
                    }}
                    className=" d-flex justify-content-center align-items-center "
                    onClick={() =>
                      window.open(project.source_code_link, "_blank")
                    }
                  >
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 100, hide: 100 }}
                      overlay={rednerTooltip({ title: "Github" })}
                    >
                      <img
                        width="70%"
                        title="Github"
                        height="70%"
                        src={github}
                        alt="github"
                      />
                    </OverlayTrigger>
                  </div>
                  <div
                    style={{
                      width: "35px",
                      position: "absolute",
                      height: "35px",
                      borderRadius: "50%",
                      cursor: "pointer",
                      backgroundColor: "rgba(0,0,0,0.9)",
                      right: "50px",
                      top: "10px",
                    }}
                    className=" d-flex justify-content-center align-items-center "
                    onClick={() => window.open(project.live_preview, "_blank")}
                  >
                    <OverlayTrigger
                      placement="top"
                      delay={{ show: 100, hide: 100 }}
                      overlay={rednerTooltip({ title: "Live Preview" })}
                    >
                      <span className=" bi bi-box-arrow-up-right"></span>
                    </OverlayTrigger>
                  </div>
                </div>
                <div className=" mt-3">
                  <h3>{project.name}</h3>
                  <span
                    style={{
                      fontSize: "15px",
                      height: "100px",
                      display: "inline-block",
                    }}
                    className=" mt-1
                     text-secondary"
                  >
                    {project.description}
                  </span>
                  <div
                    style={{ height: "60px" }}
                    className=" d-flex mt-2 flex-wrap gap-2"
                  >
                    {project.tags.map((tag, index) => (
                      <span key={tag.name} className={`${tag.color}`}>
                        #{tag.name}
                      </span>
                    ))}
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default SectionWrapper(Works);
