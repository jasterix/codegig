const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Gig = require('../models/Gig');
const Sequelize = require('sequelize');

// Get list of gigs
router.get('/', (req, res) => //here '/' ==> '/gigs'
Gig.findAll()
.then(gigs => {
  res.render("gigs", {
    gigs
  })
})
.catch(err => console.log(err)))

// Display add gig form
router.get('/add', (req, res) => res.render('add'))

// Add a Gig
router.get('/add', (req, res) => {
  const data = {
    title: "Looking for yet another dev",
    technologies: "react",
    budget: "922",
    description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    contact_email: "asasaddb@yahoo.com"
  }

  let {title, technologies, budget, description, contact_email} = data


// Insert into table
Gig.create({
  title,
  technologies,
  description,
  budget,
  contact_email
})
.then(gig => res.redirect('/gigs'))
.catch(err => console.log(err))
})
module.exports = router
