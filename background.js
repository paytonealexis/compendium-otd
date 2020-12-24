chrome.browserAction.onClicked.addListener(function(activeTab){
  var newURL = "https://otd.com-pen-di-um.com/";
  chrome.tabs.create({ url: newURL });
});
