document.getElementById('header_div_right_button').addEventListener( 'click',()=>{

event.preventDefault()
let menu=document.querySelector('.dropdown_menu')
if (menu.style.display == "block") {
    menu.style.display = "none"
} else {
    menu.style.display = "block"
}
})

document.getElementById('signin').addEventListener( 'click',()=>{

    event.preventDefault()
    let menu=document.querySelector('#signin-info')
    if (menu.style.display == "block") {
        menu.style.display = "none"
    } else {
        menu.style.display = "block"
    }
    })
    document.getElementById('div-date-input-location').addEventListener( 'click',()=>{

        event.preventDefault()
        let menu=document.querySelector('#loation-list')
        if (menu.style.display == "block") {
            menu.style.display = "none"
        } else {
            menu.style.display = "block"
        }
        })
  




