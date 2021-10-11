// dark  mode 
var Button = document.querySelector('.switch-button-circle')
var Label = document.querySelector('.label-button')
var Body = document.querySelector('body')

const clickFun = () => {
    Body.classList.toggle('dark')
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