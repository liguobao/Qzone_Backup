var msgList ;
var shuoshuoInfoList = [];
var pagerCount = 0;

$("#btnGetShuoShuo").on("click",function(){
  chrome.tabs.getSelected(null, function(tab) {

    
    chrome.tabs.sendRequest(tab.id, {method: "pager_last_0"}, function(response) {
          if(response.method=="pager_last_0"){
              pagerCount =  response.data;    
              console.log("当前页数："+pagerCount);
              for(var index =1;index<5;index++){
                  chrome.tabs.getSelected(null, function(tab) {
                        chrome.tabs.sendRequest(tab.id, {method: "setPagerGoCount",data:index}, function(response) {
                             if(response.method=="setPagerGoCount"){
                                  $("#btnGetShuoShuo").html("<i class='am-icon-spinner am-icon-spin'></i>正在跳转至第"+index +"页");
                                 console.log(response.data);
                                }
                            });});
                 
              }
          }
     });


/*    chrome.tabs.sendRequest(tab.id, {method: "msgList"}, function(response) {
        $("#btnGetShuoShuo").html("<i class='am-icon-spinner am-icon-spin'></i>正在获取数据...");
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
        if(shuoshuoInfoList.length>0){
            $("#btnGetShuoShuo").html("获取数据成功！");
        }else{
            $("#btnGetShuoShuo").html("获取数据失败！");
        }
        
    });*/
/*chrome.tabs.getSelected(null, function(tab) {
     chrome.tabs.sendRequest(tab.id, {method: "pager_last_0"}, function(response) {
          if(response.method=="pager_last_0"){
              pagerCount =  response.data;    
              console.log(pagerCount);          
          }
     });});

chrome.tabs.getSelected(null, function(tab) {
     chrome.tabs.sendRequest(tab.id, {method: "setPagerGoCount",data:10}, function(response) {
          if(response.method=="setPagerGoCount"){
              console.log( response.data);          
          }
     });});*/

});
});
