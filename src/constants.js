// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';

// Experience Section Logo's
import blueStock from './assets/company_logo/blueStock.webp';
import HealBharat from './assets/company_logo/Heal Bharat.jpg';
import shadowFox from './assets/company_logo/shadowFox.png';
import GauravGo from './assets/company_logo/GauravGo.jpg';

// Education Section Logo's
import GitaLogo from './assets/education_logo/Gita.jpg';
import BharagviLogo from './assets/education_logo/Bhargavi.png';
import BSElogo from './assets/education_logo/BSE.webp';


// Project Section Logo's
import Currency from './assets/work_logo/CurrencyConveter.png';
import TicTacToc from './assets/work_logo/Tic-Tac-Toc.png'
import imagesearchLogo from './assets/work_logo/imageSearch.png';
import VirtualLearn from './assets/work_logo/VirtualLearning.png'


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: blueStock,
      role: "Fullstack Developer",
      company: "Bluestock",
      date: "January 2025 - April 2025 ",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Next Js",
      ],
    },
    {
      id: 1,
      img: HealBharat,
      role: "Web Developer",
      company: "Heal Bharat",
      date: "July 2023 - March 2024",
      desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "ReactJS",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
    {
      id: 2,
      img: shadowFox,
      role: "Frontend Intern",
      company: "Shadow Fox",
      date: "September 2021 - August 2022",
      desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
      ],
    },
    {
      id: 3,
      img: GauravGo,
      role: "Game Devloper",
      company: "GauravGo",
      date: "September 2021 - August 2022",
      desc: "Worked as a Game Developer specializing in Unreal Engine, creating immersive 3D game experiences using Blueprints and C++. Designed and implemented core gameplay mechanics, optimized performance, and integrated realistic physics and visual effects. Collaborated with designers and artists to develop engaging levels, responsive controls, and high-quality user interactions across platforms.",
      skills: [
        "Unreal Engine",
        "HTML5",
        "CSS3",
        "Git",
        "GitHub"

      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: GitaLogo,
      school: "GITA University, Bhubanaswar",
      date: "Sept 2023 - July 2026",
      grade: "8.81 CGPA",
      desc: "I completed my Bachelor of Technology (B.Tech) in Computer Science from GITA University, Bhubaneswar. During my academic journey, I delved into a wide range of core computer science subjects that strengthened my foundation in technology and problem-solving. From mastering Data Structures and Algorithms to building real-world applications through Web Development and understanding Database Management Systems, I developed both theoretical knowledge and hands-on experience. My time at GITA University also involved working on innovative projects that translated classroom concepts into practical solutions.",
      degree: "Bachelor of Technology \n B-Tech (Computer Science)",
    },
    {
      id: 1,
      img: BharagviLogo,
      school: "Bharagvi +2 Science College, Dhenkanal",
      date: "Apr 2020 - March 2022",
      grade: "81.2%",
      desc: "I completed my Class 12 education from Bharagvi +2 Science College under the CBSE board, with a focus on Physics, Chemistry, and Mathematics (PCM), along with Computer Science. This academic background laid a strong foundation in analytical thinking and problem-solving, which proved valuable in my journey into computer science and software development.",
      degree: "CHSE(XII) - PCM with Computer Science",
    },
    {
      id: 2,
      img: BSElogo,
      school: "Kantio Kateni Government High School, Dhenkanal",
      date: "Apr 2019 - March 2020",
      grade: "72.5%",
      desc: "I completed my Class 10 education from Kantio Kateni Government High School under the Board of Secondary Education (BSE). During this time, I studied Science with Computer, which sparked my early interest in technology and laid the groundwork for my future studies in computer science.",
      degree: "BSE(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Virtual Learning",
      description:
        "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
      image: VirtualLearn,
      tags: ["HTML", "CSS", "Javascript", "API"],
      github: "https://github.com/BugSlayerAryan/Virtual-Learning-App",
      webapp: "https://bugslayeraryan.github.io/Virtual-Learning-App/",
    },
    {
      id: 1,
      title: "Currency Converter",
      description:
        "A dynamic and fully responsive Currency Converter built with HTML, CSS, and JavaScript, integrated with a real-time Exchange Rate API. It allows users to instantly convert between multiple global currencies, delivering a smooth, accurate, and interactive user experience",
      image: Currency,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/BugSlayerAryan/Currency-Converter",
      webapp: "https://bugslayeraryan.github.io/Currency-Converter/",
    },
    {
      id: 2,
      title: "Tic-Tac-Toc",
      description:
        "Tic-Tac-Toe is a responsive two-player browser game built with HTML, CSS, and Vanilla JavaScript. Players take turns marking 'X' or 'O' on a 3x3 grid, with real-time win/draw detection and an intuitive UI. The project highlights core front-end skills like DOM manipulation, event handling, and game state management without using external libraries.",
      image: TicTacToc,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/BugSlayerAryan/Tic-Tac-Toc",
      webapp: "https://bugslayeraryan.github.io/Tic-Tac-Toc/",
    },
    {
      id: 3,
      title: "Image Search App",
      description:
        "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
      image: imagesearchLogo,
      tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
      github: "https://github.com/BugSlayerAryan/Image-Search-App",
      webapp: "https://bugslayeraryan.github.io/Image-Search-App/",
    },
  ];  