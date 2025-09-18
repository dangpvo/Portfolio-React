// Projects assets
import fugina_about from "./Fugina/fugina_about.png";
import fugina_cart from "./Fugina/fugina_cart.png";
import fugina_checkout from "./Fugina/fugina_checkout.png";
import fugina_collection from "./Fugina/fugina_collection.png";
import fugina_contact from "./Fugina/fugina_contact.png";
import fugina_home from "./Fugina/fugina_home.png";
import fugina_login from "./Fugina/fugina_login.png";
import fugina_orders from "./Fugina/fugina_orders.png";

import tuc_swc from "./TUC_SWC/tuc_swc_1.jpg";
import pego from "./PEGO/pego.png";
import portfolioImg from "./Others/portfolio.png";
import sheetlinkImg from "./Others/sheetlink_2.jpg";
import uplinxDashboardImg from "./Others/uplinx_dashboard_3.png";
import elysianStayImg from "./ElysianStay/elysianhotel.png";

// Static assets
import avatar_about from "./avatarAbout_1.jpg";
import avatar_home from "./avatarHome_1.jpg";

// Techstack assets
import fe_angular from "./TechStack/Frontend/angular.png";
import fe_bootstrap from "./TechStack/Frontend/bootstrap.png";
import fe_css from "./TechStack/Frontend/css.png";
import fe_html from "./TechStack/Frontend/html.png";
import fe_js from "./TechStack/Frontend/js.png";
import fe_react from "./TechStack/Frontend/react.png";
import fe_redux from "./TechStack/Frontend/redux.png";
import fe_tailwindcss from "./TechStack/Frontend/tailwindcss.png";
import fe_typescript from "./TechStack/Frontend/typescript.png";
import fe_axios from "./TechStack/Frontend/Axios_logo.png";
import fe_nextjs from "./TechStack/Frontend/nextjs.png";
import fe_scss from "./TechStack/Frontend/scss.png";

import be_aspnetcore from "./TechStack/Backend/aspnetcore.png";
import be_expressjs from "./TechStack/Backend/expressjs.png";
import be_nodejs from "./TechStack/Backend/nodejs.png";
import be_supabase from "./TechStack/Backend/supabase.png";

import db_postgres from "./TechStack/Database/postgres.png";
import db_mysql from "./TechStack/Database/mysql.png";

export const assets = {
  avatar_about,
  avatar_home,
};

