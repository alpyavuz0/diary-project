document.addEventListener("click", e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return

    let currentDropdown
    if (isDropdownButton) {
        currentDropdown = e.target.closest('[data-dropdown]')
        currentDropdown.classList.toggle('active')
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove('active')
    })
})

function changeColor () {
    let navbar = document.querySelector('[changeColor]')
    let button = document.getElementsByClassName(".nv4btn")
    let scrollValue = window.scrollY;
    if(scrollValue < 395){
        navbar.classList.remove('changeColor');
       
    } else { 
        navbar.classList.add('changeColor');
 
    }

    if(scrollValue < 395) {
        button.classList.remove('changeColor', 'changeNav');
    } else {
        button.classList.add('changeColor')
    }
}

window.addEventListener('scroll', changeColor)




function changeNav () {
    let navz = document.querySelector('.nav')
    let btn = document.getElementsByClassName(".nv4btn")
    let scrollValue = window.scrollY;
    if(scrollValue < 1) {
        navz.classList.remove('changeNav')
    } else {
        navz.classList.add('changeNav')
    }
}

window.addEventListener('scroll', changeNav)