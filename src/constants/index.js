import { title } from "framer-motion/client";
import {
  python,
  java,
  sql,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  springboot,
  django,
  flask,
  bootstrap,
  angular,
  mysql,
  flutter,
  resilify
} from "../assets";

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

export const services = [
  { title: "Python", icon: python },
  { title: "Java", icon: java },
  { title: "SQL", icon: sql },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Bootstrap", icon: bootstrap },
  { name: "SpringBoot", icon: springboot },
  { name: "Django", icon: django },
  { name: "Flask", icon: flask },
  { name: "Angular", icon: angular },
  { name: "MySQL", icon: mysql },
  { name: "Flutter", icon: flutter },
  { name: "git", icon: git },
];

//for us in experience section with sample data
/*
export const experiences = [
  {
    title: "AI/ML Intern",
    company_name: "EduSkill Foundation | AWS Academy | AICTE",
    icon: eduskill,
    iconBg: "#161329",
    date: "Sep 2023 - Nov 2023",
    points: [
      "Acquired hands-on knowledge of AWS Cloud Foundation, delving into cloud infrastructure, services, and deployment.",
      "also gaining a solid foundation in Machine Learning, covering topics like algorithms, data analysis, and model building.",
    ],
  },
];
*/

export const projects = [
  {
    name: "Resilify",
    description:
      "Mobile application designed to help individuals suffering from Obsessive-Compulsive Disorder (OCD), focusing on intrusive thoughts.",
    tags: [
      { name: "Flutter", color: "blue-text-gradient" },
      { name: "Flask", color: "green-text-gradient" },
      { name: "Firebase", color: "pink-text-gradient" },
      { name: "Rive animation", color: "pink-text-gradient" },
    ],
    image: resilify,
    source_code_link: "https://resilify.live",
  },
];
