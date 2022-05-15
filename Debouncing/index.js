let timerId;
function debounce(cb, delay) {
  if (timerId) {
    clearTimeout(timerId);
  }
  timerId = setTimeout(function () {
    cb();
  }, delay);
}
function main() {
  let inpt = document.getElementById("input1");
  let up1 = document.getElementById("up1");
  up1.innerText = inpt.value;
}
