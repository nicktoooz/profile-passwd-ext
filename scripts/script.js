//this is a script for local index.html

const button = document.querySelector("#btn");

button.addEventListener("click", async () => {
  //to get the current url, you need to send a message to the service worker

  chrome.runtime
    .sendMessage({
      action: "getCurrentTabUrl",
    })
    .then((response) => {
      chrome.windows.create({
        url: response.url,
        type: "popup",
        width: 400,
        height: 300,
        left: 100,
        top: 100,
      });
    });
});
