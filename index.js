// Write your code here!
let container=document.querySelector("main#main")
container.remove()
let newHeader=document.createElement("h1")
newHeader.id="victory"

let yourName="Houstin Angwenyi"
newHeader.textContent=`${yourName} is the champion`

container.appendChild(newHeader)