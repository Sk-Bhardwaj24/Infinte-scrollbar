let timerId;
function throttling(cb, delay) {
  if (timerId) {
    return;
  }
  timerId = setTimeout(function () {
    cb();
    timerId = undefined;
  }, delay);
}
function main() {
  let inp = document.getElementById("inp1");
  let up1 = document.getElementById("up1");
  console.log("hii");
  up1.innerHTML = inp.value;
}
