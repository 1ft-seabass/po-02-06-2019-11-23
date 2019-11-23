var express = require('express');
var app = express();

// public というフォルダに入れられた静的ファイルはそのまま表示
app.use(express.static(__dirname + '/public'));

// bodyParser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.post('/post', function(req, res) {
  console.log("req.body :");
  console.log(req.body);
  console.log("first_name : " + req.body.first_name);
  var timestamp = new Date().getTime();
  res.json({
    message:"OK! timestamp:" + timestamp // OKに加えてタイムスタンプを送信
  });
});
// app.listen(8080);
app.listen(process.env.PORT || 8080);

console.log("server start! (heroku)");
