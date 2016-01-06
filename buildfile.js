var r = require('replace');
var copy = require('copyfiles');

copy(['index.html', 'dist'], null, function(){
  r({
    regex: 'http://localhost:8080/build/',
    replacement: 'https://s3-eu-west-1.amazonaws.com/wirewax/OKR/',
    paths: ['./dist/index.html']
  });
});
