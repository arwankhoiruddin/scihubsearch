searchSciHub = function(word){
  var query = word.selectionText;
  chrome.tabs.update({url: "http://sci-hub.cc/" + query});
};

chrome.browserAction.onClicked.addListener(function(tab) {
  var tabURL = tab.url;
  chrome.tabs.update({url: "http://sci-hub.cc/" + tabURL});
});

chrome.contextMenus.create({
  title: "Search DOI in sci-hub",
  contexts:["selection"],
  onclick: searchSciHub
});
