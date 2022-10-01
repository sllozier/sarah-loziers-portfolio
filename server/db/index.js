// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models, for which you'll find some blank files in this directory:

const db = require('./database');
const Project = require('./Project');
//models go here

//associations go here

const syncAndSeed = async () => {
    await db.sync({ force: true });

    const project1 = await Project.create({
      title: 'Emotion Flashcards',
      image: '/piccies/emotionFlash.png',
      gitHub: 'https://github.com/sllozier/emotion-flashcards-project',
      heroku: 'https://emotion-flashcards.herokuapp.com/',
      techUsed: ['vanilla JS', "css", 'postsql', 'node', 'express', 'redux', 'react'],
      })

  const project2 = await Project.create({
    title: 'School Management System',
    image: '/piccies/schoolManagement.png',
    gitHub: 'https://github.com/sllozier/lozier-school-management',
    heroku: 'https://lozier-school-management.herokuapp.com/',
    techUsed: ['vanilla JS', "css", 'postsql', 'node', 'express', 'redux', 'react'],
      })

  const project3 = await Project.create({
    title: 'eCommerce',
    image: '/piccies/eComm.png',
    gitHub: 'https://github.com/sllozier/lozier-ecommerce-site',
    heroku: 'https://lozier-ecommerce-site.herokuapp.com/',
    techUsed: ['vanilla JS', "css", 'postsql', 'node', 'express', 'redux', 'react'],
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