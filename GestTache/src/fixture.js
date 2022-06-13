function get_todos(){
    var todos = new Array;
    var todos_str = localStorage.getItem('todo');
    if (todos_str !== null)
    {
        todos = JSON.parse(todos_str);
    }
    return todos;
}
console.log(localStorage.getItem('todo'));
arr = get_todos();

let btn_add = document.getElementById("additem");
let btn_delete = document.getElementById("deleted");

function get_update(){
    let title = document.getElementById('title').value;
    let desc = document.getElementById('description').value;
    let categorie = document.getElementById('categorie').value;
    let statut = "à faire";
    arr.push([title, desc, categorie, statut]);
    update();
}

function add(){
    var task = document.getElementById('title', 'description', 'categorie', 'statut').value;
    var todos = get_todos();
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));
    update();

    return false;
}

function update(){
    str ='';
    arr.forEach((element,index) => {
        str = str +
        `<tr>
        <th scope="row">${index+1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td>${element[2]}</td>
        <td>${element[3]}</td>
        <td><button type="submit" class="btn btn-primary btn-sm " onclick="deleted(${index})" >Delete</button></td>
        </tr>`
    });
    document.getElementById("tableBody").innerHTML = str;
}

function deleted(item_index){
    arr.splice(item_index,1);
    console.log(arr);
    update();
}

btn_add.addEventListener("click", () => {
    get_update();
    
});
document.getElementById('additem').addEventListener('click', add);

btn_delete.addEventListener("click", () => {
    deleted();
    
});
document.getElementById('deleted').addEventListener('click', deleted);