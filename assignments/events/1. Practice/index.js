//Select the section with an id of container without using querySelector.

document.getElementById("container");

//Select the section with an id of container using querySelector.
document.querySelector("#container");

//Select all of the list items with a class of "second".

document.querySelectorAll(".second");

//Select a list item with a class of third, but only the list item inside of the ol tag.

document.querySelector("ol>.third");

//Give the section with an id of container the text "Hello!".
span = document.createElement("span");
document.getElementById("container").appendChild(span);
span.innerText = "Hello!";

//Add the class main to the div with a class of footer.

document.querySelector(".footer").classList.add("main");

//Remove the class main on the div with a class of footer.
document.querySelector(".footer").classList.remove("main");

//Create a new li element.
var li = document.createElement("li");
//Give the li the text "four".
li.innerText = "four";
//Append the li to the ul element.
document.getElementsByTagName("ul")[0].appendChild(li);
//Loop over all of the list inside the ol tag and give them a background color of "green".
document.querySelectorAll("ol>li").forEach( e => { e.style.backgroundColor = "green";});
//Remove the div with a class of footer.
document.querySelector(".footer").remove();