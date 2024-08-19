//this bit of code listens any messages from content script to be processed, say
//i dunno, HTTP request
//this is like a backend bit of the extension

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  const { action } = request;

  switch (action) {
    case "getCurrentTabUrl":
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs.length > 0) {
          const currentTab = tabs[0];
          sendResponse({ url: currentTab.url });
        } else {
          sendResponse({ url: null });
        }
      });
      break;
    default:
      break;
  }

  return true;
});
