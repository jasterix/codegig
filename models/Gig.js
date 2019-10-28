const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Gig = sequelize.define('gig', {
  title: {
    type: Sequelize.STRING
  },
  technologies: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },
  budget: {
    type: Sequelize.STRING
  },
  contact_email: {
    type: Sequelize.STRING
  }
}, {
  sequelize,
  modelName: 'gig'
  // options
});

Gig.sync({ force: false }).then(() => {
  return Gig.create({
    firstName: 'John',
    lastName: 'Hancock'
  });
});

module.exports = Gig;
