

const AddHobby = () => {
    const input = document.getElementById("hobby");
    const hobby = input.value;
    const hobbies = document.getElementById("hobbies");
    const hobby_li = document.createElement("li");
    hobby_li.innerText = hobby
    hobbies.appendChild(hobby_li);
}

const ListHobbies = () => {
    const hobbies_li = document.querySelectorAll("#hobbies > li");
    const hobbies = [];
    
    hobbies_li.forEach(li => {
        const hobbyText = li.innerText.trim();
        if (hobbyText !== "") {
            hobbies.push(hobbyText);
        }
    });

    alert(hobbies.join(", "));
}