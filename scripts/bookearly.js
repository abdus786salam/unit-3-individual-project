import { navbar,footerFunc } from "../components/navbar.js"
document.querySelector("header").innerHTML=navbar()
document.querySelector('footer').innerHTML=footerFunc()

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

const url='https://mini-server-expedia.herokuapp.com/api/hotels'

let hotelsGrid=async ()=>{
    let res=await fetch(url)
    let data=await res.json()
    append(data)
    

}

hotelsGrid()

let append=(data)=>{
    console.log(data)
    data.forEach((el)=>{
        let container=document.getElementById('hotels-grid')
        let div1=document.createElement('div')
        let img=document.createElement('img')
            img.src=el.image
        let heading=document.createElement('h3')
            heading.innerText=el.heading
        let div2=document.createElement('div')
            div2.setAttribute('id','div2')        
        let location=document.createElement('p')
            location.innerText=el.location
        let div3=document.createElement('div')
            div3.setAttribute('id','div3')    
        let strikethroughPrice=document.createElement('p')
            strikethroughPrice.setAttribute("id","s-price")
            strikethroughPrice.innerText=el.strikethroughPrice 
        let price=document.createElement("h2")
            price.innerText=el.price
        let discount=document.createElement("p")
            discount.innerText=el.discount    
            div2.append(location,discount)
            div3.append(strikethroughPrice,price)       
            div1.append(img,heading,div2,div3)
            container.append(div1)    
    })
   
}