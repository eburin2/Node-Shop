const Sequelize = require('sequelize');

const sequelize = new Sequelize('node_complete', 'root', 'toodie1a', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
