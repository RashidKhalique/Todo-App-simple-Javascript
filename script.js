let input = document.querySelector("input");
let btn = document.querySelector("button");
let container = document.querySelector(".container-list");
let currentEditingLi = null; // Variable to store the current editing list item

btn.addEventListener("click", () => {
    if (input.value === "") {
        alert("Please Enter Task");
        return false;
    }

    if (currentEditingLi) {
        // If we are editing, update the text of the existing list item
        currentEditingLi.firstChild.textContent = input.value;
        currentEditingLi = null; // Reset editing variable
    } else {
        // Create a new list item
        let li = document.createElement("li");
        li.innerHTML = input.value;
        container.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = 'X';
        li.appendChild(span);

        let i = document.createElement("i");
        i.classList.add("fa-regular");
        i.classList.add("fa-pen-to-square");
        li.appendChild(i);
    }

    input.value = ""; 
});

container.addEventListener("click", (e) => {
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    } else if (e.target.tagName === "I") {
      
        currentEditingLi = e.target.parentElement; 
        input.value = currentEditingLi.firstChild.textContent; 
    }
});
