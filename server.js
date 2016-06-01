var express = require('express');

// Create App
var app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.listen(PORT, function () {
  console.log(`Server is running on ${PORT}`);
});
