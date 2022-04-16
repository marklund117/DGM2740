// main JS script for 2740 module 4
function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open")
}

const x = document.getElementById("burger")

x.onclick = toggleMenu // toggle menu when burger is clicked