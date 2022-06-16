import { navbar,footerFunc } from "../components/navbar.js"
document.querySelector("header").innerHTML=navbar()
document.querySelector('footer').innerHTML=footerFunc()

const url='https://mini-server-expedia.herokuapp.com/api/hotels'

let hotelsGrid=async ()=>{
    let res=await fetch(url)
    let data=await res.json()
    append(data)
    console.log(data)

}

hotelsGrid()

let append=(data)=>{
    data.forEach(({el})=>{
        let container=document.getElementById('hotels-grid')
        let div1=document.createElement('div')
        let img=document.createElement('img')
            // img.src=el.uitk-image-media
        let location=document.createElement('p')
            // location.innerText=el.uitk-text
            div1.append(location)
            container.append(div1)    
    })
   
}