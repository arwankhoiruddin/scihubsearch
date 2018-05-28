var scihubURL = "https://whereisscihub.now.sh/go/";

searchSciHub = function(word, tab){
  var query = word.selectionText;
  if (query == undefined) {
    var tabURL = tab.url;
    chrome.tabs.create({url: scihubURL + tabURL});
  } else {
    chrome.tabs.create({url: scihubURL + query});
  }
};

chrome.browserAction.onClicked.addListener(function(tab) {
  var tabURL = tab.url;
  chrome.tabs.create({url: scihubURL + tabURL});
});

chrome.contextMenus.create({
  title: "Search DOI in sci-hub",
  contexts:["selection", "all"],
  onclick: searchSciHub
});
