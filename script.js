
"user strict";

const addForm = document.querySelector('.add')
const listUL = document.querySelector('.list-ul')


const injectHTML = function(item) {
    const html = `
    <li class="list-li display-flex">
        <span>${item}</span>
        <ion-icon name="trash-bin-outline" class="trashcan"></ion-icon>
    </li>
    `
    listUL.insertAdjacentHTML('beforeend', html);
}

// add new items
addForm.addEventListener('submit', e => {
    e.preventDefault();
    const newTodo = addForm.add.value.trim()
    if (!newTodo) return
    if (newTodo.length>30) {
        addForm.add.value = 'max 30 characters!'
        return
    }
    console.log(newTodo);
    injectHTML(newTodo)
    addForm.add.value = '' // or use addForm.reset()
})

// delete items
listUL.addEventListener('click', e => {
    if(e.target.tagName === 'ION-ICON') e.target.parentElement.remove();  
})


// search bar
const searchForm = document.querySelector('.search')

const matchSearch = function(userinput) {
    let listArray =  new Array(...listUL.children)

    const filteredArray = listArray.filter(each => {
        return !each.textContent.toLowerCase().includes(userinput)
    }).forEach(each => {
        each.classList.remove('display-flex')
        each.classList.add('display-none')
    })

    const filteredArray2 = listArray.filter(each => {
        return each.textContent.toLowerCase().includes(userinput)
    }).forEach(each => {
        each.classList.add('display-flex')
        each.classList.remove('display-none')
    })
    return filteredArray
}

searchForm.addEventListener('keyup', e=>{
    e.preventDefault()
    const userinput = searchForm.search.value.trim()
     matchSearch(userinput.toLowerCase())
})