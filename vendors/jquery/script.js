import projectsData from '../../data/projectsData.js'
import aboutData from '../../data/aboutData.js'
import contactsData from '../../data/contactsData.js'

$(function(){
    const projects_container = $('.projects_container')
    let counterImg = 0

    $.each(projectsData, (index, value) => {
        const card_block_El = $('<div></div>')

        card_block_El.appendTo(projects_container)

        /* CARD */
        const card_container_El = $('<div></div>')
        card_container_El.addClass('projects_card_container')
        card_container_El.appendTo(card_block_El)

        const card_subContainer_El = $('<div></div>')
        card_subContainer_El.addClass('projects_card_subContainer')
        card_subContainer_El.appendTo(card_container_El)

        const card_title_El = $(`<div><p>${value.projectName}</p></div>`)
        card_title_El.appendTo(card_container_El)

        let card_img_El = new Image
        card_img_El.addEventListener("load",() => {
            counterImg++
            if (counterImg >= projectsData.length) {
                $('.preloader').remove()
                projects_container.fadeIn(700)
                projects_container.css('display', 'grid')
            } 
        })

        card_img_El.src = value.coverImg;
        const card_img_div_El = 
                $(`<div class="card_img_div_El">
                    <img class="card_img_El" src="${card_img_El.src}"/>
                </div>`);
        
        card_img_div_El.appendTo(card_subContainer_El)

        const card_back_container_El = $('<div></div>')
        card_back_container_El.addClass('projects_cardBack_container')
        card_back_container_El.appendTo(card_subContainer_El)

        const card_back_subContainer_El = $('<div></div>')
        card_back_subContainer_El.addClass('projects_cardBack_subContainer')
        card_back_subContainer_El.appendTo(card_back_container_El)

        const project_technologies_El = $('<div></div>')
        project_technologies_El.addClass('projects_technologies')
        project_technologies_El.appendTo(card_back_subContainer_El)
        
        $.each(value.projectTechs, (idx, val) => {
            console.log(val)
            const technology_icon_El = $('<i></i>')
            technology_icon_El.addClass(val[0][1])
            technology_icon_El.addClass('colored')
            technology_icon_El.appendTo(project_technologies_El)
        })

        const back_separator_El = $('<p></p>')
        back_separator_El.appendTo(card_back_subContainer_El)

        const project_links_container_El = $('<div></div>')
        project_links_container_El.addClass('projects_links')
        project_links_container_El.appendTo(card_back_subContainer_El)

        const open_modal_icon_El = $('<i></i>')
        open_modal_icon_El.addClass('fas fa-eye toggle_modal')
        open_modal_icon_El.css('color', '#019AFF')
        open_modal_icon_El.css('margin', '0')
        open_modal_icon_El.on('click', e => toggleSlider(e, index + 1))
        open_modal_icon_El.appendTo(project_links_container_El)
        
        $.each(value.projectLinks, (idx, val) => {
            const project_link_El = $('<a target="_blank" rel="noopener noreferrer"></a>')
            project_link_El.attr('href', val[0])
            project_link_El.appendTo(project_links_container_El)

            const link_icon_El = $('<i></i>')
            link_icon_El.addClass(val[1])
            link_icon_El.css('color', val[2])
            link_icon_El.appendTo(project_link_El)
        })

        /* MODAL */
        const modal_container_El = $('<div></div>')
        modal_container_El.addClass('projects_modal_container modal_closed toggle_modal')
        modal_container_El.attr('id', `products_modal-${index+1}`)
        modal_container_El.on('click', e => toggleSlider(e, index + 1))
        modal_container_El.appendTo(card_block_El)

        const modal_body_El = $('<div></div>')
        modal_body_El.addClass('modal_body')
        modal_body_El.appendTo(modal_container_El)

        const toggle_out_slider_icon_El = $('<i></i>')
        toggle_out_slider_icon_El.addClass('fas fa-sign-out-alt modal_exit toggle_modal')
        toggle_out_slider_icon_El.on('click', e => toggleSlider(e, index+1))
        toggle_out_slider_icon_El.appendTo(modal_body_El)

        const modal_body_subContainer_El = $('<div></div>')
        modal_body_subContainer_El.addClass('modal_body_subContainer')
        modal_body_subContainer_El.appendTo(modal_body_El)

        const slider_container_El = $('<div></div>')
        slider_container_El.addClass('slider_container')
        slider_container_El.appendTo(modal_body_subContainer_El)

        const slider_title_El = $(`<h1>${value.projectName}</h1>`)
        slider_title_El.appendTo(slider_container_El)

        const main_img_div_El = $('<div></div>')
        main_img_div_El.appendTo(slider_container_El)

        const main_img_El = $('<img>')
        main_img_El.attr('src', value.sliderImgs[0])
        main_img_El.attr('id', `main_img-${index}`)
        main_img_El.appendTo(main_img_div_El)

        const slider_thumbs_div_El = $('<div></div>')
        slider_thumbs_div_El.addClass('slider_thumbs_container')
        slider_thumbs_div_El.appendTo(slider_container_El)
        
        $.each(value.sliderImgs, (idx, val) => {
            const slider_thumb_El = $('<img>')
            slider_thumb_El.addClass(idx === 0 ? 'active_thumb' : null)
            slider_thumb_El.attr('src', val)
            slider_thumb_El.on('mouseover', () => changeMainImage(val, index, slider_thumb_El))
            slider_thumb_El.appendTo(slider_thumbs_div_El)
        })

        const modal_info_container_El = $('<div></div>')
        modal_info_container_El.addClass('modal_info_container')
        modal_info_container_El.appendTo(modal_body_subContainer_El)

        const modal_technologies_container_El = $('<div></div>')
        modal_technologies_container_El.addClass('modal_technologies')
        modal_technologies_container_El.appendTo(modal_info_container_El)

        const modal_technologies_title_El = $('<h1>Tecnologias utilizadas</h1>')
        modal_technologies_title_El.appendTo(modal_technologies_container_El)

        const technologies_icons_container_El = $('<div></div>')
        technologies_icons_container_El.appendTo(modal_technologies_container_El)

        $.each(value.projectTechs, (idx, val) => {
            const technology_icon_El = $('<i></i>')
            technology_icon_El.addClass(val[0][1])
            technology_icon_El.addClass('colored')
            technology_icon_El.appendTo(technologies_icons_container_El)
        })

        const modal_links_container_El = $('<div></div>')
        modal_links_container_El.addClass('modal_links')
        modal_links_container_El.appendTo(modal_info_container_El)

        const modal_links_title_El = $('<h1>Links</h1>')
        modal_links_title_El.appendTo(modal_links_container_El)

        const links_icons_container_El = $('<div></div>')
        links_icons_container_El.appendTo(modal_links_container_El)

        $.each(value.projectLinks, (idx, val) => {
            const project_link_El = $('<a target="_blank" rel="noopener noreferrer"></a>')
            project_link_El.attr('href', val[0])
            project_link_El.appendTo(links_icons_container_El)

            const link_icon_El = $('<i></i>')
            link_icon_El.addClass(val[1])
            link_icon_El.css('color', val[2])
            link_icon_El.appendTo(project_link_El)
        })

        const modal_info_description_El = $(`<p>${value.projectDescription}</p>`)
        modal_info_description_El.addClass('modal_description')
        modal_info_description_El.appendTo(modal_body_subContainer_El) 
    })
    
    $.each(aboutData, (index, value) => {
        if (value.aboutText) {
            const about_text_El = $(`<p>${value.aboutText}</p>`)
            about_text_El.appendTo('.about_text')
        }

        if (value.skills) {
            $.each(value.skills, (i, val) => {
                
                const skillContainer_El = $('<div></div>')
                const skillIcon_El = $('<i></i>')
                skillIcon_El.addClass(val[0][1])
                skillIcon_El.appendTo(skillContainer_El)

                skillContainer_El.appendTo('.about_skills')
            })
        }
    })
    
    $.each(contactsData, (index, value) => {
        const contactLink = $('<a target="_blank" rel="noopener noreferrer"></a>')
        contactLink.attr('href', value.link)

        const contactIcon = $('<i></i>')
        contactIcon.addClass(value.icon)
        contactIcon.appendTo(contactLink)

        const contactTitle = $(`<p>${value.title}</p>`)
        contactTitle.appendTo(contactLink)

        contactLink.appendTo('.contact_links_subContainer')
    })
})