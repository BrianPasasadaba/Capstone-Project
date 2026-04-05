const sidebar = document.getElementById('sidebar')
const hamMenu = document.querySelector('.ham-menu');

function toggleSidebar(){
    hamMenu.classList.toggle('active')
    sidebar.classList.toggle('show')
}