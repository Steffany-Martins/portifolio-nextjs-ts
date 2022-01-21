import { RiComputerLine as Pc} from "react-icons/ri";
import { FaServer as Server } from "react-icons/fa";
import { AiOutlineAntDesign as Design, AiOutlineApi as Api } from "react-icons/ai";
import { MdDeveloperMode as Dev } from "react-icons/md";
import { IProject, IService, Skill } from "./type";

import { BsCircleFill } from "react-icons/bs";

export const services: IService[] = [
  {
    Icon: Pc,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b> and <b>React.js</b> ",
  },
  {
    Icon: Server,
    title: "Backend Development",
    about:
      "handle database, server, api using <b>Express </b> & other popular frameworks",
  },
  {
    Icon: Api,
    title: "API Development",
    about:
      "I can develop robust  REST API using <b>Node API</b> ",
  },
  {
    Icon: Dev,
    title: "Competitive Coder",
    about: "a daily problem solver in <b>Codewars</b>  and <b>Youtube Challenge</b> ",
  },
  {
    Icon: Design,
    title: "UI/UX designer",
    about:
      "stunning user interface designer using <b>Figma</b>",
  },
  {
    Icon: Pc,
    title: "Whatever",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "SASS",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "JavaScript",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "React Native",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Java",
    level: "50",
  },
  {
    Icon: BsCircleFill,
    name: "Bootstrap",
    level: "80",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Photoshop",
    level: "70",
  },
];

export const projects: IProject[] = [
  { 
    name: "Weather App",
    description:
      "This app shows the weather temperature in search city",
    image_path: "/assets/projects/chrome-capture.gif",
    deployed_url: "https://weather-app-full-pwa.netlify.app/",
    github_url: "https://github.com/Steffany-Martins/PWA-weather",
    category: ["react"],
    key_techs: ["React", "Api Weather", "Node.js"],
  },
  {
    name: "Ecoleta",
    image_path: "/assets/projects/ecoleta.png",
    deployed_url: "https://steffany-martins.github.io/nlw-ecoleta/",
    github_url: "https://github.com/Steffany-Martins/nlw-ecoleta",
    category: ["react", "node", "express"],
    description:
      "Ecoleta is a project developed based on international environment week...",
    key_techs: ["Typescript", "Node.js", "React", "React Native", "Expo"],
  },

  {
    name: "Imersão Alura:KpopFlix",
    image_path: "/assets/projects/kpop-flix.gif",
    deployed_url: "https://dev-talks.herokuapp.com/",
    github_url: "https://github.com/Dey-Sumit/Dev-talks",
    category: ["node", "react"],
    description:
      "The React Immersion project works on building a page that has functions similar to the Netflix website...",
    key_techs: [
      "React",
      "React-slick",
      "Styled-Components",
      "Json-server",
      "Heroku",
    ],
  },

  {
    name: "Snake Game",
    image_path: "/assets/projects/snake-game.png",
    deployed_url: "https://codepen.io/FannyMartins/pen/jOPYRMg",
    github_url: "https://codepen.io/FannyMartins/pen/jOPYRMg",
    category: ["NO-Framework"],
    description:
      "The basic game snake with canvas",
    key_techs: ["canvas", "css"],
  },

  {
    name: "A page with subjects and details",
    image_path: "/assets/projects/react-rocketseat.gif",
    deployed_url: "https://github.com/Steffany-Martins/reaact-rocketseat",
    github_url: "https://github.com/Steffany-Martins/reaact-rocketseat",
    category: [ "react"],
    description:
      "In this repository, you can see an axios request in Heroku Rocketseat 🚀 and a page with subjects about each items in the page.",
    key_techs: ["React", "Node", "Heroku"],
  },

];