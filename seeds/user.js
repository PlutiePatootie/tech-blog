const { User } = require('../models');

const userData =
[
  {
    "username": "leo",
    "email": "leo@gmail.com",
    "password": "12345"
  },
  {
    "username": "sal",
    "email": "sal@mail.com",
    "password": "12345"
  },
  {
    "username": "zack",
    "email": "zack@gmail.com",
    "password": "1234"
  },
  {
    "username": "amy",
    "email": "amy@gmail.com",
    "password": "12345"
  },
  {
    "username": "Dally",
    "email": "dally0@gmail.com",
    "password": "d9519"
  }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
