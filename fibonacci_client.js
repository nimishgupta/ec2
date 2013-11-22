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

var nrequests = 0;
var nerrors   = 0;


var global_time = Date.now ();

function _dos (req_num)
{
  var num = (Math.floor (Math.random ()*100) + 1)%35;
  var url = fibonacci_server + "?num=" + num;

  var t1 = Date.now ();
  var req_time = t1 - global_time;

  request (url, function (error, response, body)
                {
                  var time = Date.now () - t1;
                  var ecode = error? "000" : response.statusCode;

                  nerrors += (!error && (200 == response.statusCode)) ? 0 : 1;
                  
                  // "<request id> <start time> <response code> <fib num requested> <time>
                  console.log (req_num + " " + req_time + " " + ecode + " " + num + " " + time);
                });
}


function next_delay ()
{
  return 0;
}


function dos ()
{
  ++nrequests;

  _dos (nrequests);

  setTimeout (dos, next_delay ());
}

setTimeout (dos, 0);
