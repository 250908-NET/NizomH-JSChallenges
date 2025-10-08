function greetUser() {
  let name = document.getElementById("nameInput").value;
  if (name.trim() === "") {
    alert("Please enter your name first!");
  } else {
    alert("Hello, " + name + "!");
  }
}

function outputColor() {
    let color = document.getElementById("colorInput").value;
    if (color.trim() === "") {
        alert("Please enter your color first!");
    } else {
        alert(`Your favorite color is ${color}`);
    }
}

document.getElementById("greetBtn").addEventListener("click", greetUser);
document.getElementById("colorBtn").addEventListener("click", outputColor);