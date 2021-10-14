// dark  mode 
var Button = document.querySelector('.switch-button-circle')
var Label = document.querySelector('.label-button')
var Body = document.querySelector('body')

const clickFun = () => {
    Body.classList.toggle('dark')
}

Label.addEventListener('click', clickFun)

//add items

const AddButton = document.querySelector('.fa-plus')
const Input = document.querySelector('#input-area')
const Div = document.querySelector('.container2')
// const Cutitem = document.getElementsByClassName('.cutbutton')
var arr = []

const addfun = () => {
    const inputvalue = Input.value
    if (arr.includes(inputvalue)) {
        alert('already exixts')
    }
    else {
        arr.push(inputvalue)
        const template = `<div class="content-list">
        <div class="rounded-tick">
            <input type="checkbox" id="check-1" value="none" name="checkcircle">
            <label for="checkcircle">
                <!-- <i class="far fa-check-circle"></i> -->
            </label>
        </div>
        <div class="input">${inputvalue}</div>
        <button class="fas fa-times cutbutton"></button>
        <i class="fas fa-grip-lines"></i>
    </div>  `
        const newitem = document.createElement('div')
        newitem.innerHTML = template
        Div.appendChild(newitem)
        Input.value = ''

        // console.log(arr)

        const Cutbutton = document.querySelector('.cutbutton')
        const Item = document.querySelector('.content-list')

        // Cutbutton.addEventListener('click',(e)=>{
        //     // const ynvalue = window.prompt(`are you sure you want to delete this item :Y/N`)
        //     // if(ynvalue === 'Y'){
        //         // console.log( e.target.remove)
        //         // e.target.remove
        //         // Div.removeChild(e.target.newitem)
        //         let deleteItem = e.target.Div.removeChild(newitem)
        //         e.target.deleteItem

        //         // for (let i = 0; i < array.length; i++) {
        //         //     if(arr[i]===)
                    
        //         // }
        //     }
        // )
        var deleteItem = (value)=>{
            const arr1 = arr.indexOf(value)
            arr.splice(arr1,1)
            Item.remove()
            console.log(arr)
        }

        Cutbutton.addEventListener('click',(e)=>{deleteItem(e.target.innerHTML)})
    }
    
}


AddButton.addEventListener('click', addfun)
//delete item

//clear button 
const clearbutton = document.querySelector('.clear-item')

const clearlist = ()=>{
    Div.innerHTML = null
    arr = []
}

clearbutton.addEventListener('click',clearlist)


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