const express = require('express'),
  userSchema = require('../models/user');

const router = express.Router();

router.post('/users', (request, response) => {
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

module.exports = router;
