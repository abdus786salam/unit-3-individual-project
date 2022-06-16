let navbar = ()=>{
  
    return `<div id="header_div">
    <div id="header_div_right">
       <a href="./index.html"><img id="expedia-logo" src="https://www.expedia.co.in/_dms/header/logo.svg?locale=en_GB&siteid=27&2" alt=""></a> 
       <div id="header_div_right_button">
        <button id="header_div_button"><span>More travel</span> <i class="fa-solid fa-angle-down"></i></button>
        </div>
        <div class="dropdown_menu" >
            <div><i class="fa-solid fa-hotel"></i><a href="#">Stayes</a></div>
           <div><i class="fa-solid fa-plane-departure"></i><a href="#">Flight</a></div>
           <div><i class="fa-solid fa-car-rear"></i><a href="#">Cars</a></div>
           <div><i class="fa-solid fa-bag-shopping"></i><a href="#">Packages</a></div> 
           <div><i class="fa-solid fa-holly-berry"></i><a href="#">Holiday activities</a></div>
           <div><a href="#">Deals</a></div>
           <div><a href="#">Groups & meetings</a></div>
           <div><a href="#">Mobile</a></div> 
        </div> 
    
      
    </div>
    <div id="header_div_left">
        <div><i id="globe" class="fa-solid fa-globe"></i><span><a href="#">English</a></span></div>
        <div>
            <a href="#">Support</a>
        </div>
        <div>
            <a href="#">Trips</a>
        </div>
        <div id="signin">Sign in</div>
            
            <div id="signin-info">
                <div><h3>Members can access discounts and special features</h3></div>
                <div ><a id="signin-button" href="./login.html">Sign in</a></div>
                <div ><a id="account" href="./signup.html">Create a free account</a></div>
                <div><a href="#">List of favourites</a></div>
                <div><a href="#">Expedia Rewards</a></div>
                <hr>
                <div><a href="#">Feedback</a></div>
            </div>
        
    </div>
</div>
<hr>`

}

let footerFunc=()=>{
    return ` <div id="footer-div">
    <div><img src="https://a.travel-assets.com/globalcontrols-service/content/f285fb631b0a976202ef57611c7050e9ef5ca51a/images/EG_Wordmark_blue_RGB.svg" alt=""></div>
    <div>
        <h3>Company</h3>
        <li type="none"><a href="#">About us</a></li>
        <li type="none"><a href="#">Jobs</a></li>
        <li type="none"><a href="#">List your property</a></li>
        <li type="none"><a href="#">Partnerships</a></li>
    </div>
    <div>
        <h3>Explore</h3>
        <li type="none"><a href="#">India travel guide</a></li>
        <li type="none"><a href="#">Hotels in India</a></li>
        <li type="none"><a href="#">Holiday rentals in India</a></li>
        <li type="none"><a href="#">Holiday packages in India</a></li>
        <li type="none"><a href="#"> Domestic flights</a></li>
        <li type="none"><a href="#">Car hire in India</a></li>
        <li type="none"><a href="#">All accommodation types</a></li>
        <li type="none"><a href="#">Travel blog</a></li>
    </div>
    <div>
        <h3>Terms and policies</h3>
        <li type="none"><a href="#">Privacy Statement</a></li>
        <li type="none"><a href="#">Terms of use</a></li>
        <li type="none"><a href="#">Vrbo terms and conditions</a></li>
    </div>
    <div>
        <h3>Help</h3>
        <li type="none"><a href="#">Support</a></li>
        <li type="none"><a href="#">Change or cancel your bookinge</a></li>
        <li type="none"><a href="#">Refund process and timelines</a></li>
        <li type="none"><a href="#">Book a flight using an airline credit</a></li>
        <li type="none"><a href="#">International travel documents</a></li>
    </div>
</div>
<hr>
<ul id="security-img">
    <img src="https://images.trvl-media.com/media/content/expind/images/sg/secure.png" alt="">
</ul>
<div id="copy-right">© 2022 Expedia, Inc., an Expedia Group company /
     Expedia Asia Holdings Mauritius / BEX Travel Asia Pte. Ltd. 
     All rights reserved. Expedia and the Airplane Logo are trademarks or registered 
     trademarks of Expedia, Inc.</div>`
}

export {navbar,footerFunc}