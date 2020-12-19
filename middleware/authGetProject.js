const { canViewProject } = require('../permissions/project');

const authGetProject = (req, res, next) => {
    const canViewProjectReturn = canViewProject(req.user, req.project);    
    if(!canViewProjectReturn) {
        return res.status(401).send('Not allowed');
    }

    next();
}

module.exports = authGetProject;