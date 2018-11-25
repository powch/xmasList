const db = require('../models');

module.exports = {
  findAll: (req, res) => {
    db.Person
      .find({})
      .populate('items')
      .then(dbPeople => res.json(dbPeople))
      .catch(err => res.status(422).json(err));
  },

  create: (req, res) => {
    db.Person
      .create(req.body)
      .then(newPerson => res.json(newPerson))
      .catch(err => res.status(422).json(err));
  },

  update: (req, res) => {

  },

  delete: (req, res) => {

  }
}