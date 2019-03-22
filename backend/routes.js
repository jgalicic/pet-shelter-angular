const controller = require('./controllers');

module.exports = app => {

  app
    .get('/api/pets', controller.getAllPets)
    .get('/api/petsByName/:name', controller.findPetByName)
    .get('/api/pets/:id', controller.getOnePetById)
    .post('/api/pets', controller.createNewPet)
    .put('/api/pets/:id', controller.updateOnePet)
    .delete('/api/pets/:id', controller.deleteOnePet)
}
