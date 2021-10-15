// dark  mode 
var Button = document.querySelector('.switch-button-circle')
var Label = document.querySelector('.label-button')
var Body = document.querySelector('body')
const filter = 'all'

const clickFun = () => {
    Body.classList.toggle('dark')
}

Label.addEventListener('click', clickFun)

//add items

const AddButton = document.querySelector('.fa-plus')
const Input = document.querySelector('#input-area')
const Div = document.querySelector('.container2')
const itemnumber = document.querySelector('.item-num')
var chores = []

const addfun = () => {
    const chore = Input.value
    const validChore = (chore) => {
        var obj = { name: chore, status: "pending" }
        chores.push(obj)
        const template = `<div class="content-list">
                        <div class="rounded-tick">
                            <input type="checkbox" id="check-1" value="none" name="checkcircle">
                            <label for="checkcircle">
                                <!-- <i class="far fa-check-circle"></i> -->
                            </label>
                        </div>
                        <div class="input">${chore}</div>
                        <button class="fas fa-times cutbutton"></button>
                        <i class="fas fa-grip-lines"></i>
                    </div>  `
        const newitem = document.createElement('div')
        newitem.innerHTML = template
        Div.appendChild(newitem)
        Input.value = ''
        console.log(chores)
    }

    if (chore.length === 0) {
        alert("enter something")
    }
    else if (chores.find(item => item.name == chore)) {
        alert("chore already exists")
        Input.value = ""
    }
    else {
        validChore(chore)
    }
    itemnumber.innerHTML = `${countitem(chores,filter)} items`

    const deletebutton = document.querySelector('.fa-times')
    const Items = document.querySelector('.content-list')

    deletebutton.addEventListener('click',(e)=>{Items.target.remove})
}


AddButton.addEventListener('click', addfun)

//clear button 
const clearbutton = document.querySelector('.clear-item')

const clearlist = () => {
    Div.innerHTML = null
    chores = []
    console.log(chores)
}

clearbutton.addEventListener('click', clearlist)

//count item number
const countitem = (chores,filter) => {
    if(filter === 'all'){
        return chores.length
    }
    else{
        return chores.filter(item => item.status == filter).length
    }
}
