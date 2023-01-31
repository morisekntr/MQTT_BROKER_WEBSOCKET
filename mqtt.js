var mqtt = require('mqtt');

function subscribe() {
  var broker = document.getElementById("broker").value;
  var topic = document.getElementById("topic").value;

  var client = mqtt.connect(broker);

  client.on('connect', function () {
    client.subscribe(topic, function (err) {
      if (!err) {
        console.log('Subscribed to topic: ' + topic);
      }
    });
  });

  client.on('message', function (topic, message) {
    // message is Buffer
    var messageContainer = document.getElementById("messageContainer");
    var newMessage = document.createElement("p");
    newMessage.innerHTML = message.toString();
    messageContainer.appendChild(newMessage);
  });
}

function publish() {
  var message = document.getElementById("message").value;
  client.publish(topic, message);
  console.log('Published message: ' + message);
}
