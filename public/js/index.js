var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
  console.log('newMessage', message);
  var li = jQuery('<li></li>');
  li.text(`${message.from}: ${message.text}`);

  jQuery('#messages').append(li);
});

jQuery('#messageForm').on('submit', function(e){
  e.preventDefault();
  var textField = jQuery('[name=message').val();
  socket.emit('createMessage',{
      from:"Jan",
      text:textField
  }, function(data){
      console.log('New message',data);
      
  }); 
});
