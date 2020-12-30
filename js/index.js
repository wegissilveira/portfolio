const openSlider = id => {
    const modal = document.getElementById('products_slider-'+id)

    modal.classList.contains('modal_closed') ? 
        modal.className = 'projects_slider_container modal_open' :
        modal.className = 'projects_slider_container modal_closed'
}