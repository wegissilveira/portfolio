import promise from './iconsData.js'

let icons = {}

await promise
    .then(doc => {
        doc.forEach(icon => {
            const key = Object.keys(icon.data())
            const value = Object.values(icon.data())
            return icons[key] = value
        })
    })

// function returnData() {
    const projetosData = [
        {
            nome: 'Site 1',
            tecnologias: [icons.js, icons.css, icons.angular, icons.nodeJs, icons.php],
            links: [
                ['#', icons.link[0][1], icons.link[0][2]], 
                ['#', icons.github[0][1], icons.github[0][2]]
            ],
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
            tecnologias: [icons.js, icons.html, icons.bootstrap, icons.css],
            links: [
                ['#', icons.link[0][1], icons.link[0][2]], 
                ['#', icons.github[0][1], icons.github[0][2]]
            ],
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
            tecnologias: [icons.js, icons.reactJs, icons.css, icons.bootstrap],
            links: [
                ['#', icons.link[0][1], icons.link[0][2]], 
                ['#', icons.github[0][1], icons.github[0][2]]
            ],
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
            tecnologias: [icons.js, icons.html, icons.css, icons.bootstrap],
            links: [
                ['#', icons.link[0][1], icons.link[0][2]], 
                ['#', icons.github[0][1], icons.github[0][2]]
            ],
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
            tecnologias: [icons.js, icons.html, icons.bootstrap, icons.css, icons.php, icons.jQuery],
            links: [
                ['#', icons.link[0][1], icons.link[0][2]], 
                ['#', icons.github[0][1], icons.github[0][2]]
            ],
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
            nome: 'Site 6',
            tecnologias: [icons.js, icons.html, icons.bootstrap, icons.css],
            links: [
                ['#', icons.link[0][1], icons.link[0][2]], 
                ['#', icons.github[0][1], icons.github[0][2]]
            ],
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
            nome: 'Site 7',
            tecnologias: [icons.js, icons.html, icons.bootstrap, icons.css, icons.php],
            links: [
                ['#', icons.link[0][1], icons.link[0][2]], 
                ['#', icons.github[0][1], icons.github[0][2]]
            ],
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

    // return projetosData
// }

export default projetosData