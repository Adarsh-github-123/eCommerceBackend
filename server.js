const express = require('express');
const app = express();
const database = require('./db.connect.js');

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));


database()

const itemRoute = require('./routes.js')
app.use("/v1", itemRoute);

app.listen(PORT, () => {
    console.log(`Running at Port no: ${PORT}`)    
});