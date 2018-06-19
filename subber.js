var zmq = require('zeromq')
  , sock = zmq.socket('sub');

var addrString = 'tcp://127.0.0.1:3000';
// var addrString = 'tcp://172.21.16.1:3000';
sock.connect(addrString);
sock.subscribe('kitty cats');
console.log('Subscriber connected to port 3000');

sock.on('message', function(topic, message) {
  console.log('received a message related to:', topic, 'containing message:', message);
});
