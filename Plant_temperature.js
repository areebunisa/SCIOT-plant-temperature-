var mqtt = require('mqtt')
var amqplib = require('amqplib')
var request = require('request')

const ADDRESS = '192.168.1.189';
const KEY = 'hHWKVWseA-NAMeP7hwboiKN16EmjKlS0jPLkCTYEAKb';
const topic = 'plant/temperature';

var parameters = {
    host: 'mqtt://' + ADDRESS,
    clientId: 'mqttjs_' + randomNumberGenerator(),
    username: 'guest',
    password: 'guest',
};

function randomNumberGenerator() {
    return Math.random().toString(16).substr(2, 8);
}

function sendMail() {
    request({
        url: 'https://maker.ifttt.com/trigger/TEMP_EMAIL/json/with/key/'+KEY,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    }, 
    function (er, response, body) {
        if (er) {
            console.log(er);
        } 
        else {
            console.log(response.statusCode, body);
        }
    });
}

amqplib.connect('amqp://guest:guest@192.168.1.189:5672').then(function(conn) {
    process.once('SIGINT', function() { conn.close(); });
    return conn.createChannel().then(function(channel) {
        
        var ok = channel.assertQueue('plant/temperature', {durable: false});

        ok = ok.then(function(_qok) {
           
            return channel.consume('plant/temperature', function(msg) {
                
                var weathertemp = msg.content.toString();

                topicData = 'plant/temperature' + weathertemp;
                sendMqttTopic(topic, topicData);
                console.log("industry plant value: " + msg.content);
                
                if (Number(msg.content) >= 850) {
                    console.log('plant/temperature')
                    sendMail();
                }


            }, {noAck: true});
        });

        return ok.then(function(_cok) {
            console.log('[expecting for messages : plant/temperture]');
        });
    });
}).catch(console.warn);

async function sendMqttTopic(topic, data) {
    var client = mqtt.connect("mqtt://" + ADDRESS, parameters);
    client.on('connect', function () {
        client.publish(topic, data, function () {
        client.end();
        });
    });
}