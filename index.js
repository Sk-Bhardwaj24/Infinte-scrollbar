let container = document.getElementById("container");

function displayFirstTime() {
  let i = 1;
  while (i <= 25) {
    let line = document.createElement("li");
    line.textContent = "Masai Student" + " " + i;
    container.append(line);
    i++;
  }
}
displayFirstTime();
container.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = container;
  if (scrollTop + clientHeight >= scrollHeight - 5) {
    throttleFunction(makeAPICall, 1000); //throttle start
  }
});
var timerId;

function throttleFunction(func, delay) {
  if (timerId) {
    return; //    clearTimeout(timerId)
  } //    timerId  =  setTimeout(func, delay)//It's for debouncing
  timerId = setTimeout(function () {
    func();
    timerId = undefined;
  }, delay);
}

function makeAPICall() {
  let prev = +container.lastChild.textContent.split(" ")[2];
  let i = 0;
  while (i < 25) {
    let line = document.createElement("li");
    line.textContent = "Masai Student" + " " + ++prev;
    container.append(line);
    i++;
  }
}

// function displayMore() {
//   console.log("ll");

// }
