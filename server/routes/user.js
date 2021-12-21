const express = require('express'),
  userSchema = require('../models/user');

const router = express.Router();

router.post('/users', (request, response) => {
  console.log(request.body);
  const user = userSchema(request.body);
  user
    .save()
    .then((data) => response.json(data))
    .catch((error) =>
      console.error({
        message: error,
      })
    );
});

router.get('/users', (request, response) => {
  userSchema
    .find()
    .then((data) => response.json(data))
    .catch((error) =>
      console.error({
        message: error,
      })
    );
});

router.get('/users/id/:id', (request, response) => {
  const { id } = request.params;
  userSchema
    .findById(id)
    .then((data) => response.json(data))
    .catch((error) =>
      console.error({
        message: error,
      })
    );
});

router.get('/users/email/:email', (request, response) => {
  const { email } = request.params;
  userSchema
    .findOne({
      email: email,
    })
    .then((data) => response.json(data))
    .catch((error) =>
      console.error({
        message: error,
      })
    );
});

module.exports = router;
