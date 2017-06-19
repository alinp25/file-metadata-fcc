var upload = require('multer')();
var express = require('express');
var app = express();

app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.post('/api/getfile/', upload.single('file'), (req, res) => {
  var obj = {
    size: req.file.size
  }
  res.json(obj);
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
