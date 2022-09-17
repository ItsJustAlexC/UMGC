//DOM Manipulation Exercises

//1
let test = document.getElementById('container');

//2
let test2 = document.querySelector('#container');

//3
let test3 = document.getElementsByClassName('second');

//4
let test4 = document.querySelector('ol .third');

//5
let test5 = document.querySelector('#container').innerText = "Hello";

//6
let div = document.querySelector('.footer');
div.classList.add('main');

//7
div.classList.remove('main');

//8
let li = document.createElement('li');

//9
li.innerText = 'four';

//10
let test6 = document.querySelector('ul')
test6.append(li);

//11
let test7 = document.querySelectorAll('ol li');
for(let li of test7){
    li.style.backgroundColor = 'green';
}

//12
div.remove();