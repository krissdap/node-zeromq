var zmq = require('zeromq')
  , sock = zmq.socket('pub');

// var addrString = 'tcp://127.0.0.1:3000';
// var addrString = 'tcp://172.21.16.1:3000';
var addrString = 'tcp://10.11.103.79:3000';

sock.bindSync(addrString);
console.log('Publisher bound to port 3000');

let i = 0;
setInterval(function(){
  console.log('sending a multipart message envelope');
  //sock.send(['kitty cats', 'meow!']);
  let text = 'iter:' + (i++).toString();
  sock.send(['kitty cats', text]);
}, 500);
