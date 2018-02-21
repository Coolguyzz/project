window.onload = function () {
    var messages = [];
    var socket = io.connect('http://172.17.221.180:3000');
    var field = document.getElementById("field");
    var sendButton = document.getElementById("send");
    var content = document.getElementById("content");

    socket.on ('message',function (data) {
        if (data.message){
          messages.push(data.message);
          console.log(messages);
          var html = '';
          for (var i=0 ; i<messages.length;i++){
              html+= messages[i] + '<br />';
              console.log("i is ",i);
          }
          content.innerHTML = html;
          console.log("html in func2 is ",html);

        }else {
          console.log("there is a probleme ",data);
        }
    });
    sendButton.onclick = function() {
        var text = field.value;
        socket.emit('send', { message: text });
    };


}
