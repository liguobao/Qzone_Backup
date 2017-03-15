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
            var pager_last_0= window.frames["app_canvas_frame"]!=undefined ? $(window.frames["app_canvas_frame"].document).find("#pager_last_0")
            :$(".app_canvas_frame").contents().find("#pager_last_0");
            var pagerCount = undefined;
            if(pager_last_0!=undefined && pager_last_0.length >0){
                pagerCount = $(pager_last_0).find("span")[0].innerHTML
            }
            sendResponse({data: pagerCount, method: "pager_last_0"}); //same as innerText
        }else if(request.method=="setPagerGoCount"){

            var app_canvas_frame =  window.frames["app_canvas_frame"]!=undefined ? $(window.frames["app_canvas_frame"].document)
            :$(".app_canvas_frame").contents();
            if(!app_canvas_frame){
                sendResponse({data: "fail", result:"fail",method: "setPagerGoCount"}); 
                return;
            }
            
            var pager_go_0 = app_canvas_frame.find("#pager_go_0");
            var pager_gobtn_0 = app_canvas_frame.find("#pager_gobtn_0");
            if(pager_go_0&& pager_go_0.length>0&&pager_gobtn_0&&pager_gobtn_0.length>0){
                $(pager_go_0[0]).val(request.data);
                $(pager_gobtn_0[0]).click();
                while(window.scrollTo(0,document.body.scrollHeight));

                 var msgListLabel= app_canvas_frame.find("#msgList");
                console.log("msgList 信息："+ msgListLabel);
                var msgListText = undefined;
                if(msgListLabel && msgListLabel.length>0){
                    msgListText=  msgListLabel[0].innerHTML;
                }
                setTimeout(sendResponse({data: msgListText,result:"success", method: "setPagerGoCount"}),5000);
                //sendResponse({data: "success", method: "setPagerGoCount"});  
            }else{
                sendResponse({data: "fail", method: "setPagerGoCount"}); 
            }
           
        }
    }
);