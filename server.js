const express = require('express');
const mongoose = require('mongoose');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();

//DB Config
const db = require('./config/keys').mongoURI;

//Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected!'))
  .catch(err => console.log(err));


  //Use routes
app.use('./routes/api/users.js', users)
app.use('./routes/api/profile.js', profile)
app.use('./routes/api/post.js', posts)

app.get('/', (req, res)=> res.send('Hello, how are you. Hope you are feeling fine?'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
