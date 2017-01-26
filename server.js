var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var router = express.Router();

router.get('/minions', function(req, res) {
  res.json({
    names: ["Harry", "Potter", "Gru", "Baby Boss"]
  });
});

app.use('/api', router);

app.listen(port);
console.log('Minions will be delivered on port ' + port);