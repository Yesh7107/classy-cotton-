AOS.init({once:true,duration:900})

const menuBtn=document.querySelector(".menu-btn")
const menu=document.querySelector(".menu")

menuBtn.onclick=()=>menu.classList.toggle("active")

window.addEventListener("scroll",()=>{
document.querySelector(".nav").style.background=
window.scrollY>60?"rgba(0,0,0,.75)":"rgba(0,0,0,.45)"
})
