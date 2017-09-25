let express = require("express");
let cors = require('cors');
let bodyParser = require('body-parser');

let app = express();

let api = require("./api");

app.use(cors());
app.use(bodyParser.json());
let port = process.env.PORT || 8000;

app.use("/", express.static("../app"));
app.use("/api", api);


app.listen(port);
console.log("Magic happens on: localhost:" + port);