const nav_links_El = document.getElementById(window.innerWidth > 768 ? 'nav' : 'nav_mobile')
const nav_links_arr = Array.from(nav_links_El.children)

window.addEventListener('load', () => {
    highlight_navigation()
})

const sections = document.querySelectorAll('section')

window.addEventListener('scroll', () => {
    highlight_navigation()
})

const highlight_navigation = () => {
    let current = ''
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id')
        }
    })

    nav_links_arr.forEach(item => {
        item.classList.remove('active')
        if (current === '') {
            current = 'projects'
        }

        if (item.hash.match(current)) {
            item.classList.add('active')
        }
    })        
}

window.addEventListener('hashchange', () => {
    setTimeout(() => {
        toggleMobileNavigation()
    }, 700)
})

const toggleMobileNavigation = () => {
    const mobileNavigation = document.getElementsByClassName('navigation_mobile')[0]
    const navStyle = getComputedStyle(mobileNavigation).transform
    const navTranslateValue = new WebKitCSSMatrix(navStyle).m42
    
    if (navTranslateValue < 0) {
        mobileNavigation.style.transform = 'translateY(0)'
    } else {
        mobileNavigation.style.transform = 'translateY(-100%)'
    }
}

const toggleSlider = (e, id) => {
    e.stopPropagation()

    if (e.target.className.match(`toggle_modal`)) {
        const modal_El = document.getElementById('products_modal-'+id)
        const body = document.getElementsByTagName('BODY')[0]

        if (modal_El.classList.contains('modal_closed')) {
            modal_El.className = 'projects_modal_container modal_open toggle_modal'
            body.style.overflow = 'hidden'
        } else {
            modal_El.className = 'projects_modal_container modal_closed toggle_modal'
            body.style.overflow = 'visible'
        }
    }
}

const changeMainImage = (imgSource, index, el) => {
    const mainImg_El = document.getElementById(`main_img-${index}`)
    mainImg_El.src = imgSource

    const thumbs_arr = Array.from(el[0].parentNode.children)
    thumbs_arr.forEach(item => {
        if (item.className === 'active_thumb') {
            item.classList.remove('active_thumb')
        }
    })

    el[0].classList.add('active_thumb')
}