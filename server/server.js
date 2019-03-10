const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// If your phone has a modern camera (unlike my iPhone 4S)
// you might wanna make this bigger.
app.use(bodyParser.json({ limit: "10mb" }));

// TODO: handle requests

const port = process.env.PORT || 5005;
app.listen(port);

console.log(`Grill server listening on ${port}`);
