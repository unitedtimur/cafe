const express = require("express");
const cors = require("cors");

const charactersRoute = require("./routes/characters");
const dialogsRoute = require("./routes/dialogs");
const dishRoute = require("./routes/dish");

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// route registration
app.use("/characters", charactersRoute);
app.use("/dialogs", dialogsRoute);
app.use("/dish", dialogsRoute);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});