const express = require('express');
const {json } = require('body-parser');
//const bodyParser = require('body-parcer');

const port = 3000;

const app =express();

app.use(express.static(__dirname + "/public"));

const bc = require('./controllers/books_controllers');

app.use(json())
// app.use(bodyParser.json());

app.get("/api/books", bc.read);
app.post("/api/books", bc.create);
app.put("/api/books/:id", bc.update);
app.delete("/api/books/:id", bc.destroy);

app.listen(port, () => {
    console.log("Listening on port: ", port);
    //console.log(`Listening on port: ${port}`);  wont work with current version need to be updated
});