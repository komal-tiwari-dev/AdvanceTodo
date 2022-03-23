// document.querySelector("#form").addEventListener("submit", myfun)

var getls = JSON.parse(localStorage.getItem("todovalue"))
// console.log(getls)

var completetask=JSON.parse(localStorage.getItem("complete"))||[]

getls.forEach(function(element){
    var tr=document.createElement("tr")

    var task=document.createElement("td")
    task.innerText=element.Iname
    var quantity = document.createElement("td")
    quantity.innerText = element.Iqty
    var priority = document.createElement("td")
    priority.innerText = element.Iprior
    var complete=document.createElement("button")
    complete.innerText='Mark complete'
    complete.style.fontSize="15px"
    complete.style.alignContent="center"
    complete.style.padding="5px 10px"
    complete.addEventListener("click" , function(){
        markcompletefun(element)
    })

    tr.append(task,quantity,priority,complete)
    document.querySelector("tbody").append(tr)

});
function markcompletefun(element){
    // console.log(element)
    completetask.push(element)
    localStorage.setItem("complete",JSON.stringify(completetask))
    // console.log(completetask)
}

