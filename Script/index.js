document.querySelector("#form").addEventListener("submit",todofun)

if(localStorage.getItem("todovalue")==null){
    localStorage.setItem("todovalue", JSON.stringify([]))
}

var todolist=JSON.parse( localStorage.getItem("todovalue"))

function todofun(){
    event.preventDefault();
    var name=document.querySelector('#name').value
    var qty=document.querySelector("#qty").value
    var prior=document.querySelector("#priority").value

    var obj1={
        Iname : name,
        Iqty : qty,
        Iprior : prior
    }

    todolist.push(obj1)

    localStorage.setItem("todovalue",JSON.stringify(todolist))
}