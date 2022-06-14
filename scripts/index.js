document.getElementById('header_div_right_button').addEventListener( 'click',()=>{

event.preventDefault()
let menu=document.querySelector('.dropdown_menu')
if (menu.style.display == "none") {
    menu.style.display = "block"
} else {
    menu.style.display = "none"
}
 

})




