import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import "./styles/Contact.css";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE,
        import.meta.env.VITE_EMAILJS_TEMPLATE,
        {
          from_name: form.name,
          to_name: "Mohammed Ashraf Ali",
          from_email: form.email,
          to_email: "mohammedashrafali377@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_API_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank You. I will get back to you as soon as possible");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong.");
        }
      );
  };
  return (
    <section id="contact" className=" w-100">
      <div className="  container-sm py-5">
        <div className=" d-flex align-items-center gap-5 flex-md-row  flex-column-reverse">
          {/* Contact Form */}
          <motion.div
            variants={slideIn("left", "tweet", 0.2, 1)}
            className=" col-12 col-lg-5 col-xl-4  col-md-6  "
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              style={{ boxShadow: "0 0 20px rgba(0,0,0,0.4)" }}
              className=" d-flex contact-form   border-opacity-25 rounded rounded-5  p-4 flex-column gap-3"
            >
              <div>
                <p className=" text-secondary text-uppercase">Get In Touch</p>
                <h3 className=" form-heading">Connect With Me.</h3>
              </div>
              <div className=" d-flex gap-1 flex-column">
                <label htmlFor="name">Name</label>
                <input
                  required
                  onChange={handleChange}
                  placeholder="What's Your Name"
                  value={form.name}
                  className=" border-secondary border-opacity-50  bg-transparent p-2 text-white form-control"
                  type="text"
                  name="name"
                />
              </div>
              <div className=" d-flex gap-1 flex-column">
                <label htmlFor="email">Email</label>
                <input
                  onChange={handleChange}
                  value={form.email}
                  placeholder="What's Your Email"
                  className=" border-secondary border-opacity-50 bg-transparent p-2 text-white form-control"
                  type="text"
                  name="email"
                  required
                />
              </div>
              <div className=" d-flex gap-1 flex-column">
                <label htmlFor="message">Message</label>
                <textarea
                  onChange={handleChange}
                  value={form.message}
                  rows="4"
                  placeholder="What do you want to say?"
                  className=" text-break border-secondary border-opacity-50 form-control p-2 bg-transparent text-white"
                  name="message"
                  id="contactMessage"
                  required
                ></textarea>
              </div>
              <div className=" py-sm-3 p-1">
                <button
                  type="submit"
                  className="btn w-100 border-secondary btn-outline-light rounded-3 shadow"
                >
                  {loading ? "Sending..." : "Send"}
                </button>
              </div>
            </form>
          </motion.div>
          {/* Earth Canvas */}
          <motion.div
            className=" Earth-canvas col-12 col-md-6"
            variants={slideIn("right", "tweet", 0.2, 1)}
          >
            <EarthCanvas />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Contact);
