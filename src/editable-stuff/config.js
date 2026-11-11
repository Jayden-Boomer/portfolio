// Portfolio content from Jayden's resume and public GitHub profile.
// Skills intentionally omit proficiency scores. reposLength: 0 avoids duplicate featured repos.
const navBar = {
  "show": true
};

const mainBody = {
  "gradientColors": "#172554, #1e40af, #2563eb, #1e3a8a",
  "firstName": "Jayden",
  "middleName": "",
  "lastName": "Boomer",
  "message": "Software Engineering | Embedded Systems | Web Development",
  "introduction": "A curious developer who enjoys solving real-world problems and building connections between software and hardware.",
  "icons": [
    {
      "image": "fa-github",
      "url": "https://github.com/Jayden-Boomer"
    },
    {
      "image": "fa-linkedin",
      "url": "https://www.linkedin.com/in/jaydenboomer/"
    }
  ]
};

const about = {
  "show": true,
  "heading": "About Me",
  "imageLink": "https://avatars.githubusercontent.com/u/89496979?v=4",
  "imageSize": 320,
  "message": "I'm Jayden Boomer, a developer based in Richardson, Texas, with a background in Software Engineering at The University of Texas at Dallas. I enjoy building solutions that connect software and hardware, with interests in machine learning, robotics, embedded systems, and full-stack development. My projects range from healthcare chatbots and visual file organization to hands-on robotics software and electronics. Away from the keyboard, I enjoy piano, art, and hiking.",
  "resume": `${process.env.PUBLIC_URL}/resume-embed/resumes/JaydenBoomerResume.pdf`
};

const repos = {
  "show": true,
  "heading": "Featured Projects",
  "gitHubUsername": "Jayden-Boomer",
  "reposLength": 0,
  "specificRepos": [
    "AxxesHackathon",
    "CelestiFi",
    "AsteroidsProject_CS1200",
    "SE4352.001-TeamWebsite"
  ],
  "liveSites": {
    "SE4352.001-TeamWebsite": "https://jayden-boomer.github.io/SE4352.001-TeamWebsite/"
  },
  "descriptions": {
    "AxxesHackathon": "QuickCare: an AI chatbot prototype for health-related feedback, developed as programmer and team lead at the 24-hour Axxess healthcare innovation hackathon in February 2025.",
    "CelestiFi": "A file organization project with visual clustering by size and relevance, developed as programmer and team lead at HackUTD: Ripple Effect in November 2024.",
    "AsteroidsProject_CS1200": "An Asteroids project for CS1200.",
    "SE4352.001-TeamWebsite": "Navi: a team project website presenting a voice-led indoor navigation concept for blind and low-vision users. Served as team lead; the site showcases prototypes, user journeys, and project documentation."
  }
};

const leadership = {
  "show": true,
  "heading": "Leadership & Robotics",
  "message": "I've served as programmer and team lead at Axxess Hackathon and HackUTD, turning ideas into working prototypes in 24 hours. My robotics experience includes software and electronics work with VEXU's Comet Robotics, beginning in September 2024, and serving as Secretary and Lead Programmer for FIRST Robotics' Keller Fusion from August 2021 to May 2023. These experiences bring together the teamwork, problem-solving, and hands-on engineering I enjoy most.",
  "images": [],
  "imageSize": {
    "width": "615",
    "height": "450"
  }
};

const skills = {
  "show": true,
  "heading": "Skills",
  "hardSkills": [
    {
      "name": "Java"
    },
    {
      "name": "C++"
    },
    {
      "name": "C#"
    },
    {
      "name": "Python"
    },
    {
      "name": "TypeScript / JavaScript"
    },
    {
      "name": "HTML / CSS"
    },
    {
      "name": "Git"
    },
    {
      "name": "Arduino UNO R3"
    },
    {
      "name": "CAD / PTC Onshape"
    },
    {
      "name": "Vue"
    },
    {
      "name": "React"
    }
  ],
  "softSkills": [
    {
      "name": "Project Management"
    },
    {
      "name": "Team Leadership"
    },
    {
      "name": "Problem Solving"
    },
    {
      "name": "Adaptability"
    },
    {
      "name": "Time Management"
    },
    {
      "name": "Patience & Empathy"
    }
  ]
};

const getInTouch = {
  "show": true,
  "heading": "Let's Build Something",
  "message": "Interested in collaborating or talking about software engineering, robotics, or embedded systems? Get in touch at",
  "email": "jaboomer02@gmail.com"
};

const experiences = {
  show: true,
  heading: "Experience",
  data: [
    {company: "Comet Robotics", role: "VEXU Programmer", icon: "robot", date: "September 2024 - Present | UT Dallas", bullets: ["Collaborate on software and electronics projects in a student-run robotics organization.", "Participate in weekly meetings focused on hands-on development and problem-solving."]},
    {company: "Keller Fusion", role: "Secretary & Lead Programmer", icon: "cogs", date: "August 2021 - May 2023 | FIRST Robotics", bullets: ["Served as secretary and lead programmer for a FIRST Robotics team building competition robots."]},
    {company: "Designer Shoe Warehouse", role: "Store Associate", icon: "store", date: "August 2025 - Present | Southlake, Texas", bullets: ["Help customers select products, process transactions, and navigate the loyalty program.", "Handle incoming freight, online orders, markdowns, and merchandise organization."]}
  ]
};
const education = {school: "The University of Texas at Dallas", location: "Richardson, Texas", college: "Erik Jonsson School of Engineering and Computer Science", degree: "Bachelor of Science in Software Engineering", gpa: "3.539 / 4.000"};

export { navBar, mainBody, about, repos, leadership, skills, getInTouch, experiences, education };
