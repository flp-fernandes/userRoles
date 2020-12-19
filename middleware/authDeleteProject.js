const { canDeleteProject } = require('../permissions/project');

const authDeleteProject = (req, res, next) => {
    const canDeleteProjectReturn = canDeleteProject(req.user, req.project);    
    if(!canDeleteProjectReturn) {
        return res.status(401).send('Not allowed');
    }

    next();
}

module.exports = authDeleteProject;