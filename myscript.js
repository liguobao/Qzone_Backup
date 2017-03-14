chrome.extension.onRequest.addListener(
    function(request, sender, sendResponse) {
      if(request.method=="msgList"){
            var msgList= $(window.frames["app_canvas_frame"].document).find("#msgList");
            // var msgList= $(".app_canvas_frame").contents().find("#msgList");
            console.log(msgList);
             sendResponse({data: msgList[0].innerHTML, method: "msgList"}); //same as innerText
        }
    }
);