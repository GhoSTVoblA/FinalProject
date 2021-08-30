import Api from '@/services/Api'


module.exports = app => {
  const tests = require("./controllers/testController");

  var router = require("express").Router();

  // Create a new tests
  router.post("/test", tests.create);

  // Retrieve all tests
  router.get("/test", tests.findAll);

  // Retrieve all published tests
  router.get("/test", tests.findAllPublished);

  // Retrieve a single tests with id
  router.get("/test/:id", tests.findOne);

  // Update a tests with id
  router.put("/test/:id", tests.update);

  // Delete a tests with id
  router.delete("/test/:id", tests.delete);

  // Delete all tests
  router.delete("/test", tests.deleteAll);

  app.use('/api/tests', router);
};

export default {
  index () {
    return Api().get('tests', {
    })
  },
  show (id) {
    return Api().get(`tests/${id}`)
  },
  post (test) {
    return Api().post('test', test)
  },
  put (test) {
    return Api().put(`tests/${test.id}`, test)
  }
}
