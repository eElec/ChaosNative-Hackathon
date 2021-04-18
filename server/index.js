const express = require('express');

const app = express();
app.use(express.json());

const getMeetings = require('./api/getMeetings');
app.use('/api/getMeetings', getMeetings); 
const addMeeting = require('./api/addMeeting');
app.use('/api/addMeeting', addMeeting); 

const PORT = 8080
app.listen(PORT, ()=>{
  console.log(`Listening on ${PORT}`)
})