let openedWindowId = null;

chrome.runtime.onStartup.addListener(() => {
  chrome.windows.create(
    {
      url: chrome.runtime.getURL("popup.html"),
      type: "popup",
      width: 400,
      height: 300,
    },
    (window) => {
      openedWindowId = window.id;
      console.log("Popup opened with ID:", openedWindowId);
    }
  );
});

chrome.windows.onRemoved.addListener((windowId) => {
  if (windowId === openedWindowId) {
    console.log("The window with ID", windowId, "has been closed.");
    openedWindowId = null;
  }
});
