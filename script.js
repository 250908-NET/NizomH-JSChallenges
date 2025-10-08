function sayHello() {
  alert("Hello from the external file!");
}

function sayGoodbye() {
  alert("Goodbye from the external file!");
}

// Connect the function to the button
let helloBtn = document.getElementById("helloBtn");
helloBtn.addEventListener("click", sayHello);

let byeBtn = document.getElementById("byeBtn");
byeBtn.addEventListener("click", sayGoodbye);