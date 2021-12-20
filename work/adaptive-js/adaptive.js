const input1 = document.getElementsByClassName("label__input");
const button1 = document.getElementsByClassName("add-form__submit");
const resultSpan = document.getElementsByClassName("info__report");

button1[0].addEventListener("click", assignKey, false);
var map = {};
function assignKey(e) {
  e.preventDefault();
  var key = input1[0].value.trim();
  typeof map[key] === "undefined" ? (map[key] = 1) : map[key]++;
  console.log(map);
  resultSpan[0].innerText = "The count for " + key + " is " + map[key];
}

button1[0].disabled = true;
input1[0].addEventListener("input", stateHandle);

function stateHandle() {
  if (input1[0].value.trim() === "") {
    button1[0].disabled = true;
  } else {
    button1[0].disabled = false;
  }
}
