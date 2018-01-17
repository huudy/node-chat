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

socket.on('newLocationMessage', function (message) {
  console.log('newLocationMessage', message);
  var li = jQuery('<li></li>');
  var a = jQuery('<a target="_blank">My location</a>');

  li.text(`${message.from}: `);
  a.attr('href', message.url);
  li.append(a);

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

var locationButton = jQuery('#sendLocation');

locationButton.on('click', function(){
  if(!navigator.geolocation){
    return alert('This browser does not support geolocation');
  }

  navigator.geolocation.getCurrentPosition(function(position){
    socket.emit('createLocationMessage',{
      lat:position.coords.latitude,
      lng:position.coords.longitude
    })
  }, function(err){
    alert('Unable to fetch location');
  });

});