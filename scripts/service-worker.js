//this bit of code listens any messages from content script to be processed, say
//i dunno, HTTP request
//this is like a backend bit of the extension

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  const { from, message } = request;
  switch (from) {
    case "content-script":
      sendResponse({ data: { message: message } });
      break;

    case "index":
      sendResponse({ data: { message: message } });
      break;

    default:
      sendResponse({ data: "an error occured" });
      break;
  }
  console.log(`From: ${from} | Message: ${message}`);
});
