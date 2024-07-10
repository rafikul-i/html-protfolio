
const menuIcon = document.getElementById('menu-icon')
const navBar = document.getElementById('navbar')

menuIcon.addEventListener('click',function(){
    console.log('cl')
   if(navBar.className ==='hidden'){
    navBar.classList.remove('hidden')
   }
   else{
    navBar.classList.add('hidden')
   }
})