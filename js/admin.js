const db = firebase.firestore()

const techForm = document.getElementById('technologyForm')
const contactForm = document.getElementById('contactsForm')

const storeTech = (techName, tech) => {
    db.collection('techs').doc().set({
        [techName]: tech
    })
}

const storeContact = (title, link, icon) => {
    db.collection('contacts').doc().set({
        title,
        link,
        icon
    })
}

// let id = ''
let icons = {}

// const updateTechs = (id, techName, updatedTech) => {
//     db.collection('techs').doc(id).update({
//         [techName]: updatedTech
//     })
// }

const icon = document.getElementById('icon')
const getTechs = () => {
    return db.collection('techs').get()
}

window.addEventListener('DOMContentLoaded', async e => {
    const querySnapshot = await getTechs()
    
    querySnapshot.forEach(doc => {
        const key = Object.keys(doc.data())
        const value = Object.values(doc.data())
        value.push(doc.id)
        icons[key] = value
    })
    
    Object.values(icons).forEach(item => {
        const optionText = item[0][0].charAt(0).toUpperCase() + item[0][0].slice(1)
        const iconOption = document.createElement('option')
        iconOption.textContent = optionText
        iconOption.setAttribute('value', item[1])

        icon.appendChild(iconOption)
    })
})

techForm.addEventListener('submit', async e => {
    e.preventDefault()

    let techArr = []

    const techName = document.getElementById('techName').value
    const techIcon = document.getElementById('techIcon').value
    const techIconColor = document.getElementById('techIconColor').value

    techArr.push(techName, techIcon, techIconColor)

    // await updateTechs(id, techName, techArr)
    await storeTech(techName, techArr)
})

contactForm.addEventListener('submit', async e => {
    e.preventDefault()

    let contactArr = {}

    const platform = document.getElementById('platform').value
    const link = document.getElementById('link').value
    const iconId = document.getElementById('icon').value

    contactArr['title'] = platform
    contactArr['link'] = link
    contactArr['icon'] = db.doc('techs/'+iconId)
    console.log(contactArr)

    await storeContact(contactArr['title'], contactArr['link'], contactArr['icon'])
})
