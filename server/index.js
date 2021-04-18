const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors())

const getMeetings = require('./api/getMeetings');
app.use('/api/getMeetings', getMeetings); 
const addMeeting = require('./api/addMeeting');
app.use('/api/addMeeting', addMeeting); 
const removeMeeting = require('./api/removeMeeting');
app.use('/api/removeMeeting', removeMeeting); 

const PORT = 8080
app.listen(PORT, ()=>{
  console.log(`Listening on ${PORT}`)
})