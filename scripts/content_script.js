document.getElementById("submit").addEventListener("click", passwdAction);

function passwdAction() {
  let password = document.getElementById("password").value;

  chrome.runtime.sendMessage({
    action: "passwordSubmitted",
    password: password,
  });

  window.close();
}
