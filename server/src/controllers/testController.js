const db = require("../models");
const Test = db.tests;
const Op = db.Sequelize.Op;

// Create and Save a new Test
exports.create = (req, res) => {
  // Validate request
    if (!req.body.title) {
    res.status(400).send({
    message: "Content can not be empty!"
    });
    return;
    }

  // Create a Test
    const test = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
    };

  // Save Tutorial in the database
    Test.create(test)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while creating the test."
        });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

    Test.findAll({ where: condition })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while retrieving test."
        });
    });
};

// Find a single Test with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Test.findByPk(id)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id
        });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Test.update(req.body, {
    where: { id: id }
    })
    .then(num => {
        if (num == 1) {
        res.send({
            message: "Tutorial was updated successfully."
        });
        } else {
        res.send({
            message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
        });
        }
    })
    .catch(err => {
        res.status(500).send({
        message: "Error updating Tutorial with id=" + id
        });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Test.destroy({
    where: { id: id }
    })
    .then(num => {
        if (num == 1) {
        res.send({
            message: "Tutorial was deleted successfully!"
        });
        } else {
        res.send({
            message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
        });
        }
    })
    .catch(err => {
        res.status(500).send({
        message: "Could not delete Tutorial with id=" + id
        });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    Test.destroy({
    where: {},
    truncate: false
    })
    .then(nums => {
        res.send({ message: `${nums} Tutorials were deleted successfully!` });
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while removing all tutorials."
        });
    });
};

// find all published Tutorial
exports.findAllPublished = (req, res) => {
    Test.findAll({ where: { published: true } })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while retrieving tutorials."
        });
    });
};
