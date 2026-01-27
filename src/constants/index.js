import {
  backend,
  web,
  mobile,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nodejs,
  git,
  portfolio,
  cake_shop,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Project",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const projects = [
  {
    name: "Cake Shop",
    description:
      "Developed a full-stack web application using HTML, CSS, JavaScript, and SQL. Implemented responsive design and secure database operations to enhance user experience and data reliability.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "sql",
        color: "blue-text-gradient",
      },
    ],
    image: cake_shop,
    // source_code_link: "",
  },
  {
    name: "Portfolio Website",
    description:
      "A 3D portfolio website built using React.js and 3D libraries to showcase my projects, skills, and achievements in an interactive and visually engaging format. It includes smooth animations, responsive design, and a modern user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      }
    ],
    image: portfolio,
    // source_code_link: "https://github.com/ayushshanks/PetGrove",
  }
];

export { services, technologies, projects };