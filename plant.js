var message_protocol = require('amqplib');

exports.handler = function (context, event) {

    var randomInt = Math.round(Math.random() * (800 - 900)) + 900;
    var message = String(randomInt);

    message_protocol.connect('amqp://guest:guest@172.19.193.138:5672').then(function (conn) {
        return conn.createChannel().then(function (channel) {
            var topic = 'plant/temperature';
            var success = channel.assertQueue(topic, {durable: false});
            return success.then(function () {
                channel.sendToQueue(topic, Buffer.from(message));
                return channel.close();
            });
        }).finally(function () {
            conn.close();
        })
    }).catch(console.log);
    context.callback('Message successfully Sent');
};