console.log('connected');


let yellowCircle = document.getElementById("yellowButton");

let yellowCircle = document.getElementById("yellowButton")
yellowCircle.addEventListener("click",turnPageYellow)

function turnPageYellow(){
    console.log('turn me yellow');
    let body = document.querySelector('body');
    body.style.backgroundColor="yellow"
}
