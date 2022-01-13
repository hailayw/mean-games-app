// 3- Write an express application that returns the main page for the MEAN Games application.
const express = require('express');
const path = require('path');
const router = require('./api/routes/games-route');

require('dotenv').config();

const app = express();

//serves index.html
app.get('/', express.static(path.join(__dirname, 'public')));

// app.use((req, res, next) => {
//     console.log(req.method, req.url);
//     next();
// });
//serve static pages: index.html, page1.html, page2.html
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', router);

const server = app.listen(process.env.PORT, ()=>{
    const port = server.address().port;
    console.log(process.env.MSG_SERVER_START, port);    
});