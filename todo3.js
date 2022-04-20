const form = document.querySelector("form");
const input = document.querySelector("#txtTaskName")
const btnAdd = document.querySelector("#btnAddNewTask");
const delAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");

eventListeners();



function eventListeners() {

    form.addEventListener("submit", addNewItem)
    taskList.addEventListener("click", deleteItem)
    delAll.addEventListener("click",deleteAll)


}


function addNewItem(e) {

    if (input.value === '') {

        alert("Boş Değer girdiniz");
    }

    console.log("submit")

    e.preventDefault();



    //li oluşturma

    const li = document.createElement("li");
    li.classList = "list-group-item list-group-item-secondary";
    li.appendChild(document.createTextNode(input.value));



    //a oluşturma

    const a = document.createElement("a");
    a.classList = "delete-item float-right";
    a.setAttribute("href", "#");
    a.innerHTML = '<i class="fas fa-times"></i>';

    li.appendChild(a);
    taskList.appendChild(li);


    input.value = '';



}
function deleteItem(e) {

    if (e.target.className === "fas fa-times") {

        e.target.parentElement.parentElement.remove();

    }
}

function deleteAll(e){

/*taskList.childNodes.forEach(function(item){

    console.log(item)

});*/

    taskList.innerHTML = "";

}