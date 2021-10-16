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
        const template = `
                        <div class="rounded-tick">
                            <input type="checkbox" id="check-1" value="none" name="checkcircle">
                            <label for="check-1">
                                <!-- <i class="far fa-check-circle"></i> -->
                            </label>
                            <div class="input">${chore}</div>
                        </div> `
        // const newitem = document.createElement('div')
        const cgbuttons = document.createElement('div')
        const cancelb = document.createElement('button')
        const gripi = document.createElement('i')
        const contentdiv = document.createElement('div')

        cgbuttons.setAttribute('class','CancelGripButtons')
        cancelb.setAttribute('class','fas fa-times cutbutton')
        gripi.setAttribute('class','fas fa-grip-lines')
        contentdiv.setAttribute('class','content-list')

        contentdiv.innerHTML = template

        cgbuttons.append(cancelb,gripi)
        contentdiv.appendChild(cgbuttons)
        // contentdiv.appendChild(newitem,cgbuttons)
        Div.appendChild(contentdiv)
        Input.value = ''
        console.log(chores)
        
        cancelb.addEventListener('click',()=>{deletetask(contentdiv.remove())})
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

//delete items
const deletetask = (value)=> {
    console.log(value)
    const index = chores.indexOf(value)
    chores.splice(index,1)
    console.log(chores)
}
