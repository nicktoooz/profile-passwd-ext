//this code executes whenever a page loads

//this bit sends a message to the service worker and logs the response from the sw
(async () => {
  const response = await chrome.runtime.sendMessage({
    from: "content-script",
    message: "Hello from Content script",
  });
  console.log(response);
})();
