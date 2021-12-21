require('./database');

const express = require('express'),
  port = process.env.PORT || 5000,
  userRoutes = require('./routes/user');

const app = express();
app.use(express.json());
app.use('/api', userRoutes);
// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});
