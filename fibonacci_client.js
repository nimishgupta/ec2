var request = require ("request");
var fs      = require ("fs");


function usage (program)
{
  return "Usage : node " + program + " <fibonacci server>";
}


if (process.argv.length != 3)
{
  console.log (usage (process.argv[1]));
}

var fibonacci_server = process.argv[2];


function dos ()
{
  var url = fibonacci_server + "?num=" + ((Math.floor (Math.random ()*100) + 1)%50);
  console.log (url);
  request (url, function (error, response, body) {});

  setTimeout (dos, 0);
}


setTimeout (dos, 0);
