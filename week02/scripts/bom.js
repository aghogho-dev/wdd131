const inputVar = document.querySelector("#favchap");
const btnVar = document.querySelector("button");
const listVar = document.querySelector("#list");



btnVar.addEventListener("click", () => {

    const li = document.createElement("li");
    const delBtn = document.createElement("button");

    li.textContent = inputVar.value;
    delBtn.textContent = "❌";

    li.appendChild(delBtn);
    listVar.appendChild(li);

    delBtn.addEventListener("click", () => {
        listVar.removeChild(li);
    });

});