chrome.extension.onRequest.addListener(
    function(request, sender, sendResponse) {
        if(request.method == "getApp_container"){
			var dataInfo = $("#app_container");
			console.log(dataInfo);
            sendResponse({data: dataInfo, method: "getApp_container"}); //same as innerText
        }
    }
);