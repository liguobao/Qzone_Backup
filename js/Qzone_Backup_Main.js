$("#btnGetShuoShuo").on("click",function(){
  chrome.tabs.getSelected(null, function(tab) {
    chrome.tabs.sendRequest(tab.id, {method: "getApp_container"}, function(response) {
        if(response.method=="getApp_container"){
            alltext = response.data;
            console.log(alltext);
        }
    });
});
});
