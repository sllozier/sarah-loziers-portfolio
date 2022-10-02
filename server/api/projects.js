const router = require('express').Router();
const Project = require('../db/Project');

router.get('/projects', async(req, res, next) => {
    try{
    const projects = await Project.findAll();
    res.send(projects);
    }catch(error){
        next(error);
    }
});

router.get('/projects/:id', async(req, res, next) => {
    try{
    const singleProject = await Project.findByPk(req.params.id);
    res.send(singleProject);
    }catch(error){
        next(error);
    }
});

module.exports = router;