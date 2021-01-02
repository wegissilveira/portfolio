$(function(){
    $.getScript('../../data/projetosData.js', function() {

        console.log(returnData())

        $.each(returnData(), (index, value) => {
            
            const card_block_El = $('<div></div>')
            card_block_El.appendTo('.projects_container')

            /* CARD */
            const card_container_El = $('<div></div>')
            card_container_El.addClass('projects_card_container')
            card_container_El.appendTo(card_block_El)

            const card_subContainer_El = $('<div></div>')
            card_subContainer_El.addClass('projects_card_subContainer')
            card_subContainer_El.appendTo(card_container_El)

            const card_title_El = $(`<div><p>${value.nome}</p></div>`)
            card_title_El.appendTo(card_container_El)

            const card_img_div_El = $('<div></div>')
            const card_img_El = $('<img>')
            card_img_El.attr('src', value.cover)
            card_img_El.appendTo(card_img_div_El)
            card_img_div_El.appendTo(card_subContainer_El)

            const card_verse_container_El = $('<div></div>')
            card_verse_container_El.addClass('projects_card_verse')
            card_verse_container_El.appendTo(card_subContainer_El)

            const card_verse_subContainer_El = $('<div></div>')
            card_verse_subContainer_El.appendTo(card_verse_container_El)

            const project_technologies_El = $('<div></div>')
            project_technologies_El.appendTo(card_verse_subContainer_El)

            $.each(value.tecnologias, (idx, val) => {
                const technology_icon_El = $('<i></i>')
                technology_icon_El.addClass(val[1])
                technology_icon_El.css('color', val[2])
                technology_icon_El.appendTo(project_technologies_El)
            })

            const verse_separator_El = $('<p></p>')
            verse_separator_El.appendTo(card_verse_subContainer_El)

            const project_links_container_El = $('<div></div>')
            project_links_container_El.appendTo(card_verse_subContainer_El)

            const open_modal_icon_El = $('<i></i>')
            open_modal_icon_El.addClass('fas fa-eye')
            open_modal_icon_El.css('color', '#019AFF')
            open_modal_icon_El.css('margin', '0')
            open_modal_icon_El.on('click', () => toggleSlider(index + 1))
            open_modal_icon_El.appendTo(project_links_container_El)

            $.each(value.links, (idx, val) => {
                const project_link_El = $('<a></a>')
                project_link_El.attr('href', val[1])
                project_link_El.appendTo(project_links_container_El)

                const link_icon_El = $('<i></i>')
                link_icon_El.addClass(val[2])
                link_icon_El.css('color', val[3])
                link_icon_El.appendTo(project_link_El)
            })
            

            /* MODAL */
            const modal_container_El = $('<div></div>')
            modal_container_El.addClass('projects_modal_container modal_open')
            modal_container_El.attr('id', `products_modal-${index+1}`)
            modal_container_El.appendTo(card_block_El)

            const modal_body_El = $('<div></div>')
            modal_body_El.addClass('modal_body')
            modal_body_El.appendTo(modal_container_El)

        })




    }).fail(function(jqxhr, settings, exceptions) {
        console.log('error:')
        console.log(exception)
    })
})