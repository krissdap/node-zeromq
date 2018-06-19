var zmq = require('zeromq')
  , sock = zmq.socket('push');

sock.bindSync('tcp://127.0.0.1:3000');
console.log('Producer bound to port 3000');

var i = 0;

setInterval(function(){
  let iter = (i++).toString();
  console.log('sending work ' + iter);
  let text = 'some work ' + iter + ' iter';
  sock.send(text);
}, 500);
