module.exports = app => {
  const tests = require("./controllers/testController");

  var router = require("express").Router();

  // Create a new tests
  router.post("/", tests.create);

  // Retrieve all tests
  router.get("/", tests.findAll);

  // Retrieve all published tests
  router.get("/published", tests.findAllPublished);

  // Retrieve a single tests with id
  router.get("/:id", tests.findOne);

  // Update a tests with id
  router.put("/:id", tests.update);

  // Delete a tests with id
  router.delete("/:id", tests.delete);

  // Delete all tests
  router.delete("/", tests.deleteAll);

  app.use('/api/tests', router);
};
