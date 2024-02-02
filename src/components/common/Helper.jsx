import projects_img from "../../assets/images/png/quby-ai.png";
import projects_img2 from "../../assets/images/png/music.png";
import projects_img3 from "../../assets/images/png/todo.png";
import nexai from "../../assets/images/png/Nexai.png";
import privat from "../../assets/images/png/private-cash.png";
export const navLinks = [
  { to: "/", label: "home", has: "#" },
  { to: "/project", label: "works", has: "#" },
  { to: "/about", label: "about-me", has: "#" },
  { to: "/contact", label: "contacts", has: "#" },
];

export const projects = [
  {
    img: projects_img,
    skill: "React and Tailwind CSS",
    projectsName: "Quby AI",
    servers:
      "QuBy Ai is a groundbreaking Web 3.0 online game, free to play and loaded with opportunities for players to earn $QUBYAI tokens",
    btn: "Live",
    link: "https://quby01.netlify.app/",
  },
  {
    img: nexai,
    skill: "React Js, GSAP animation and Bootstrap",
    projectsName: "Nexai",
    servers: "Nexai Is An Advanced AI-Powered Assistant",
    btn: "Live",
    link: "https://nexai-ai.netlify.app/",
  },
  {
    img: privat,
    skill: "React Js, Tailwind CSS and Animations",
    projectsName: "privat cash",
    servers: "Privat cash no kyc crypto cashout",
    btn: "Live",
    link: "https://music-player-blue-eight.vercel.app/",
  },
  {
    img: projects_img2,
    skill: "React Js and Typescript",
    projectsName: "Music Player",
    servers: "Music player without any third party library",
    btn: "Live",
    link: "https://music-player-blue-eight.vercel.app/",
  },
  {
    img: projects_img3,
    skill: "React Js , Typescript and Firstore-firebase",
    projectsName: "Todo App",
    servers: "Todo app for managing your work",
    btn: "Live",
    link: "https://my-todo-orpin-pi.vercel.app/",
  }
];
