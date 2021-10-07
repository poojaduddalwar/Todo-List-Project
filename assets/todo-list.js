var Button = document.querySelector('.switch-button-circle')
var Label = document.querySelector('.label-button')
var Header = document.getElementsByTagName('header')
var Input1 = document.querySelector('#input-area')
var Div1 = document.querySelector('.add-list')
var OL = document.querySelector('.list-items')
var Div2 = document.querySelector('.container1')
var Div3 = document.querySelector('.container2')
var Body = document.querySelector('body')
var Footer = document.getElementsByTagName('footer')

const clickFun = () => {
    Button.classList.toggle('button-click')
    Label.classList.toggle('.dark')
    // Header.classList('.dark-img')
    Input1.classList('.dark')
    Div1.classList('.dark')
    OL.classList('.dark')
    Div1.classList('.light-dark')
    Div2.classList('.light-dark')

}

Label.addEventListener('click',clickFun)



// const AddList = document.querySelector('.fas')
// const AddSpace = document.querySelector('#input-area')
// const ItemList = document.querySelector('.input-area')
// const OL = document.querySelector('.list-items')


// const InputedValue = (event) => {
//     var inputValue = input.value
//     if(chores.includes(inputValue)){
//         console.log('exits')
//     }
//     else{
//         chores.push()
//     }

// }

// AddList.addEventListener('click',InputedValue)