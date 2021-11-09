// dark  mode 
var Button = document.querySelector('.switch-button-circle')
var Label = document.querySelector('.label-button')
var Body = document.querySelector('body')
const filter = 'all'

const clickFun = () => {
    Body.classList.toggle('dark')
}

Label.addEventListener('click', clickFun)

// //add items

const AddButton = document.querySelector('.fa-plus')
const Input = document.querySelector('#input-area')
const Div = document.querySelector('.container2')
const itemnumber = document.querySelector('.item-num')
var chores = []

// const addfun = () => {
//     const chore = Input.value
//     const validChore = (chore) => {
//         var obj = { name: chore, status: "pending" }
//         chores.push(obj)
//         const template = `
//                         <div class="rounded-tick">
//                             <input type="checkbox" id="check-1" value="none" name="checkcircle">
//                             <label for="check-1">
//                                 <!-- <i class="far fa-check-circle"></i> -->
//                             </label>
//                             <div class="input">${chore}</div>
//                         </div> `
//         // const newitem = document.createElement('div')
//         const cgbuttons = document.createElement('div')
//         const cancelb = document.createElement('button')
//         const gripi = document.createElement('i')
//         const contentdiv = document.createElement('div')

//         cgbuttons.setAttribute('class','CancelGripButtons')
//         cancelb.setAttribute('class','fas fa-times cutbutton')
//         gripi.setAttribute('class','fas fa-grip-lines')
//         contentdiv.setAttribute('class','content-list')

//         contentdiv.innerHTML = template

//         cgbuttons.append(cancelb,gripi)
//         contentdiv.appendChild(cgbuttons)
//         // contentdiv.appendChild(newitem,cgbuttons)
//         Div.appendChild(contentdiv)
//         Input.value = ''
//         console.log(chores)
        
//         // const divinput = document.querySelector('.input')
//         cancelb.addEventListener('click',(e)=>{deletetask(contentdiv.remove(),e.target.innerHTML)})
//     }

//     if (chore.length === 0) {
//         alert("enter something")
//     }
//     else if (chores.find(item => item.name == chore)) {
//         alert("chore already exists")
//         Input.value = ""
//     }
//     else {
//         validChore(chore)
//     }
//     itemnumber.innerHTML = `${countitem(chores,filter)} items`
// }
// AddButton.addEventListener('click', addfun)

// //clear button 
// const clearbutton = document.querySelector('.clear-item')
// const clearlist = () => {
//     Div.innerHTML = null
//     chores = []
//     console.log(chores)
// }
// clearbutton.addEventListener('click', clearlist)

//count item number
const countitem = (chores,filter) => {
    if(filter === 'all'){
        return chores.length
    }
    else{
        return chores.filter(item => item.status == filter).length
    }
}  

// //delete items
// function deletetask (a,value) {
//     // console.log(value)
//     // e.target.remove()
//     console.log(value)
//     const index = chores.indexOf(value)
//     chores.splice(index,1)
//     console.log(chores)
// }

//event listners

AddButton.addEventListener('click',()=>{
    addchore(Input)
})



const renderlist = (chores,filter = 'all')=>{
    itemnumber.innerHTML = `${countitem(chores,filter)} items`

    chores.length > 0 && chores.forEach((chore , iteration) => {
        if (filter === 'all'){
            var node = document.createElement('div')
            node.setAttribute('class','content-list')
            node.setAttribute('id',`item- ${iteration+1}`)
            node.innerHTML = createListItem(chore,iteration+1)
            Div.appendChild(node)
        }
    });
}

const createListItem = (chore,id)=>{
    return`
    <div class="rounded-tick">
            <input type="checkbox" ${chore.status='complete'? 'checked':''} id="check-${id}" value="none" name="check-${id}">
            <label for="check-${id}">
            </label>
        </div>
        <div class="input ${chore.status === 'complete'? 'strike':''}">${chore.name}</div>
        <button class="fas fa-times cutbutton cross-${id}"></button>
        <i class="fas fa-grip-lines"></i> `
}

const addchore = (input)=>{
    const {value: chore} = input
    const handleValidChore = (chore)=>{
        chores.push({name: chore, status:"pending"})
        Input.value = ""
        renderlist(chores,filter)
    }
    // if(chores.length === 0){
    //     alert('Enter Something')
    // }
    // else if(chores.find(item=>item.name === chore)){
    //     alert('Chore already exixts')
    // }
    // else {
    //     handleValidChore(chore)
    // }
    chore.length === 0 ? alert("Enter something") : chores.find(item => item.name == chore) ? alert("Chore already exists") : handleValidChore(chore)
    itemnumber.innerHTML = `${countitem(chores,filter)} items`
}
