var scihubURL = "https://sci-hub.do/";

searchSciHub = function(word, tab){
  var query = word.selectionText;
  if (query == undefined) {
    var tabURL = tab.url;
    chrome.tabs.update({url: scihubURL + tabURL});
  } else {
    chrome.tabs.update({url: scihubURL + query});
  }
};

chrome.browserAction.onClicked.addListener(function(tab) {
  var tabURL = tab.url;
  chrome.tabs.update({url: scihubURL + tabURL});
});

chrome.contextMenus.create({
  title: "Load full text paper from sci-hub",
  contexts:["selection", "all"],
  onclick: searchSciHub
});
