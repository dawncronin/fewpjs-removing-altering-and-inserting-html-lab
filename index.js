
// Write your code here!
document.querySelector("#main").remove()

let newHeader = document.createElement("h1")

var newContent = document.createTextNode("Dawn is the champion"); 

newHeader.appendChild(newContent)

newHeader.setAttribute("id", "victory");

document.body.appendChild(newHeader);

