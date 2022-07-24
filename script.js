let arr = [
    {
        id: 1,
        name: 'Bruce ',
        age: 1997

    },
    {
        id: 2,
        name: 'Bruce ',
        age: 2000
    },
    {
        id: 3,
        name: 'Bruce ',
        age: 2001
    },
    {
        id: 4,
        name: 'Bruce ',
        age: 2005
    },

]
let primary = document.querySelector('.btn-primary')
let excel = document.querySelector('.excel')
let form = document.forms.add
let modal = document.querySelector('.login-box')
let modalBg = document.querySelector('.modal-bg')

let changeInputName = document.querySelector('.change-input__name')
let changeInputAge = document.querySelector('.change-input__age')






form.onsubmit = (event) => {
    event.preventDefault()

    let user = {
        id: Math.random()
    }

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        user[key] = value
    })

    user.age = new Date().getFullYear() - user.age

    arr.push(user)
    reload(arr)
}

function reload(params) {
    excel.innerHTML = ""

    for (let item of params) {
        //Создание
        let box = document.createElement('div')
        let id = document.createElement('p')
        let name = document.createElement('p')
        let age = document.createElement('p')
        let edit_btn = document.createElement('button')
        let delete_btn = document.createElement('button')

        // Стилизация
        box.classList.add('box')
        id.innerHTML = params.indexOf(item) + 1
        name.innerHTML = item.name
        age.innerHTML = item.age
        edit_btn.innerHTML = 'edit'
        delete_btn.innerHTML = 'X'

        // Аппенд
        excel.append(box)
        box.append(id, name, age, edit_btn, delete_btn)

        delete_btn.onclick = () => {
            // arr = arr.filter(elem => elem.id !== item.id)
            let idx = arr.indexOf(item)

            arr.splice(idx, 1)

            reload(arr)
        }

        modalBg.onclick = () => {
            modal.style.display = "none"
            setTimeout(() => {
                modalBg.style.display = "none"
                modalBg.style.opacity = "0"
            }, 300);

        }

        edit_btn.onclick = () => {
            modal.style.top = "50%"
            modal.style.left = "50%"
            modal.style.display = "block"
            modalBg.style.display = "block"
            setTimeout(() => {
                modalBg.style.opacity = "1"
            }, 300);
            changeInputName.value = item.name
            changeInputAge.value = new Date().getFullYear() - item.age
            primary.onclick = () => {
                modal.style.display = "none"
                modalBg.style.display = "none"
                console.log(item)
                item.name = changeInputName.value
                item.age = new Date().getFullYear() - changeInputAge.value
                reload(arr)
            }

        }

    }
}


reload(arr)