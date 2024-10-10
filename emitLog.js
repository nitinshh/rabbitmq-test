/* 
RABBITMQ START

in ubuntu terminal

sudo apt-get install rabbitmq-server

 sudo service rabbitmq-server start
*/


var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function (error0, connection) {
  if (error0) {
    throw error0;
  }
  connection.createChannel(function (error1, channel) {
    if (error1) {
      throw error1;
    }
    var queue = 'hello';
    var msg = 'i am sending';

    channel.assertQueue(queue, {
      durable: false
    });

    channel.sendToQueue(queue, Buffer.from(msg));
    console.log(" Sent ", msg);
  });

  setTimeout(function () {
    connection.close();
    process.exit(0)
  }, 500);
});