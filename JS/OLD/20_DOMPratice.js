let var1 = document.body.getElementsByTagName('h1')
console.log(var1)
console.log(var1[0])
console.log(var1[0].innerText)

let div = document.createElement('div')
div.innerHTML='<h2>This is created using dom property\'s</h2>'
div.setAttribute("class","divTag")
document.body.appendChild(div)
console.log(div);
console.log(div.textContent);

// let firstChild = document.body.firstElementChild

