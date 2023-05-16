const { db, Project, Tech, TechUsed } = require("./");

const seed = async () => {
  try {
    console.log(`Seeding started...`);
    await db.sync({ force: true });

    const projectsData = [
      {
        title: "Emotions Flashcards",
        image: "/piccies/projects/emotions_flashcards_square.svg",
        repo: "https://github.com/sllozier/emotion-flashcards-project",
        link: "https://www.emotionsflashcards.com/",
        techUsed: ["css", "postsql", "node", "express", "redux", "react"],
        description:
          "A simple flashcard website designed to assist individuals with emotion-blindness. This fun weekend project has images created using Canva to save on time and integrated AOS for animations. I look forward to redesigning the flashcards soon!",
        video: "/videos/Emotions_Flashcards_square.webm",
      },

      {
        title: "Lozier School Management System",
        image: "/piccies/projects/school_management_square.svg",
        repo: "https://github.com/sllozier/lozier-school-management",
        link: "https://www.lozierschoolmanagement.com/",
        techUsed: ["css", "postsql", "node", "express", "redux", "react"],
        description:
          "A RESTful web platform that allows you to manage your students and campuses. This project uses Express to handle HTTP requests and Sequelize to interface with the database. In addition, it uses React, Redux and React-Redux on the front-end.",
        video: "/videos/Lozier_School_Management_square.webm",
      },

      {
        title: "Wayback Vinyl E-Commerce",
        image: "/piccies/projects/wayback_vinyl_square.svg",
        repo: "https://github.com/sllozier/lozier-ecommerce-site",
        techUsed: ["css", "postsql", "node", "express", "redux", "react"],
        description:
          "An e-commerce website with user and administrative experiences. This project integrates JWT authorization with Express routing and Sequelize database management. Front-end designed with React and React-Redux.",
        video: "/videos/WayBack_Vinyl_square.webm",
      },

      {
        title: "Wicked Good Wordsmiths Content Management",
        image: "/piccies/projects/wicked_good_square.svg",
        repo: "https://github.com/sllozier/wicked-good-wordsmiths",
        techUsed: ["css", "postsql", "node", "express", "redux", "react"],
        description:
          "A content creation tool for children to create their own ebooks. Parents can manage their children's profile and share notes on the child's writing. Guests can place an order to hae an ebook printed and shipped.",
        video: "/videos/Wicked_Good_square.webm",
      },

      {
        title: "Bookshelf App",
        image: "/piccies/projects/bookshelf_app_square.svg",
        repo: "https://github.com/sllozier/bookshelf-app",
        link: "https://sllozier.github.io/bookshelf-app/",
        techUsed: ["css", "HTML", "Javascript"],
        description:
          "Bookshelf app maintains a list of books you like! You can add new books, sort the list of books, search by title and count books by certain properties.",
        video: "/videos/Bookshelf_App_square.webm",
      },

      {
        title: "Guessing Game",
        image: "/piccies/projects/guessing_game_square.svg",
        repo: "https://github.com/sllozier/guessing-game",
        link: "https://sllozier.github.io/guessing-game/",
        techUsed: ["css", "HTML", "Javascript"],
        description:
          "Guessing Game will randomely generate a number from 1-100 and the player will try to guess that number in 5 attemts. It gives you hints and lets you know if you are burning up, lukewarm, chilly or ice cold.",
        video: "/videos/Guessing_Game_square.webm",
      },
    ];

    const techData = [
      {
        name: "CSS",
        image:
          "https://img.shields.io/static/v1?label=&message=CSS3&color=1572B6&logo=CSS3&logoColor=FFFFFF",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        category: "Frontend",
      },
      {
        name: "HTML",
        image:
          "https://img.shields.io/static/v1?label=&message=HTML5&color=E34F26&logo=html5&logoColor=FFFFFF",
        link: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
        category: "Frontend",
      },
      {
        name: "Javascript",
        image:
          "https://img.shields.io/static/v1?label=&message=JavaScript&color=F7DF1E&logo=javascript&logoColor=FFFFFF",
        link: "https://www.javascript.com/",
        category: "Core",
      },
      {
        name: "React",
        image:
          "https://img.shields.io/static/v1?label=&message=React&color=FFFFFF&logo=react&logoColor=61DAFB",
        link: "https://reactjs.org/",
        category: "Frontend",
      },
      {
        name: "Redux",
        image:
          "https://img.shields.io/static/v1?label=&message=Redux&color=764ABC&logo=redux&logoColor=FFFFFF",
        link: "https://redux.js.org/",
        category: "Frontend",
      },
      {
        name: "Bulma",
        image:
          "https://img.shields.io/static/v1?label=&message=Bulma&color=00D1B2&logo=bulma&logoColor=FFFFFF",
        link: "https://bulma.io/",
        category: "Frontend",
      },
      {
        name: "LESS",
        image:
          "https://img.shields.io/static/v1?label=&message=LESS&color=1D365D&logo=LESS&logoColor=FFFFFF",
        link: "https://lesscss.org/",
        category: "Frontend",
      },
      {
        name: "SASS",
        image:
          "https://img.shields.io/static/v1?label=&message=SASS&color=CC6699&logo=SASS&logoColor=FFFFFF",
        link: "https://sass-lang.com/",
        category: "Frontend",
      },
      {
        name: "Python",
        image:
          "https://img.shields.io/static/v1?label=&message=Python&color=3776AB&logo=python&logoColor=FFFFFF",
        link: "https://www.python.org/",
        category: "Core",
      },
      {
        name: "Nodejs",
        image:
          "https://img.shields.io/static/v1?label=&message=Nodejs&color=339933&logo=nodedotjs&logoColor=FFFFFF",
        link: "https://nodejs.org/",
        category: "Core",
      },
      {
        name: "Webpack",
        image:
          "https://img.shields.io/static/v1?label=&message=Webpack&color=8DD6F9&logo=webpack&logoColor=FFFFFF",
        link: "https://webpack.js.org/",
        category: "Core",
      },
      {
        name: "Expressjs",
        image:
          "https://img.shields.io/static/v1?label=&message=Express&color=000000&logo=express&logoColor=FFFFFF",
        link: "https://expressjs.com/",
        category: "Core",
      },
      {
        name: "Sequelize",
        image:
          "https://img.shields.io/static/v1?label=&message=Sequelize&color=52B0E7&logo=sequelize&logoColor=FFFFFF",
        link: "https://sequelize.org/",
        category: "Core",
      },
      {
        name: "postgreSQL",
        image:
          "https://img.shields.io/static/v1?label=&message=postgreSQL&color=4169E1&logo=postgresql&logoColor=FFFFFF",
        link: "https://www.postgresql.org/",
        category: "Core",
      },
      {
        name: "Go",
        image:
          "https://img.shields.io/static/v1?label=&message=Go&color=00ADD8&logo=go&logoColor=FFFFFF",
        link: "https://go.dev/",
        category: "Core",
      },
      {
        name: "MongoDB",
        image:
          "https://img.shields.io/static/v1?label=&message=MongoDB&color=47A248&logo=MongoDB&logoColor=FFFFFF",
        link: "https://www.mongodb.com/",
        category: "Core",
      },
      {
        name: "Android",
        image:
          "https://img.shields.io/static/v1?label=&message=Android&color=3DDC84&logo=android&logoColor=FFFFFF",
        link: "https://developer.android.com/",
        category: "Mobile",
      },
      {
        name: "Expo",
        image:
          "https://img.shields.io/static/v1?label=&message=Expo&color=000020&logo=expo&logoColor=FFFFFF",
        link: "https://expo.dev/",
        category: "Mobile",
      },
      {
        name: "React Native",
        image:
          "https://img.shields.io/static/v1?label=&message=ReactNative&color=61DAFB&logo=react&logoColor=FFFFFF",
        link: "https://reactnative.dev/",
        category: "Mobile",
      },
      {
        name: "Heroku",
        image:
          "https://img.shields.io/static/v1?label=&message=Heroku&color=430098&logo=heroku&logoColor=FFFFFF",
        link: "https://heroku.com/",
        category: "Cloud",
      },
      {
        name: "Render",
        image:
          "https://img.shields.io/static/v1?label=&message=Render&color=46E3B7&logo=render&logoColor=FFFFFF",
        link: "https://render.com/",
        category: "Cloud",
      },
      {
        name: "Firebase",
        image:
          "https://img.shields.io/static/v1?label=&message=Firebase&color=FFCA28&logo=Firebase&logoColor=000000",
        link: "https://firebase.google.com/",
        category: "Cloud",
      },
      {
        name: "Amazon AWS",
        image:
          "https://img.shields.io/static/v1?label=&message=AmazonAWS&color=232F3E&logo=AmazonAWS&logoColor=FF9900",
        link: "https://aws.amazon.com/",
        category: "Cloud",
      },
      {
        name: "Git",
        image:
          "https://img.shields.io/static/v1?label=&message=Git&color=F05032&logo=Git&logoColor=FFFFFF",
        link: "https://git-scm.com/",
        category: "DevOps",
      },
      {
        name: "Google Meet",
        image:
          "https://img.shields.io/static/v1?label=&message=GoogleMeet&color=00897B&logo=GoogleMeet&logoColor=FFFFFF",
        link: "https://meet.google.com/",
        category: "DevOps",
      },
      {
        name: "Zoom",
        image:
          "https://img.shields.io/static/v1?label=&message=Zoom&color=2D8CFF&logo=Zoom&logoColor=FFFFFF",
        link: "https://zoom.us/",
        category: "DevOps",
      },
      {
        name: "Slack",
        image:
          "https://img.shields.io/static/v1?label=&message=Slack&color=4A154B&logo=Slack&logoColor=FFFFFF",
        link: "https://slack.com",
        category: "DevOps",
      },
      {
        name: "Trello",
        image:
          "https://img.shields.io/static/v1?label=&message=Trello&color=0052CC&logo=Trello&logoColor=FFFFFF",
        link: "https://trello.com/",
        category: "DevOps",
      },
      {
        name: "Jira",
        image:
          "https://img.shields.io/static/v1?label=&message=Jira&color=0052CC&logo=Jira&logoColor=FFFFFF",
        link: "https://www.atlassian.com/",
        category: "DevOps",
      },
      {
        name: "Jasmine",
        image:
          "https://img.shields.io/static/v1?label=&message=Jasmine&color=8A4182&logo=Jasmine&logoColor=FFFFFF",
        link: "https://jasmine.github.io/",
        category: "Testing",
      },
      {
        name: "Mocha",
        image:
          "https://img.shields.io/static/v1?label=&message=Mocha&color=8D6748&logo=Mocha&logoColor=FFFFFF",
        link: "https://mochajs.org/",
        category: "Testing",
      },
      {
        name: "Chai",
        image:
          "https://img.shields.io/static/v1?label=&message=Chai&color=A30701&logo=Chai&logoColor=FFFFFF",
        link: "https://www.chaijs.com/",
        category: "Testing",
      },
      {
        name: "Linux",
        image:
          "https://img.shields.io/static/v1?label=&message=Linux&color=FCC624&logo=linux&logoColor=FFFFFF",
        link: "https://www.linux.org/",
        category: "Misc",
      },
      {
        name: "Bash",
        image:
          "https://img.shields.io/static/v1?label=&message=Bash&color=4EAA25&logo=gnubash&logoColor=FFFFFF",
        link: "https://www.gnu.org/software/bash/",
        category: "Misc",
      },
      {
        name: "Markdown",
        image:
          "https://img.shields.io/static/v1?label=&message=Markdown&color=000000&logo=markdown&logoColor=FFFFFF",
        link: "https://en.wikipedia.org/wiki/Markdown",
        category: "Misc",
      },
      {
        name: "Canva",
        image:
          "https://img.shields.io/static/v1?label=&message=Canva&color=00C4CC&logo=Canva&logoColor=FFFFFF",
        link: "https://www.canva.com/",
        category: "Misc",
      },
      {
        name: "Vim",
        image:
          "https://img.shields.io/static/v1?label=&message=Vim&color=019733&logo=vim&logoColor=FFFFFF",
        link: "https://www.vim.org/",
        category: "Misc",
      },
      {
        name: "VS Code",
        image:
          "https://img.shields.io/static/v1?label=&message=VS%20Code&color=9013FE&logo=visualstudiocode&logoColor=FFFFFF",
        link: "https://code.visualstudio.com/",
        category: "Misc",
      },
      {
        name: "C++",
        image:
          "https://img.shields.io/static/v1?label=&message=C%2B%2B&color=00599C&logo=c%2B%2B&logoColor=FFFFFF",
        link: "https://cplusplus.com/",
        category: "Future",
      },
      {
        name: "Qt",
        image:
          "https://img.shields.io/static/v1?label=&message=Qt&color=41CD52&logo=Qt&logoColor=FFFFFF",
        link: "https://www.qt.io/",
        category: "Future",
      },
    ];
    const projects = await Promise.all(
      projectsData.map((project) => Project.create(project))
    );

    const technologies = await Promise.all(
      techData.map((tech) => Tech.create(tech))
    );
  } catch (error) {
    console.log(`Seeding Problem! Error in seed function: ${error}`);
  }
};

const runSeed = async () => {
  console.log("Start Seeding...");
  try {
    await seed();
  } catch (error) {
    console.error("RUN SEED ERROR", error);
    process.exitCode = 1;
  } finally {
    console.log("closingdb connection");
    await db.close();
    console.log(
      `
  Seeding successful!
  NOW, GET A JOB!`
      // "Project Special Methods:",
      // Object.keys(Project.prototype),
      // "Tech Special Methods",
      // Object.keys(Tech.prototype),
      // "Tech Used Special Methods",
      // Object.keys(TechUsed.prototype)
    );
  }
};

if (module === require.main) {
  runSeed();
}

module.exports = seed;
