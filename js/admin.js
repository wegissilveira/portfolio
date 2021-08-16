const db = firebase.firestore()

const techForm = document.getElementById('technologyForm')
const contactForm = document.getElementById('contactsForm')
const aboutForm = document.getElementById('aboutForm')
const projectForm = document.getElementById('projectForm')

const storeTech = (techName, tech) => {
    db.collection('techs').doc().set({
        [techName]: tech
    })
}

const storeProject = (projectName, project) => {
    db.collection('projects').doc().set({
        [projectName]: project
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
const projectTech_El = document.getElementById("projectTech")

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

        let checkBoxOptionClone = checkBoxOption.cloneNode(true)
        checkBoxOptionClone.checked = false
        checkBoxOptionClone.setAttribute('name', 'projectTech')
        projectTech_El.appendChild(checkBoxOptionClone)
        projectTech_El.appendChild(labelOption.cloneNode(true))
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


const getCoverImgBtn = document.getElementById("getCoverImgBtn")
const getSlidersImgBtn = document.getElementById("getSlidersImgBtn")
const uploadImg = document.getElementById("uploadImg")
// const projectName = document.getElementById("projectName")
// const projectDemo = document.getElementById("projectDemo")
// const projectGit = document.getElementById("projectGit")
// const projectTech = document.getElementById("projectTech")
// const projectDescription = document.getElementById("projectDescription")


let imgName
let imgUrl
let coverImg = []
let sliderImgs = []
let reader

getCoverImgBtn.addEventListener('click', e => {
    e.preventDefault()
    
    const input = document.createElement('input')
    input.type = 'file'

    input.onchange = e => {
        coverImg = e.target.files
        reader = new FileReader()
        reader.onload = () => {
            document.getElementById('coverImg').src = reader.result
        }
        reader.readAsDataURL(coverImg[0])
    }
    input.click()
})

getSlidersImgBtn.addEventListener('click', e => {
    e.preventDefault()

    const input = document.createElement('input')
    input.type = 'file'
    input.setAttribute('multiple', true)

    input.onchange = e => {
        sliderImgs = e.target.files
        const container = document.getElementById('imgContainer')
        
        for (let i = 0; i < sliderImgs.length; i++) {
            reader = new FileReader()
            reader.onload = evt => {
                const img = document.createElement('img')
                
                img.src = evt.target.result
                img.style.maxWidth = '100%'
                img.style.marginRight = '5px'
                container.appendChild(img)
            }
                
            reader.readAsDataURL(sliderImgs[i])
        }
        
    }
    input.click()
})

projectForm.addEventListener('submit', async e => {
    e.preventDefault()

    const projectName = document.getElementById("projectName").value
    const projectNameFormatted =projectName.replace(' ', '-').toLowerCase()
    const projectDemo = document.getElementById("projectDemo").value
    const projectGit = document.getElementById("projectGit").value
    const projectDescription = document.getElementById("projectDescription").value

    let coverImgRef
    if (coverImg.length > 0) {
        let storageRef = firebase.storage().ref()
        let coverRef = storageRef.child(`${projectName.replace(' ', '-').toLowerCase()}/cover`)
        let imgRef = coverRef.put(coverImg[0])

        imgRef.then(snapshot => {
            snapshot.ref.getDownloadURL()
            .then(url => coverImgRef = url)
        })
    }
    
    let arrRef = []
    if (sliderImgs.length > 0) {
        for (let i = 0; i < sliderImgs.length; i++) {
            let storageSliderRef = firebase.storage().ref()
            let sliderRef = storageSliderRef.child(`${projectName.replace(' ', '-').toLowerCase()}/img-${i}`)
            await sliderRef.put(sliderImgs[i])

                .then(snapshot => {
                    snapshot.ref.getDownloadURL()
                        .then(url => arrRef.push(url))
                })
        }
    }

    const iconProject = document.getElementsByName('projectTech')

    let techsArr = []
    for (let i=0; i < iconProject.length; i++) {
        if (iconProject[i].checked) {
            techsArr.push(iconProject[i].id)
        }
    }

    let projectObj = {
        projectName: projectName,
        projectTechs: techsArr,
        projectDescription: projectDescription,
        projectLinks: [projectDemo, projectGit],
        coverImg: coverImgRef,
        coverImgsSlider: arrRef,
    }

    console.log(projectObj)

    await storeProject(projectNameFormatted, projectObj)
})