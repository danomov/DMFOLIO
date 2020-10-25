const data = {
  headerList: ["About", "Skills", "Experience", "Projects", "Contact"],
  preview: {
    part1: "Hello, I am",
    part2: "Daniel Movsesyan",
    part3: `
            I'm a software engineer based in Yerevan, 
            AM specializing in building (and occasionally designing) 
            exceptional websites, applications, and everything in between.
        `,
  },
  about: {
    title: "About",
    description: `
              Self-motivated Software Engineer with experience working on multiple projects. 
              Passionate and hardworking with a penchant for meeting deadlines. Interested in role 
              with the company promoting best practices and offering diverse customer projects. 
              Have around 2 year experience with JavaScript, ReactJS, NodeJS, HTML/CSS, Git.
              Passionate about writing articles about new technologies and programming.
          `,
    portrait: "https://drive.google.com/uc?export=view&id=1fm5J7iWEUkpDYjP_C-NsWvDgAMeVMpgA",
  },
  skills: {
    title: "Skills",
    skillList: ["JavaScript", "ReactJS", "React-Redux", "NodeJS", "HTML/CSS", "SCSS", "Git"],
  },
  experience: {
    title: "Experience",
    work_places: [
      {
        company: "Vineti",
        role: "Software Development and QA Engineer Intern",
        responsibilities: [
          "Learn about ReactJS and it's working principles",
          "Learn about Ruby and Ruby Rails and how to create servers with them",
          "Learn about quality assurance and how to make automation tests",
          "Learn how to build unit tests",
          "Create and present full-stack app with cool team",
        ],
        dates: {
          startYear: "2018",
          startMonth: "Oct",
          endYear: "2018",
          endMonth: "Dec",
        },
      },
      {
        company: "NextStack",
        role: "Front End Developer",
        responsibilities: [
          "Determine the structure and design of web pages",
          "Develop features to enhance the user experience",
          "Create highly responsive web pages",
          "Optimize web pages for maximum speed and scalability",
          "Build reusable code for future use",
        ],
        dates: {
          startYear: "2019",
          startMonth: "Mar",
          endYear: "2020",
          endMonth: "Mar",
        },
      },
      {
        company: "AOD",
        role: "Front End Developer",
        responsibilities: [
          "Determine the structure and design of web pages",
          "Develop features to enhance the user experience",
          "Create highly responsive and pixel perfect web applications",
          "Contribute to facilitating acceptance testing procedures and monitoring results",
          "Contribute to performance and load testing procedures and issue remediation",
          "Build reusable code for future use",
        ],
        dates: {
          startYear: "2020",
          startMonth: "July",
        },
      },
    ],
  },
  projects: {
    title: "Projects",
    projectList: [
      {
        name: "Cheng-Tsui App",
        description: `Cheng & Tsui is the leading publisher of Asian language learning textbooks & multimedia educational materials.
        Cheng-Tsui (CT) App is an "online school" for teaching your students or learning th Asian language with Cheng & Tsui 
        books with your classmates.`,
        links: [
          {
            link: "https://app.chengtsui.co/",
          },
        ],
      },
      {
        name: "4Tat Website",
        description: `4Tat is a simple, but modern online store where you can find food for your lovely pets.`,
        links: [
          {
            link: "https://4tat.am/",
          },
        ],
      },
      {
        name: "Nextstack Website",
        description: `A small dynamic website for IT company, 
        where you can investigate the company's portfolio and career opportunities.`,
        links: [
          {
            link: "https://nextstack.am/",
          },
        ],
      },
      {
        name: "PLogo Quiz",
        description: `Programming Logo quiz game is for programmers and also non-programmers, 
        where you should try to guess which programming language logo is shown in the picture.
        Also hosted with firebase.`,
        links: [
          {
            link: "https://github.com/danomov/programmingLogoQuiz",
          },
          {
            link: "https://programminglogoquiz1.firebaseapp.com/",
          },
        ],
      },
      {
        name: "DS and AI",
        description: `DS and AI is a growing source where you can find different 
        Data Structures and Algorithm Implementations in the JavaScript programming language.`,
        links: [
          {
            link: "https://github.com/danomov/DataStructuresAndAlgorithmImplementations",
          },
        ],
      },
      {
        name: "ATS",
        description: `Automation Traffic System (ATS) is an automatic traffic system visual representation application written in React. 
        With this , you can simply test automatic traffic system behavior in different situations by simply inputting cars' 
        quantity on all sides of the virtual crossroad.`,
        links: [
          {
            link: "https://github.com/danomov/AutomaticTrafficSystem",
          },
        ],
      },
      {
        name: "npm CRA danomov_template",
        description: `Create React App is a tool (built by developers at Facebook) that gives you a
        massive head start when building React apps. It saves you from time-consuming setup and configuration.
        With the "danomov_template" you can boost the starting process of your project further by structuring 
        your project's preset view.`,
        links: [
          {
            link: "https://www.npmjs.com/package/cra-template-danomov_template",
          },
        ],
      },
    ],
  },
  contacts: {
    title: "Contact",
    info: {
      title: "Get In Touch",
      description: `Any questions, suggestions, or just a little discussion? I am always open. 
      I'll try my best to get back to you!`,
      mail: "danielmovsesyan.dev@gmail.com",
      phone: "+37499207778",
      social: [
        "https://www.linkedin.com/in/danomov/",
        "https://github.com/danomov",
        "https://medium.com/@danielmovsesyan",
        "https://www.facebook.com/danomov/",
      ],
    },
  },
};

export default data;
