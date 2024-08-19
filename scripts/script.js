//this is a script for local index.html

const button = document.querySelector("#btn");

button.addEventListener("click", async () => {
  console.log("Sending to service worker");
  const response = await chrome.runtime.sendMessage({
    from: "index",
    message: "Hello from Index",
  });
  console.log("From Service worker: ", response);
});
