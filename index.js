
function getInputValue() {
  var message = document.querySelector(".message");
  var textInput = document.querySelector(".text-input");
  var inputValue = document.querySelector(".text-input").value;
  if (validateEmail(inputValue) === true) {
    message.classList.remove("errorMessageVisible");
    textInput.classList.remove("wrongInput");
    message.classList.add("goodMessageVisible");
    message.innerHTML = "Thank you, you will get notified!"
    document.querySelector(".text-input").value = "";
  } else {
    message.classList.remove("goodMessageVisible");
    message.classList.add("errorMessageVisible");
    textInput.classList.add("wrongInput");
    message.innerHTML = "Please provide a valid email address"
  }
}

function validateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return (true)
  }
  return (false)
}
