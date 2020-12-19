const router = require('express').Router()

const { projects } = require('../data')
const setProject = require('../middleware/setProject');
const { authUser } = require('../middleware/basicAuth');
const authGetProject = require('../middleware/authGetProject');
const authDeleteProject = require('../middleware/authDeleteProject');
const { scopedProjects } = require('../permissions/project');

router.get('/', authUser, (req, res) => {
    const scopedProjectsList = scopedProjects(req.user, projects);
    
    res.json(scopedProjectsList);
})

router.get('/:projectId', setProject, authUser, authGetProject, (req, res) => {
    res.json(req.project)
})

router.delete('/:projectId', setProject, authUser, authDeleteProject, (req, res) => {
    res.send('Project deleted');
})

module.exports = router;