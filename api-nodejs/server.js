const express = require('express');
// const users = require('./data');
const cors = require('cors')
const Sequelize = require('sequelize')

const DATABASE = 'crud';
const USERNAME = 'postgres';
const PASSWORD = '123456';
const LOCALHOST = '172.20.0.3';
const PORT_DB = 5432;
const DIALECT = 'postgres';

const sequelize = new Sequelize(DATABASE, USERNAME, PASSWORD, {
  host: LOCALHOST,
  port: PORT_DB,
  dialect: DIALECT,
})

sequelize
  .authenticate()
  .then(()=> {
    console.log('Connection successfully');
  })
  .catch(err => {
    console.log('Unable to connect to the database:', err);
  })

const User = sequelize.define(
   'user',
    {
      firstName: {
        type: Sequelize.STRING,
        allowNull: false
      }
    }
);

User
  .sync({force: true})
  .then(()=>{ 
    return User
    .create({ firstName: "Jane"})
    .then(jane => {
      console.log("Jane's auto generate ID", jane.id)
    })
  })


const app = express();
app.use(cors());

const PORT = 3000;
const HOST = '0.0.0.0';

// App
app.get('/users', (req, res) => {
  User
    .findAll()
    .then(users => {
      return res.send(users)
      // console.log(users) 
    })
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);