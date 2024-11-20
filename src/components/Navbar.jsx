/* eslint-disable */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";
import { CloseButton, Offcanvas } from "react-bootstrap";

import { navLinks } from "../constants";
import { HeaderSvg } from "./Svg-Component";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      style={{ backgroundColor: scrolled ? "rgba(2, 11, 33)" : "transparent" }}
      className=" z-3 position-fixed w-100 top-0"
    >
      <div className="container-sm d-flex p-2 align-items-center justify-content-between">
        <div>
          <Link
            to="/"
            onClick={() => {
              setActive("");
              window.scroll(0, 0);
            }}
            className=" d-flex align-items-center text-white text-decoration-none"
          >
            <HeaderSvg />
            <h4 className=" head-txt mt-2">shraf.dev</h4>
          </Link>
        </div>
        <nav className=" d-sm-block d-none">
          <ul className=" list-unstyled mt-2 d-flex gap-4 fs-5 ">
            {navLinks.map((navLink) => (
              <li key={navLink.id} onClick={() => setActive(navLink.title)}>
                <a
                  href={`#${navLink.id}`}
                  className={` link-opacity-100-hover ${
                    active === navLink.title ? "link-light" : "link-opacity-50"
                  } link-light text-decoration-none `}
                >
                  {navLink.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className=" d-sm-none d-block">
          <span
            onClick={() => setShow(true)}
            style={{ cursor: "pointer" }}
            className=" text-white fs-3 bi bi-list"
          ></span>
        </div>
        <Offcanvas
          placement="end"
          className=" p-2 text-white bg-dark"
          show={show}
          onHide={() => setShow(false)}
        >
          <Offcanvas.Header>
            <Offcanvas.Title
              style={{ fontFamily: "Ubuntu" }}
              className="text-center fs-2"
            >
              <HeaderSvg />
              shraf.dev
            </Offcanvas.Title>
            <CloseButton onClick={() => setShow(false)} variant="white" />
          </Offcanvas.Header>
          <Offcanvas.Body>
            <nav className="">
              <ul className=" list-unstyled mt-2 d-flex flex-column gap-4 fs-5 ">
                {navLinks.map((navLink) => (
                  <li
                    key={navLink.id}
                    onClick={() => {
                      setActive(navLink.title);
                      setShow(false);
                    }}
                  >
                    <a
                      // style={{
                      //   color: `${
                      //     active === navLink.title ? "blue" : "white"
                      //   } `,
                      // }}
                      href={`#${navLink.id}`}
                      className={` link-opacity-100-hover ${
                        active === navLink.title
                          ? "link-light"
                          : "link-opacity-50"
                      } link-light text-decoration-none `}
                    >
                      {navLink.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </header>
  );
};

export default Navbar;
