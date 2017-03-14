var msgList ;
var shuoshuoInfoList = [];

$("#btnGetShuoShuo").on("click",function(){
  chrome.tabs.getSelected(null, function(tab) {
    chrome.tabs.sendRequest(tab.id, {method: "msgList"}, function(response) {
        if(response.method=="msgList"){
            msgList = response.data;
            $(msgList).each(function(li){
                var content =$(li).find(".bd")[0];
                var customtail = $(li).find(".custom-tail")[0];
                var date =$(($li).find(".goDetail")[0]).attr("title");
                 var shuoshuoInfo = {
                     "content":content,
                     "date":date,
                     "customtail":customtail
                    };
            });
            


        }
    });
});
});
