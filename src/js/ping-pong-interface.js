var Compute = require('./../js/ping-pong.js');
$(document).ready(function() {
  $('#ping-pong-form').submit(function(event) {
    event.preventDefault();
    var number = $('#number').val();
    var objCompute = new Compute();
    var output = objCompute.pingPong(number);
    output.forEach(function(item) {
      $('#result').append("<li>" + item + "</li>");
    });
  });
});
