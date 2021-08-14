const db = firebase.firestore()

const techForm = document.getElementById('technologyForm')
const contactForm = document.getElementById('contactsForm')
const aboutForm = document.getElementById('aboutForm')

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

let aboutId_BD
const updateAbout = (text, skills) => {
    db.collection('about').doc(aboutId_BD).update({
        text,
        skills: skills
    })
}

// const storeAbout = (text, skills) => {
//     db.collection('about').doc().set({
//         text,
//         skills: skills
//     })
// }

// let id = ''
let icons = {}

// const updateTechs = (id, techName, updatedTech) => {
//     db.collection('techs').doc(id).update({
//         [techName]: updatedTech
//     })
// }

const iconSelect_El = document.getElementById('icon')
const aboutSelect_El = document.getElementById('aboutTech')

const getTechs = () => {
    return db.collection('techs').get()
}

const getAbout = () => {
    return db.collection('about').get()
}

window.addEventListener('DOMContentLoaded', async e => {

    let skills
    let aboutText
    const query = await getAbout()

    query.forEach(item => {
        skills = item.data().skills
        aboutText = item.data().text
        aboutId_BD = item.id
    })
    
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
        
        iconSelect_El.appendChild(iconOption)
        // aboutSelect_El.appendChild(iconOption.cloneNode(true))

        const checkBoxOption = document.createElement('input')
        const labelOption = document.createElement('label')
        
        document.getElementById('aboutText').textContent = aboutText
        checkBoxOption.setAttribute('type', 'checkbox')
        checkBoxOption.setAttribute('id', item[1])
        checkBoxOption.setAttribute('name', 'aboutTech')
        if (skills.indexOf(item[1]) !== -1) {
            checkBoxOption.checked = true
        }

        labelOption.textContent = optionText
        
        aboutSelect_El.appendChild(checkBoxOption)
        aboutSelect_El.appendChild(labelOption)
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

    let contactsObj = {}

    const platform = document.getElementById('platform').value
    const link = document.getElementById('link').value
    const iconId = document.getElementById('icon').value
    console.log(iconId)
    contactsObj['title'] = platform
    contactsObj['link'] = link
    contactsObj['icon'] = db.doc('techs/'+iconId)

    await storeContact(contactsObj['title'], contactsObj['link'], contactsObj['icon'])
})


aboutForm.addEventListener('submit', async e => {
    e.preventDefault()

    let aboutObj = {}

    const aboutText = document.getElementById('aboutText').value
    const iconAbout = document.getElementsByName('aboutTech')

    let techsArr = []
    for (let i=0; i < iconAbout.length; i++) {
        if (iconAbout[i].checked) {
            
            techsArr.push(iconAbout[i].id)
        }
    }

    await updateAbout(aboutText, techsArr)
})
