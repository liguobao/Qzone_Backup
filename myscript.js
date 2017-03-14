chrome.extension.onRequest.addListener(
    function(request, sender, sendResponse) {
      if(request.method=="msgList"){
            var msgListLabel= window.frames["app_canvas_frame"]!=undefined ? $(window.frames["app_canvas_frame"].document).find("#msgList"):$(".app_canvas_frame").contents().find("#msgList");
            // var msgList= $(".app_canvas_frame").contents().find("#msgList");
            console.log("msgList 信息："+ msgListLabel);
            var msgListText = undefined;
            if(msgListLabel==undefined){
                console.log("获取数据失败...");
            }else{
               msgListText=  msgListLabel[0].innerHTML;
            }
            sendResponse({data: msgListText, method: "msgList"}); //same as innerText
        }else if(request.method=="pager_last_0"){
            var pager_last_0Lable= window.frames["app_canvas_frame"]!=undefined ? $(window.frames["app_canvas_frame"].document).find("#pager_last_0")
            :$(".app_canvas_frame").contents().find("#pager_last_0");
            var pagerCount = undefined;
            if(pager_last_0Lable!=undefined){
                pagerCount = $(pager_last_0Lable).find("span")[0].innerHTML
            }
            sendResponse({data: pagerCount, method: "pager_last_0"}); //same as innerText
        }else if(request.method=="setPagerGoCount"){
            var pager_go_0 = window.frames["app_canvas_frame"]!=undefined ? $(window.frames["app_canvas_frame"].document).find("#pager_go_0")
            :$(".app_canvas_frame").contents().find("#pager_go_0");

            var pager_gobtn_0 = window.frames["app_canvas_frame"]!=undefined ? $(window.frames["app_canvas_frame"].document).find("#pager_gobtn_0")
            :$(".app_canvas_frame").contents().find("#pager_gobtn_0");
            if(pager_go_0&&pager_gobtn_0){
                $(pager_go_0[0]).val(request.data);
                $(pager_gobtn_0[0]).click();
                window.scrollTo(0,document.body.scrollHeight);
                window.scrollTo(0,document.body.scrollHeight);
                sendResponse({data: "success", method: "setPagerGoCount"}); //same as innerText
            }else{
                sendResponse({data: "fail", method: "setPagerGoCount"}); //same as innerText
            }
           
        }
    }
);