

const AddHobby = () => {
    const input = document.getElementById("hobby");
    const hobby = input.value;
    const hobbies = document.getElementById("hobbies");
    const hobby_li = document.createElement("li");
    hobby_li.innerText = hobby
    hobbies.appendChild(hobby_li);
}