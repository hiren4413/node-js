const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/Movie-card');

const db = mongoose.connection;

db.on()