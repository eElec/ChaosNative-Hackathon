const express = require('express');

const app = express();

const getMeetings = require('./api/getMeetings');
app.use('/api/addMeeting', getMeetings); 

const PORT = 8080
app.listen(PORT, ()=>{
  console.log(`Listening on ${PORT}`)
})