/* 
    *LISTA DE ÍCONES DAS TECNOLOGIAS:
        -Javascript: fab fa-js
        -CSS: fab fa-css3-alt
        -HTML: fab fa-html5
        -JQuery: jquery_black
        -Bootstrap: fab fa-bootstrap
        -ReactJs: fab fa-react
        -Angular: fab fa-angular
        -NodeJs: fab fa-node
        -PHP: fab fa-php
*/

// let icons = {
//     js: ['js', 'fab fa-js', '#F7E018'],
//     css: ['css', 'fab fa-css3-alt', '#33A8DA'],
//     html: ['html', 'fab fa-html5', '#EF652A'],
//     jQuery: ['jQuery', 'jquery_black', ''],
//     jQueryGrey: ['jQueryGrey', 'jquery_grey', ''],
//     bootstrap: ['bootstrap', 'fab fa-bootstrap', '#814DCE'],
//     reactJs: ['react', 'fab fa-react', '#61DAFB'],
//     angular :['angular', 'fab fa-angular', '#C4002E'],
//     node: ['nodeJs', 'fab fa-node', '#8BBF3D'],
//     php: ['php', 'fab fa-php', '#687BAB'],
//     git:  ['git', 'fab fa-git', ''],
    
//     github:  ['github', 'fab fa-github', '#000'],
//     link: ['link', 'fas fa-link', '#F98B00'],
//     linkedin: ['linkedin', 'fab fa-linkedin-in', '#F98B00'],
//     whatsapp: ['whatsapp', 'fab fa-whatsapp', '#F98B00'],
//     instagram: ['instagram', 'fab fa-instagram', 'purple'],
// }

const db = firebase.firestore()

export default db.collection('icons').get()