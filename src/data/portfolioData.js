 const portafolioData = [
  {
    imgSrc: "../img/portfolio_img/srock-paper-scissors.jpg",
    titulo: "rock paper scissors",
    skills: ["JavaScript", "CSS"],
    descripcion:
      "Rules If the player wins, they gain 1 point. If the computer wins, the player loses one point.",
    demoURL: "https://rock-paper-scissors-jyothisl.netlify.app/",
    repoURL: "https://github.com/SLJyothi/rock-paper-scissors",
    anim:"fade-right"
  },
  {
    imgSrc: "../img/portfolio_img/character maker.png",
    titulo: "Character Maker",
    skills: ["React", "JavaScript", "CSS"],
    descripcion: " Create with love.",
    demoURL: "https://character-maker-fun.netlify.app",
    repoURL: "https://github.com/SLJyothi/Character-maker",
    anim:"fade-up"
  },
  {
    imgSrc: "../img/portfolio_img//My Portfolio.png",
    titulo: "My Portfolio",
    skills: ["React", "CSS"],
    descripcion: "My Portfolio.",
    demoURL: "https://sljyothi.github.io/JyothiSL-Portfolio/",
    repoURL: "https://github.com/SLJyothi/JyothiSL-Portfolio",
    anim:"fade-left"
  },
  {
    imgSrc: "../img/portfolio_img//Chun Data Analysis .png",
    titulo: "Chun Data Analysis",
    skills: ["Astro", "React", "JavaScript" ],
    descripcion: "Just the repository of my portfolio on GitHub.",
    repoURL: "https://github.com/SLJyothi/Churn-Data-Analysis",
    anim:"fade-right"
  },
];

 const skillIcons = {
  JavaScript: "skill-icons:javascript",
  React: "skill-icons:react-dark",
  Astro: "skill-icons:astro",
  CSS: "skill-icons:css",
  Sass: "skill-icons:sass",
  StyledComponents: "skill-icons:styledcomponents",
  Bootstrap: "devicon:bootstrap",
  /*  Tailwind: "skill-icons:tailwindcss-dark", */
};

export  {portafolioData,skillIcons}