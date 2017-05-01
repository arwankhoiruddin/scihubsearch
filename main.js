searchSciHub = function(word){
  var query = word.selectionText;
  chrome.tabs.update({url: "http://sci-hub.cc/" + query});
};

chrome.contextMenus.create({
  title: "Search DOI in sci-hub",
  contexts:["selection"],
  onclick: searchSciHub
});
