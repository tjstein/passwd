var express, http, make_passwd;

express = require('express');

http = express();
http.use(express.logger());

make_passwd = function(n, a) {
  var index = (Math.random() * (a.length - 1)).toFixed(0);
  return n > 0 ? a[index] + make_passwd(n - 1, a) : '';
};

http.get('/', function(request, response) {
  var password;

  password = make_passwd(13, 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890');

  response.type('text/plain');
  response.send(password);
});

http.listen(process.env.PORT);