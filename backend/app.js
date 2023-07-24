require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT;
const routes = require('./src/routes');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

mongoose.connect("mongodb+srv://wisha:1234@ecommerce.ba9zv55.mongodb.net/")
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is Running on PORT ${PORT}`)
        })
    })
    .catch((err) => {
        console.error(err);
    })



app.use("/", routes);
