const { users } = require('../data');

const setUser = (req, res, next) => {
    const { userId } = req.body;
    if (userId) {
        req.user = users.find(user => user.id === userId)
    }
    
    next()
}

module.exports = setUser;