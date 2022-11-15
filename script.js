// console.log(document.body);
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);

// console.log(document.querySelectorAll("button"));
// console.log(document.querySelectorAll(".item"));
// console.log(document.querySelector("#green"));


let buttonRed = document.querySelector("#red")

buttonRed.addEventListener("click",  () => {
    document.body.style.backgroundColor = "red"
    document.body.style.backgroundImage = "none"
})

let buttonGreen = document.querySelector("#green")

buttonGreen.addEventListener("click",  () => {
    document.body.style.backgroundColor = "#37c7bb"
    document.body.style.backgroundImage = "none"

})


document.querySelector("#img").addEventListener("click",  () => {
    document.body.style.backgroundImage = "url(./8.jpg)"
})



let colors = ["OrangeRed", "SteelBlue", "MistyRose", "Brown", "SeaGreen"];
document.querySelector("#random").addEventListener("click",  () => {
    document.body.style.backgroundImage = "none"
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    
    
})







// console.log(buttonRed);
// let bodyNew = document.querySelector("body")
// bodyNew.style.backgroundColor = "black"


// buttonRed.style.backgroundColor = "red"

// document.body.style.backgroundColor = "black"


// document.body.addEventListener("click", function(e) {
//     // 
//     if(e.target.className == "item") {
//         console.log("кликнули по кнопке")
//     } else {
//         document.body.style.backgroundColor = "white"
//     }
// })


// Задача1. При нажатии на картинку, цвета фона не отрабатывают. Починить!
// Задача2. Создать кнопку <button class="item" id="random">Random</button><button class="item" id="random">Random</button> и
// при нажатии на кнопку Random нужно менять цвет фона body на какой-то из цветов массива
// let colors = ["OrangeRed", "SteelBlue", "MistyRose", "Brown", "SeaGreen"]
