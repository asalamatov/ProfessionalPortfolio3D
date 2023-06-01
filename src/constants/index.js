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
    nau,
    cs,
    acm,
    google,
    portfolio,
    pdf_audio,
    threejs,
    c,
    cpp,
    django,
    java,
    jdbc,
    pyin,
    python,
    sql,
    google0,
    meta0,
    ucpp,
    uexcel,
    ufront,
    ugit,
    ujava,
    upython100,
    usql,
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
      title: "Full-Stack Developer by Meta",
      icon: web,
    },
    {
      title: "Python Automation Developer by Google",
      icon: mobile,
    },
    {
      title: "Java Software Engineer by Neutrino",
      icon: backend,
    },
    {
      title: "React Developer by Meta",
      icon: creator,
    },
  ];
  
  const technologies = [
    // {
    //   name: "HTML 5",
    //   icon: html,
    // },
    // {
    //   name: "CSS 3",
    //   icon: css,
    // },
    // {
    //   name: "JavaScript",
    //   icon: javascript,
    // },
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Python",
      icon: python,
    },
    // {
    //   name: "Tailwind CSS",
    //   icon: tailwind,
    // },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
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
    // {
    //   name: "C",
    //   icon: c,
    // },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "Django",
      icon: django,
    },
    // {
    //   name: "GitHub",
    //   icon: githubpng,
    // },
    {
      name: "SQL",
      icon: sql,
    },
  ];
  
  const experiences = [
    {
      title: "HR Data Scientist Student Employee",
      company_name: "North American University",
      icon: nau,
      iconBg: "#383E56",
      date: "Oct 2022 - Present",
      points: [
        "Analysing HR Data using Microsoft Excel, Power Query, Automation, Python, Visual Basic.",
        "Collaborating with cross-functional teams' developers to create high-quality products.",
        "Implementing accuracy and automation in analyzing reports.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Cyber Security Teaching Assistant",
      company_name: "NAU Computer Science Department",
      icon: cs,
      iconBg: "#E6DEDD",
      date: "Mar 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Assisting students in Linux, Cuber Security, Networks and providing constructive feedback.",
      ],
    },
    {
      title: "ICPC-ACM Club Vice-President",
      company_name: "ICPC-ACM",
      icon: acm,
      iconBg: "#383E56",
      date: "Jan 2023 - Present",
      points: [
        "Leading in Hackathon, building Projects using Python, React.js, Front-End",
        "Organizing events on computing, AI, Technology, Internships, Career Paths.",
        "Building websites with responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Google IT Automation with Python",
      company_name: "Certified by Google",
      icon: google,
      iconBg: "#E6DEDD",
      date: "Mar 2023 - Present",
      points: [
        "Automate Organizational Routine work using Python and Linux Shell Scripting.",
        "Debugging and Troubleshooting, Software Testing, Automation.",
        "Using Git, and Github for project version control and security.",
        "Automation at Scale, Using Google Cloud Platform, Puppet and AWS.",
      ],
    },
    {
      title: "Meta Full stack Developer",
      company_name: "Certified by Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Apr 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Front End Developement: HTML5, CSS3, JS, React.js, Three.js, Tailwind CSS, Semantic HTML, Bootstrap.",
        "Back End Development: Django, Flask, DBMS, MySQL, Databases, APIs, PHP, Java Database Connectivity",
        "Building Fully-fledged web applications, using unit-testing, version control.",
        "Coding Interview Preparation.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Azamat Salamatov has successfully completed the online, non-credit Professional Certificate Meta Front-end Developer.",
      name: "Meta",
      designation: "Staff",
      company: "Meta",
      image: meta,
    },
    {
      testimonial:
        "Azamat Salamatov has successfully completed Professional Certificate Google IT Automation with Python.",
      name: "Google",
      designation: "Staff",
      company: "Google",
      image: google,
    },
    {
      testimonial:
        "Here could be Your Message to the World! Contact me by the form below. And your message may be placed here.",
      name: "Your Name",
      designation: "CEO",
      company: "Your Company",
      image: "https://randomuser.me/api/portraits/lego/9.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Portfolio Website",
      description:
        "Web-based platform that allows users to learn about myself.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://www.azamatsalamatov.com",
    },
    {
      name: "People Database Management with Java, SQL, OOP.",
      description:
        "Web application that enables users to search for jewelry, view estimated price ranges for items.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "database",
          color: "green-text-gradient",
        },
        {
          name: "oop",
          color: "pink-text-gradient",
        },
      ],
      image: jdbc,
      source_code_link: "https://github.com/asalamatov/JavaCourse",
    },
    {
      name: "Automated LinkedIn Application with Python",
      description:
        "An automated code to easy-apply in LinkedIn for software engineer jobs in 100 mile radius",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "selenium",
          color: "green-text-gradient",
        },
        {
          name: "automation",
          color: "pink-text-gradient",
        },
      ],
      image: pyin,
      source_code_link: "https://github.com/asalamatov/100-days-of-python-projects/blob/main/Day_49_LinkedIn_Application_Automation/main.py",
    },
  ];

  const accomplishments = [
    {
      name: "Google IT Automation with Python",//0
      description:
        "Professional Specialization by Google.",
      tags: [
        {
          name: "automation",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "linux",
          color: "pink-text-gradient",
        },
      ],
      image: google0,
      source_code_link: "https://www.coursera.org/account/accomplishments/specialization/certificate/QVTJ2M3TG548",
    }, 
    {
      name: "Meta Front End Developer", //0
      description:
        "Professional Front-End Developer Certificate by Meta.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "ux/ui",
          color: "green-text-gradient",
        },
        {
          name: "html",
          color: "pink-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "green-text-gradient",
        },
        {
          name: "js",
          color: "pink-text-gradient",
        },
      ],
      image: meta0,
      source_code_link: "https://coursera.org/verify/professional-cert/NQT3Q389WDGX",
    },
    // {
    //   name: "C++ Programming: Beginner to Advanced",//9
    //   description:
    //     "Complete C++ Certificate",
    //   tags: [
    //     {
    //       name: "c++",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "stl",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "algorithms",
    //       color: "pink-text-gradient",
    //     },
    //     {
    //       name: "datastructures",
    //       color: "blue-text-gradient",
    //     },
    //   ],
    //   image: ucpp,
    //   source_code_link: "https://www.udemy.com/certificate/UC-a1a64c1e-bd65-42f1-9432-f5d91fbf8921/", 
    // },
    // {
    //   name: "Complete SQL Mastery",//9
    //   description:
    //     "MySQL Database Certificate",
    //   tags: [
    //     {
    //       name: "sql",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "database",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "mysql",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: usql,
    //   source_code_link: "https://codewithmosh.com/courses/525068/certificate", 
    // },
    {
      name: "100 Day of Code: Complete Python Pro",//9
      description:
        "Professional Python Certificate",
      tags: [
        {
          name: "automation",
          color: "blue-text-gradient",
        },
        {
          name: "datascience",
          color: "green-text-gradient",
        },
        {
          name: "webdevelopment",
          color: "pink-text-gradient",
        },
      ],
      image: upython100,
      source_code_link: "https://www.udemy.com/certificate/UC-9e76c763-926c-427d-97e1-a5b0ff1ffc02/", 
    }, 
    {
      name: "Prefessional Java Developer Certificate",//9
      description:
        "Complete Java Certificate",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "oop",
          color: "green-text-gradient",
        },
        {
          name: "database",
          color: "pink-text-gradient",
        },
      ],
      image: ujava,
      source_code_link: "https://www.udemy.com/certificate/UC-995b7708-d32f-487d-bbb6-470654b5781c/", 
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects, accomplishments };