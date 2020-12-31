const toggleSlider = id => {
    const modal = document.getElementById('products_modal-'+id)

    modal.classList.contains('modal_closed') ? 
        modal.className = 'projects_modal_container modal_open' :
        modal.className = 'projects_modal_container modal_closed'
}