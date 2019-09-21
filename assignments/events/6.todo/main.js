let input = document.querySelector("input[type = text]");
// console.dir(input);
input.style.position = "relative";
let ul = document.querySelector(".list");
let footer1 = document.createElement("div");
let f1 = document.createElement("div");
f1.className = "f1";
let f2 = document.createElement("div");
f2.className = "f2";
let f3 = document.createElement("div");
f3.className ="f3";
footer1.className = "footer1";
let item = document.createElement("span");
item.className = "item";
let all = document.createElement("span");
all.className = "all";
let active = document.createElement("span");
active.className = "active";
let completed = document.createElement("span");
completed.className = "completed";
// console.dir(ul);
// console.log(typeof(ul));


function handleSubmit (event){
    console.log(event.target.value);
    if (event.keyCode === 13 && event.target.value.trim() != "") {
        console.log(event.keyCode);
        const check = document.createElement("input");
        check.setAttribute("type", "checkbox");
        check.className = "check";
        const btn = document.createElement("i");
        const li = document.createElement("li");  
        btn.className = "far fa-times-circle";
        li.innerText = event.target.value;
        input.value = "";
        item.innerHTML = "1 <h3>item left</h3>";
        all.textContent = "All";
        active.textContent = "Active";
        completed.textContent = "Completed";
        li.appendChild(btn);
        li.appendChild(check);
        ul.appendChild(li) ;
        footer1.appendChild(item);
        footer1.appendChild(all);
        footer1.appendChild(active);
        footer1.appendChild(completed);
        ul.appendChild(footer1);
        ul.appendChild(f1);
        ul.appendChild(f2);
        ul.appendChild(f3);
       
    }

} 
function deleteSubmit (event) {
    if(event.target.classList.contains('fa-times-circle')){
        event.target.parentElement.remove();
    }
}
function hover (event) {
    if (event.target.classList.contains('fa-times-circle')){
        event.target.style.color = "red";
    }
}
function removeSpace (event) {
    if (event.target.value.index[0]!=" "){
        return event.target.value;
    }
}
ul.addEventListener("click" , deleteSubmit);
document.addEventListener("keydown", handleSubmit);
btn.addEventListener("mouseout",hover);

