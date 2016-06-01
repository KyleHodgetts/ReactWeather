var express = require('express');

// Create App
var app = express();

app.use(express.static('public'));
app.listen(process.env.PORT || 3000, function () {
  console.log("Server is running on 3000");
});
