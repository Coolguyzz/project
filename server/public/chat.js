window.onload = function () {
    var messages = [];
    var socket = io.connect('http://localhost:3000');
    var field = document.getElementById("field");
    var sendButton = document.getElementById("send");
    var content = document.getElementById("content");

    socket.on ('message',function (data) {
        if (data.message){
          messages.push(data.message);
          console.log(messages);
          var html = '';
          for (var i=0 ; i<messages.length;i++){
              html+='<h4>'+ messages[i] + '</h4> <br />';
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
