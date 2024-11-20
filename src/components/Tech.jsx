import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { BallCanvas } from "./canvas";

const Tech = () => {
  return (
    <section id="tech" className=" pt-5 position-relative">
      <div className=" container-sm">
        <div className=" d-flex pt-2 flex-wrap flex-row gap-3 col-lg-10 col-xl-8 justify-content-center">
          {technologies.map((technology) => (
            <div
              key={technology.name}
              style={{ width: "104px", height: "104px" }}
            >
              <BallCanvas icon={technology.icon} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Tech);
