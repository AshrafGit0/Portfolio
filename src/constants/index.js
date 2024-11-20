import { color } from "framer-motion";
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    // typescript,
    html,
    css,
    bootstrap,
    sass,jquery,
    reactjs,
    nodejs,
    expressjs,
    mongodb,
    git,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    tripguide,
    todolist,
    icecream,
    fakestore,
  } from "../assets";
  // Navlinks
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
    },
    
    {
      id: "contact",
      title: "Contact",
    },
  ];
  export const AboutDescription = "Detail-Oriented and passionate web developer with a strong foundation. Eager to leverage coding Skills and creative problem-solving abilities to build responsive and user-friendly web applications.";
  
  // Services
  export const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: creator,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Mern Stack Developer",
      icon: backend,
    },
  ];
  
  // technologies
  export const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "Sass",
      icon: sass,
    },
    {
      name: "Bootstrap 5",
      icon: bootstrap,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "jQeury",
      icon: jquery,
    },
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Express Js",
      icon: expressjs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    
    {
      name: "git",
      icon: git,
    },
    
  ];
  
  // Projects
 export  const projects = [
    {
      name: "To-Do List",
      description:
        "Developed a To-Do List SPA that allows users to manage tasks efficiently. Add, edit, and delete tasks with ease.",
      tags: [
        {
          name: "html",
          color: "text-danger",
        },
        {
          name: "css",
          color: "text-info",
        },
        {
          name: "javascript",
          color: "text-warning",
        },
        {
          name: "jquery",
          color: "text-warning-emphasis",
        },
        {
          name: "nodejs",
          color: "text-success",
        },
        {
          name: "expressjs",
          color: "text-white",
        },
        {
          name: "mongodb",
          color: "text-success",
        },
      ],
      image: todolist,
      
      source_code_link: "https://github.com/AshrafGit0/To-Do-WebApp",
      live_preview: "https://github.com/AshrafGit0/To-Do-WebApp",
      
    },
    {
      name: "Ice Cream Shop",
      description:" Built an engaging website for an ice cream shop, showcasing menu items, special offers, and shop information.",
      tags: [
        {
          name: "html",
          color: "text-danger",
        },
        {
          name: "css",
          color: "text-info",
        },
        {
          name:"bootstrap",
          color:"text-primary-emphasis"
        },
        {
          name: "react",
          color: "text-primary",
        },
        {
          name: "react-bootstrap",
          color: "text-danger",
        },
      ],
      image: icecream,
      source_code_link: "https://github.com/AshrafGit0/IceCream-Website",
      live_preview: "https://ice-cream-website-react.netlify.app/",
    },
    {
      name: "API Data Display",
      description:"Built a lightweight website that fetches data from the Fake Store API and displays it in a user-friendly layout.",
      tags: [
        {
          name: "html",
          color: "text-danger",
        },
        {
          name: "css",
          color: "text-info",
        },
        {
          name: "jquery",
          color: "text-warning-emphasis",
        },
        {
          name: "restapi",
          color: "text-success",
        },
      ],
      image: fakestore,
      source_code_link: "https://github.com/AshrafGit0/Fetching_Fakestore_Api",
      live_preview: "https://fetching-fakestore-api.vercel.app/",
    },
  ];
  

  