// //!     DOM   ==>  Document Object Modal is a representation of html elements stucture 

// let a =document.body.firstChild
// console.log(a);

// let b = document.body.lastChild
// console.log(b);

// let c = document.body.childNodes[0].childNodes[1].textContent
// console.log(c);

// console.log(a.childNodes[2].previousSibling);
// console.log(a.firstChild);           
// console.log(a.firstChild.nextSibling);

// console.log(a.firstChild.parentNode.innerHTML);              //* it give any thing like node or document
// console.log(a.childNodes[3].childNodes[1].parentElement.innerHTML);                //* it gives parent elemet or null if not avaialibe



// let d = document.body

// console.log(d.firstChild.firstChild);

// console.log(d.firstElementChild.firstElementChild)

// console.log(d.firstChild.nextSiblingElement);

// console.log(d.firstChild.firstChild);




//?        for searching in dom we use

let  val1 = document.getElementsByClassName("span")      //* hear we use the class name

// console.log(val1[0].textContent);

let val2 = document.getElementById('p')           //* hear we use the id

// console.log(val2.textContent);


let val3 = document.getElementsByTagName('p')                //* hear we use the tag name
// console.log(val3[3].textContent);

let val4 = document.body.querySelector('div')                   //* hear we use the queryselector like id , class, tag
// console.log(val4[0].innerText);


let val5 = document.body.querySelector('para')                     
// console.log(val5);  


let val6 = document.getElementsByName('para')                            //* this take has name attribute
// console.log(val6[0]);

let val7 = document.querySelectorAll('p')[1]

// console.log(val2.matches('#p'));

// console.log(val4.contains(val2));
// console.log(val4.contains(val4));

// console.log(val1.closest(val4));


//!        INNERHTML AND   OUTERHTML

let inn = document.body.querySelectorAll('div')[0]
// console.log(inn.innerHTML , " <= inn.innerHTML ");
// console.log(inn.outerHTML ,' <= inn.OuterHTML');
// console.log(inn.innerText," <= inn.innerText");
// console.log(inn.textContent," <= textContent");

console.log("--------------------------------------------------------------------------------------------")
// console.log(inn.firstChild);
// console.log(inn.firstChild.nodeName);
// console.log(inn.firstChild.nodeValue);

console.log("--------------------------------------------------------------------------------------------")
// console.log(inn.firstElementChild);
// console.log(inn.firstElementChild.nodeName);
// console.log(inn.firstElementChild.nodeValue);

console.log(val2.hasAttribute('id'))
console.log(val2.getAttribute('id'));
console.log(val2.setAttribute('data-pappu',"mahesh"));
console.log(val2.removeAttribute('id'));
console.log(val2.dataset);
console.log(val2.dataset.pappu);








