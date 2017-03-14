var msgList ;
var shuoshuoInfoList = [];

$("#btnGetShuoShuo").on("click",function(){
  chrome.tabs.getSelected(null, function(tab) {
    chrome.tabs.sendRequest(tab.id, {method: "msgList"}, function(response) {
        if(response.method=="msgList"){
            msgList = $(response.data);
            msgList.each(function(index){
                var li = msgList[index];
                var content =$($(li).find(".bd")[0]).find("pre")[0].innerHTML;
                var customtail =$($($(li).find("span.custom-tail"))[0]).attr("title");
                var date =$($($(li).find("a.goDetail"))[0]).attr("title");
                var shuoshuoInfo = {
                     "content":content,
                     "date":date,
                     "customtail":customtail!=undefined && customtail!=""?customtail:"Web",
                    };
               console.log(shuoshuoInfo);
               shuoshuoInfoList.push(shuoshuoInfo);
            });
        }
    });
});
});
