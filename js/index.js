const toggleSlider = id => {
    const modal_El = document.getElementById('products_modal-'+id)

    modal_El.classList.contains('modal_closed') ? 
        modal_El.className = 'projects_modal_container modal_open' :
        modal_El.className = 'projects_modal_container modal_closed'
}

const changeMainImage = (imgSource, index, el) => {
    
    const mainImg_El = document.getElementById(`main_img-${index}`)
    mainImg_El.src = imgSource

    const thumbs_arr = Array.from(el[0].parentNode.children)
    thumbs_arr.forEach(item => {
        if (item.className === 'active_thumb') {
            // item.style.border = ''
            // console.log(item)
            item.classList.remove('active_thumb')
        }
    })

    // el[0].style.border = '2px #ccc solid'
    el[0].classList.add('active_thumb')

    // console.log(thumbs_arr)
}