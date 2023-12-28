let context = document.getElementById('screen');
let plus = document.getElementById('btn-plus');
let minus = document.getElementById('btn-minus');
let reset = document.getElementById('btn-reset');

let number = 0;

plus.addEventListener('click', () =>{
        number ++;
        context.innerHTML = number;
})

minus.addEventListener('click', () =>{
    number = number - 1
    context.innerHTML = number;
})

reset.addEventListener('click', () =>{
    number = 0;
    context.innerHTML = number;
})