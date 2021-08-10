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

const js = ['js', 'fab fa-js', '#F7E018']
const css = ['css', 'fab fa-css3-alt', '#33A8DA']
const html = ['html', 'fab fa-html5', '#EF652A']
const jQuery = ['jquery', 'jquery_black', '']
const bootstrap = ['bootstrap', 'fab fa-bootstrap', '#814DCE']
const reactJs = ['react', 'fab fa-react', '#61DAFB']
const angular = ['angular', 'fab fa-angular', '#C4002E']
const node = ['nodeJs', 'fab fa-node', '#8BBF3D']
const php = ['php', 'fab fa-php', '#687BAB']

const webpage = ['site', '#', 'fas fa-link', '#F98B00']
const github =  ['github', '#', 'fab fa-github', '#000']


let projetosData

function returnData() {
    projetosData = [
        {  
            nome: 'Site 1',
            tecnologias: [js, css, angular, node, php],
            links: [webpage, github],
            cover: '../img/Site-1/Frente.png',
            imgs: [
                '../img/Site-1/Slider/img-1.png',
                '../img/Site-1/Slider/img-2.png',
                '../img/Site-1/Slider/img-3.png',
                '../img/Site-1/Slider/img-4.png',
                '../img/Site-1/Slider/img-5.png'
            ]
        },
        {  
            nome: 'Site 2',
            tecnologias: [js, html, bootstrap, css],
            links: [webpage, github],
            cover: '../img/Site-2/Frente.png',
            imgs: [
                '../img/Site-1/Slider/img-1.png',
                '../img/Site-1/Slider/img-2.png',
                '../img/Site-1/Slider/img-3.png',
                '../img/Site-1/Slider/img-4.png',
                '../img/Site-1/Slider/img-5.png'
            ]
        },
        {  
            nome: 'Site 3',
            tecnologias: [js, reactJs, css, bootstrap],
            links: [webpage, github],
            cover: '../img/Site-1/Frente.png',
            imgs: [
                '../img/Site-1/Slider/img-1.png',
                '../img/Site-1/Slider/img-2.png',
                '../img/Site-1/Slider/img-3.png',
                '../img/Site-1/Slider/img-4.png',
                '../img/Site-1/Slider/img-5.png'
            ]
        },
        {  
            nome: 'Site 4',
            tecnologias: [js, html, css, bootstrap],
            links: [webpage, github],
            cover: '../img/Site-1/Frente.png',
            imgs: [
                '../img/Site-1/Slider/img-1.png',
                '../img/Site-1/Slider/img-2.png',
                '../img/Site-1/Slider/img-3.png',
                '../img/Site-1/Slider/img-4.png',
                '../img/Site-1/Slider/img-5.png'
            ]
        },
        {  
            nome: 'Site 5',
            tecnologias: [js, html, bootstrap, css, php],
            links: [webpage, github],
            cover: '../img/Site-2/Frente.png',
            imgs: [
                '../img/Site-1/Slider/img-1.png',
                '../img/Site-1/Slider/img-2.png',
                '../img/Site-1/Slider/img-3.png',
                '../img/Site-1/Slider/img-4.png',
                '../img/Site-1/Slider/img-5.png'
            ]
        },
        {  
            nome: 'Site 5',
            tecnologias: [js, html, bootstrap, css],
            links: [webpage, github],
            cover: '../img/Site-2/Frente.png',
            imgs: [
                '../img/Site-1/Slider/img-1.png',
                '../img/Site-1/Slider/img-2.png',
                '../img/Site-1/Slider/img-3.png',
                '../img/Site-1/Slider/img-4.png',
                '../img/Site-1/Slider/img-5.png'
            ]
        },
        {  
            nome: 'Site 5',
            tecnologias: [js, html, bootstrap, css, php],
            links: [webpage, github],
            cover: '../img/Site-2/Frente.png',
            imgs: [
                '../img/Site-1/Slider/img-1.png',
                '../img/Site-1/Slider/img-2.png',
                '../img/Site-1/Slider/img-3.png',
                '../img/Site-1/Slider/img-4.png',
                '../img/Site-1/Slider/img-5.png'
            ],
            description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.'
        },
    ]

    return projetosData
}