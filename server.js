const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = 9000;
const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public/dist/public'));
app.listen(port, () => console.log(`listening on port ${port}`));

// All routes
require('./backend/routes.js')(app);


app.all("*", (req, res, next) => {
  res.sendFile(path.resolve("./public/dist/public/index.html"))
});
