let input = document.querySelector("input[type = text]");
let ul = document.querySelector(".list");
let inputContainer = document.querySelector(".input_container");
console.log(inputContainer);
let liLength = document.querySelectorAll('.li_list').length;


function handleSubmit (event){
    console.log(event.target.value);
    if (event.keyCode === 13 && event.target.value.trim() != "") {
        console.log(event.keyCode);
        const check = document.createElement("input");
        check.setAttribute("type", "checkbox");
        check.className = "check";
        check.classList.add("checkRemove")
        const btn = document.createElement("i");
        const li = document.createElement("li"); 
        li.className = 'li_list'; 
        btn.className = "far fa-times-circle";
        li.innerText = event.target.value;
        document.querySelector(".input_container .fas").classList.add("fa-chevron-down");
        document.querySelector(".foot").classList.add("footer_container");
        li.appendChild(btn);
        li.appendChild(check);
        ul.appendChild(li) ;
        event.target.value = "";
        console.log(document.querySelectorAll('.li_list').length);
    }

}    
function deleteSubmit (event) {
    if(event.target.classList.contains('fa-times-circle')){
        event.target.parentElement.remove();
    }
}

function handleCheck (event) {
    if (event.target.classList.contains("check") && event.target.value === "on"){
        event.target.parentElement.style.textDecoration = "line-through"
        event.target.parentElement.style.color = "rgb(238, 231, 231)";
        document.querySelector(".clear_completed").classList.add("clearCompleted");
        for (i = 0; i < liLength ; i++ ){
           document.querySelector(".item_count").innerText = i;
        }
    }
}

function itemCount (event){
    if (event.target.classList.contains("item_count")){

    }
}
ul.addEventListener("click" , deleteSubmit);
document.addEventListener("keydown", handleSubmit);
ul.addEventListener("click",handleCheck);
ul.addEventListener("click",handleUncheck);


