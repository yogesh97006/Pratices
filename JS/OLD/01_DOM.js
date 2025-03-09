//!           DOM => Document Object Modal

// let div = document.body.getElementsByTagName('div')[0].firstElementChild.firstElementChild.textContent
// console.log(div);

// let img = document.createElement('img')
// img.src = 'data:image/webp;base64,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'
// img.alt = 'virat kholi'

// let div = document.body.getElementsByClassName('parent')[0]
// console.log(div)

// div.appendChild(img)

// let div = document.body.getElementsByClassName('first')[0]
// console.log(div);

let span = document.body.getElementsByClassName('first')[0].getElementsByClassName('parent')[0]
// console.log(span);


let h2 = document.createElement('h2')
h2.innerText = "Hello There"
// h2.style.color = 'cyan'
// h2.style.backgroundColor = 'black'

//todo  span.append(h2,"hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii")
// span.prepend("/----------------------------------------------------------------") //! hear we can give text not an element
// span.before(h2)
// span.after(h2)

// const container = document.getElementById("container");
// const title = document.getElementById("title");

// // Append Example
// let appendText = document.createElement("p");
// appendText.innerText = "Appended!";
// container.append(appendText);

// // Prepend Example
// let prependText = document.createElement("p");
// prependText.innerText = "Prepended!";
// container.prepend(prependText);

// // Before Example
// let beforeText = document.createElement("p");
// beforeText.innerText = "Before Title!";
// title.before(beforeText);

// // After Example
// let afterText = document.createElement("p");
// afterText.innerText = "After Title!";
// title.after(afterText);

let container = document.getElementById('container')

// console.log(container.matches(".container"))
// console.log(container.matches(".containerBox"))

// console.log(container.closest('.parent'));
// let span = document.getElementsByClassName('parent')
// console.log(span.contains("container"));

let ele = document.createElement('p')
ele.innerText = 'this is p tag'

// document.body.insertAdjacentElement('beforebegin',"hiiii")
// document.body.insertAdjacentElement('afterbegin',ele,span)
// document.body.insertAdjacentElement('beforeend',ele)
// document.body.insertAdjacentElement('afterend',h2)  //! hear we can not pass multiple elements only single

