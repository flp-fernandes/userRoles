const express = require('express')
const app = express()

const setUser = require('./middleware/setUser');
const { authUser, authRole } = require('./middleware/basicAuth');
const projectRouter = require('./routes/projects')
const { ROLE } = require('./data');

app.use(express.json())
app.use(setUser)
app.use('/projects', projectRouter)

app.get('/', (req, res) => {
  res.send('Home Page')
})

app.get('/dashboard', authUser, (req, res) => {
  res.send('Dashboard Page')
})

app.get('/admin', authUser, authRole(ROLE.ADMIN), (req, res) => {
  res.send('Admin Page')
})


app.listen(3000)