// Sample Project Item
// {
//     _id: "",
//     name: "",
//     description: ``, //Show in featured project
//     description_1: ``, //Show in work section
//     description_2: ``, //Show in work section
//     tech_stack: [], //Show in featured project
//     features: [], //Show in featured project
//     url: "#",
//     paper: "", //IEEE paper for example
//     images: [],
// },
export const projects = [
  {
    _id: "fugina",
    name: "Fugina Shop",
    description: `FuginaShop is an intuitive e-commerce platform offering a seamless
          shopping experience with a clean design, fast performance, and
          user-friendly features. It is built to provide an easy way for users
          to browse and purchase products online.`,
    description_1: `FuginaShop is a modern, responsive e-commerce platform designed
              for a seamless shopping experience.`,
    description_2: ` With a clean, minimalist design and intuitive interface,
              FuginaShop delivers fast load times and smooth interactions across
              all devices. Whether shopping for personal items or exploring new
              trends, it offers a hassle-free and enjoyable online experience.`,
    tech_stack: ["ReactJS", "TailwindCSS", "Context API", "React Router"],
    features: [
      "🛍️ Product listing with categories & subcategories",
      "🛒 Shopping cart management",
      "💳 Checkout process",
      "🎨 Responsive UI for mobile & desktop",
      "🚀 Fast performance with React",
    ],
    url: "https://fugina.netlify.app/",
    paper: "",
    images: [
      fugina_home,
      fugina_collection,
      fugina_cart,
      fugina_checkout,
      fugina_orders,
      fugina_contact,
      fugina_about,
      fugina_login,
    ],
  },
  {
    _id: "elysian",
    name: "Elysian Stay",
    description: `FuginaShop is an intuitive e-commerce platform offering a seamless
          shopping experience with a clean design, fast performance, and
          user-friendly features. It is built to provide an easy way for users
          to browse and purchase products online.`,
    description_1: `ElysianStay is a modern, responsive hotel management platform designed 
                to simplify room booking and hotel operations.`,
    description_2: `With an intuitive interface and elegant design, ElysianStay allows users 
                to easily browse rooms, make reservations, and manage hotel operations 
                seamlessly across all devices. Whether for guests or hotel staff, it offers 
                a smooth and efficient experience.`,
    tech_stack: ["ReactJS", "TailwindCSS", "Context API", "React Router"],
    features: [
      "🏨 Browse available rooms with details and images",
      "📅 Room booking and reservation management",
      "🛎️ Hotel room management for staff",
      "🎨 Responsive UI for mobile and desktop",
      "🚀 Fast and smooth interactions with React",
    ],
    url: "https://elysianstay.netlify.app/",
    paper: "",
    images: [elysianStayImg],
  },
  {
    _id: "uplinx",
    name: "Uplinx Dashboard",
    description: ``,
    description_1: `Uplinx is a responsive React admin dashboard built with modern technologies like Vite, Tailwind CSS, and Recharts.`,
    description_2: `The dashboard includes dynamic charts, and modular components designed for easy extension. Uplinx is ideal for developers building admin panels, analytics tools, or SaaS platforms. Features like sidebar navigation, and reusable card components make development faster.`,
    tech_stack: ["ReactJS"],
    features: [],
    url: "https://uplinx.netlify.app/",
    paper: "",
    images: [uplinxDashboardImg],
  },
  // {
  //   _id: "portfolio",
  //   name: "Portfolio",
  //   description: ``,
  //   description_1: `My portfolio highlights my skills in front-end development, featuring projects that blend functionality with clean, modern design.`,
  //   description_2: `Designed to be lightweight and responsive, it includes sections for my work, skills, and contact information. This project reflects my ability to build clean, structured, and easy-to-navigate web applications.`,
  //   tech_stack: ["ReactJS"],
  //   features: [],
  //   url: "https://dangpvo.netlify.app/",
  //   paper: "",
  //   images: [portfolioImg],
  // },
  {
    _id: "tuc_swc",
    name: "TUC_SWC_Designer",
    description: ``,
    description_1: `A block-based coding interface designed to simplify programming for automotive and drone systems.`,
    description_2: `It enables users to visually create and execute commands, making complex functionalities more accessible. Improves task completion time by 67% and enhances engagement through an interactive and flexible design. Supports hands-on learning with dynamic functions for real-world applications.`,
    tech_stack: [],
    features: [],
    url: "https://youtu.be/Hke_8DwVb-U?si=9QK3thUK2SA1dR2S",
    paper: "https://ieeexplore.ieee.org/document/10690658",
    images: [tuc_swc],
  },
  {
    _id: "sheetlink",
    name: "SheetLink",
    description: ``,
    description_1: `A Revit plugin designed to simplify data import/export processes between Revit and external platforms.`,
    description_2: `It enables users to quickly transfer large sets of data, improving workflow efficiency in architectural and engineering projects. Achieved over 1000 downloads with excellent user feedback, making it a valuable tool for professionals in the AEC industry.`,
    tech_stack: [],
    features: [],
    url: "https://youtu.be/h4Mu-IUzuEg?si=3b5TO8hD-huhA2W1",
    paper: "",
    images: [sheetlinkImg],
  },
  {
    _id: "pego",
    name: "PEGO",
    description: ``,
    description_1: `PEGO is a genetic algorithm-based application developed to optimize the timetabling process in the Vietnamese education system.`,
    description_2: `By automating the generation of schedules, it significantly reduced the time required for creating timetables, making the process faster and more efficient. With an impressive 98% reduction in generation time, PEGO cut down the scheduling process from one week to just 22 minutes for over 70 teachers and 1500 students.`,
    tech_stack: [],
    features: [],
    url: "https://youtu.be/hEej9yV276U?si=-YBUGBpdUxN8Yza3",
    paper: "",
    images: [pego],
  },
];

export const techstack = [
  {
    _id: "fe",
    name: "frontend",
    stack: [
      {
        name: "HTML",
        url: fe_html,
      },
      {
        name: "CSS",
        url: fe_css,
      },
      {
        name: "SCSS",
        url: fe_scss,
      },
      {
        name: "JavaScript",
        url: fe_js,
      },
      {
        name: "TypeScript",
        url: fe_typescript,
      },
      {
        name: "React",
        url: fe_react,
      },
      {
        name: "Next.js",
        url: fe_nextjs,
      },
      {
        name: "Angular",
        url: fe_angular,
      },
      {
        name: "Redux",
        url: fe_redux,
      },
      {
        name: "Axios",
        url: fe_axios,
      },
      {
        name: "Tailwind CSS",
        url: fe_tailwindcss,
      },
      {
        name: "Bootstrap",
        url: fe_bootstrap,
      },
    ],
  },
  {
    _id: "be",
    name: "backend",
    stack: [
      {
        name: "ASP.Net Core",
        url: be_aspnetcore,
      },
      {
        name: "Node.js",
        url: be_nodejs,
      },
      {
        name: "Express.js",
        url: be_expressjs,
      },
      {
        name: "Supabase",
        url: be_supabase,
      },
    ],
  },
  {
    _id: "db",
    name: "database",
    stack: [
      {
        name: "PostgreSQL",
        url: db_postgres,
      },
      {
        name: "MySQL",
        url: db_mysql,
      },
    ],
  },
];
