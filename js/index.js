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