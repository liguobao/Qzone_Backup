var msgList ;

$("#btnGetShuoShuo").on("click",function(){
  chrome.tabs.getSelected(null, function(tab) {
    chrome.tabs.sendRequest(tab.id, {method: "msgList"}, function(response) {
        if(response.method=="msgList"){
            msgList = response.data;
            console.log(msgList);
            $($(msgList)[5]).find(".bd")[0];
        }
    });
});
});
