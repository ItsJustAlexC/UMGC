let dayNumberTag = document.querySelector('.day-number');
let monthTag = document.querySelector('.month');
let yearTag = document.querySelector('.year');
let dayNameTag = document.querySelector('.day-name');
let listTag = document.querySelector('.list');
let textAreaTag = document.querySelector('.text-input');
let formTag = document.querySelector('.form');




let months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEPT", "OCT", "NOV", "DEC"];
let days = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];

dayNumberTag.innerText = new Date().getDate();
monthTag.innerText = months[new Date().getMonth()];
yearTag.innerText = new Date().getFullYear();
dayNameTag.innerText = days[new Date().getDay()];


//removes list item by double clicking on check box
listTag.addEventListener('dblclick', event => {
    if(event.target.type == "checkbox"){
        event.target.parentElement.parentElement.remove();
    }
})

//toggles crossed-out visual based on if checkbox is checked or not
listTag.addEventListener('click', event => {
    if(event.target.type == "checkbox"){
        if(event.target.checked){
            event.target.parentElement.previousElementSibling.classList.add('crossed');
        }  else {
            event.target.parentElement.previousElementSibling.classList.remove('crossed');
        }
    }
})


//grabs value from text area and assigns the inner text to the list item template and appends to list div 
formTag.addEventListener('click', event => {
    event.preventDefault();
    if(event.target.type == "submit"){
        let template = document.querySelector('.template');
        let listItem = document.importNode(template.content, true);
        listItem.firstElementChild.firstElementChild.innerText = textAreaTag.value;
        listTag.appendChild(listItem)
        textAreaTag.value = '';
    }
})

//keeps list items saved to list using innerHTML
window.addEventListener('load', event => {
    if(localStorage.getItem('items')){
        listTag.insertAdjacentHTML("beforeend", localStorage.getItem('items'));
    }
})

//constantly saves list items
window.addEventListener('pointermove', event => {
    localStorage.setItem('items', listTag.innerHTML)
})

