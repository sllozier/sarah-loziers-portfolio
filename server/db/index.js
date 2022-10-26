const db = require('./database');
const Project = require('./Project');


const syncAndSeed = async () => {
    await db.sync({ force: true });

    const project1 = await Project.create({
      title: 'Emotion Flashcards',
      image: '/piccies/emotionFlash.png',
      gitHub: 'https://github.com/sllozier/emotion-flashcards-project',
      heroku: 'https://emotion-flashcards.herokuapp.com/',
      techUsed: ['vanilla JS', "css", 'postsql', 'node', 'express', 'redux', 'react'],
      description: "A simple flashcard website designed to assist individuals with emotion-blindness. This fun weekend project has images created using Canva to save on time and integrated AOS for animations. I look forward to redesigning the flashcards soon!"
      })

  const project2 = await Project.create({
    title: 'School Management System',
    image: '/piccies/schoolManagement.png',
    gitHub: 'https://github.com/sllozier/lozier-school-management',
    heroku: 'https://lozier-school-management.herokuapp.com/',
    techUsed: ['vanilla JS', "css", 'postsql', 'node', 'express', 'redux', 'react'],
    description: "A RESTful web platform that allows you to manage your students and campuses. This project uses Express to handle HTTP requests and Sequelize to interface with the database. In addition, it uses React, Redux and React-Redux on the front-end."
      })

  const project3 = await Project.create({
    title: 'eCommerce',
    image: '/piccies/eComm.png',
    gitHub: 'https://github.com/sllozier/lozier-ecommerce-site',
    heroku: 'https://lozier-ecommerce-site.herokuapp.com/',
    techUsed: ['vanilla JS', "css", 'postsql', 'node', 'express', 'redux', 'react'],
    description: "An e-commerce website with user and administrative experiences. This project integrates JWT authorization with Express routing and Sequelize database management. Front-end designed with React and React-Redux."
    });

    console.log(`
    Seeding successful!
    NOW, GET A JOB!
  `);
};


module.exports = {
  db,
  syncAndSeed,
  Project,

}