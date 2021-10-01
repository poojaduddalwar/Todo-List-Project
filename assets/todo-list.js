var Button = document.getElementsByClassName('switch-button-circle')
var Label = document.getElementById('label-button')
const clickFun = (event) => {
    Button.classList.toggle('button-click')
}

Label.addEventListner('click',clickFun)