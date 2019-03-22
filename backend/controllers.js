const { Pet } = require('./models.js');

module.exports = {

  getAllPets: (req, res) => {
    Pet.find().sort('type')
      .then(data => console.log(data) || res.json(data))
      .catch(err => console.log(err) || res.json(err));
  },

  findPetByName: (req, res) => {
    Pet.findOne({ name: req.params.name })
      .then(data => console.log(data) || res.json(data))
      .catch(err => console.log(err) || res.json(err));
  },

  getOnePetById: (req, res) => {
    const ID = req.params.id;
    Pet.findOne({ _id: ID })
      .then((data) => res.json(data))
      .catch((err) => res.json(err));
  },

  createNewPet: (req, res) => {
    const DATA = req.body;
    Pet.create(DATA)
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  updateOnePet: (req, res) => {
    const DATA = req.body;
    const ID = req.params.id;
    Pet.findOneAndUpdate({ _id: ID }, DATA, { runValidators: true, new: true })
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  deleteOnePet: (req, res) => {
    const ID = req.params.id;
    Pet.findOneAndDelete({ _id: ID })
      .then((data) => res.json(data))
      .catch((err) => res.json(err));
  }
}
