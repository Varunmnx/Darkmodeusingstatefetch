// console.log("hello")
let darkmode = localStorage.getItem('darkmode'); //gets class from css
//5mb is used
const darkmodetoggel = document.querySelector('#dark-mode-toggle');

const darkmodenabled =() =>{
    document.body.classList.add("darkmode")
    localStorage.setItem("darkmode","enabled")
}

const darkmodediabled=()=>{
    document.body.classList.remove("darkmode")
    // localStorage.removeItem("darkmode")
    localStorage.setItem("darkmode",null)

}
if (darkmode==="enabled"){
    darkmodenabled()
}

darkmodetoggel.addEventListener('click',()=>{
let darkmode = localStorage.getItem('darkmode'); //gets class from css

   if(darkmode!=="enabled"){
         darkmodenabled()
   } else{
      darkmodediabled()
    }
}

);
