const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

const {v4: uuidv4} = require('uuid');
app.use(cors());
app.use(express.static('public'));

//Root endpoint
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});

const userInfo = [];

//users endpoint
app.route("/api/users")
  .post((req, res) => { //Post endpoint for this path
    const {username} = req.body;

    const _id = uuidv4();

    const newUser = {
      username,
      _id
    };

    userInfo.push(newUser);
    res.json(newUser);
  })
  .get((req, res) => { //Get endpoint for this path
    res.send(userInfo);
  });


const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
});
