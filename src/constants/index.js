import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  gdg,
  newgen,
  kongsberg
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React Developer",
    icon: web,
  },
  {
    title: "Remix",
    icon: mobile,
  },
  {
    title: "Angular ",
    icon: backend,
  },
  {
    title: "AntD ",
    icon: creator,
  },
  {
    title: "Re-chart",
    icon: creator,
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
    name: "Remix",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "AntD",
    icon: nodejs,
  },
 
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Google Developers Group",
    icon: gdg,
    iconBg: "#383E56",
    date: "Sept '17 to August '20",
    points: [
      "Developing and maintaining web applications using HTML, JSS, Javascript.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Developer",
    company_name: "Newgen",
    icon: newgen,
    iconBg: "#E6DEDD",
    date: "September '20 - Jan '22",
    points: [
      "• Developed and maintained responsive web applications using React, resulting in a 20% increase in website performance and a 30% reduction in page load times.",
      "• Implemented efficient and reusable components using React and other UI libraries, resulting in a 25% increase in code reusability and a 40% reduction in development time.",
      "• Collaborated with designers, backend developers, and other stakeholders to ensure seamless integration of front-end and back-end components, resulting in a 50% reduction in bugs and errors in the development process.",
      "• Researched and recommended new technologies and tools to enhance development workflows and improve user experience, resulting in a 15% increase in user engagement and a 20% increase in website traffic.",
      "• Actively participated in team meetings and provided technical guidance and support to junior developers, resulting in a 30increase in productivity and a 50% reduction in time spent on code review and debugging.",
    ],
  },
  {
    title: "React/Remix/Angular Developer",
    company_name: "Kongsberg Digital",
    icon: kongsberg,
    iconBg: "#383E56",
    date: "Jan '22 - Present",
    points: [
      "• Developed a module in React.js using Context API, AntD, Recharts.js, and Tailwind CSS, resulting in a 30% improvement in performance.",
      "• Optimized load time of the module, reducing it by 40% and enhancing user experience.",
      "• Implemented a redesigned UI/UX, resulting in a 20% increase in user engagement.",
      "• Actively gathered and analyzed client requirements, providing valuable inputs that led to a 15% increase in client satisfaction.",
      "• Collaborated with the business team to align development efforts with the organization’s strategic goals, resulting in a 10% increase in project efficiency.",
      "• Led a team of freshers in successfully delivering the module within the specified time-frame, ensuring on-time project completion.",
      "• Acted as a key point of contact for client communications, facilitating effective client collaboration and ensuring client expectations were met.",
      "• Contributed to the continuous improvement of development processes, implementing best practices and tools that led to a 25% reduction in bug occurrences.",
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
