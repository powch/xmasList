const db = require('../models');

module.exports = {
  create: (req, res) => {
    db.Item
      .create(req.body)
      .then(newItem => {
        db.Person.find({ _id: req.params.id }, { $push: { items: newItem._id }})
        .then(updatedPerson => res.json(updatedPerson))
        .catch(err => res.status(422).json(err));
      })
      .catch(err => res.status(422).json(err));
  },

  delete: (req, res) => {
    
  }
}