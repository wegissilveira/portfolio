const nav_links_El = document.getElementById(window.innerWidth > 414 ? 'nav' : 'nav_mobile').children
const nav_links_arr = Array.from(nav_links_El)

window.addEventListener('load', () => {
    let anchor_ref = 0 
    nav_links_arr.forEach(link => {
        const slide_index = link.href.indexOf('#')
        const anchor = link.href.slice(slide_index)

        if (window.location.href.match(anchor) !== null) {
            link.classList.add('active')
            anchor_ref--
        }

        anchor_ref++
    })

    if (anchor_ref === 3) {
        nav_links_arr[0].classList.add('active')
    }
})

const highlight_navigation = () => {
    const current_link_El = event.target

    nav_links_arr.forEach(link => {
        if (link.classList.contains('active')) {
            link.classList.remove('active')
        }
    })
    
    current_link_El.classList.add('active')

    if (current_link_El.parentNode.id === 'nav_mobile') {
        setTimeout(() => {
            toggleMobileNavigation()
        }, 700)
    }
}

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

const toggleSlider = id => {
    const modal_El = document.getElementById('products_modal-'+id)
    const body = document.getElementsByTagName('BODY')[0]

    if (modal_El.classList.contains('modal_closed')) {
        modal_El.className = 'projects_modal_container modal_open'
        body.style.overflow = 'hidden'
    } else {
        modal_El.className = 'projects_modal_container modal_closed'
        body.style.overflow = 'visible'
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