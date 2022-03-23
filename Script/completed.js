var com=JSON.parse(localStorage.getItem("complete"))

com.forEach(function(ele){
    var tr1=document.createElement("tr")

    var td1 = document.createElement("td")
    var td2 = document.createElement("td")
    var td3 = document.createElement("td")
    
    td1.innerText=ele.Iname
    td2.innerText=ele.Iqty
    td3.innerText=ele.Iprior

    tr1.append(td1,td2,td3)
    document.querySelector("#body").append(tr1)
})