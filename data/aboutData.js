import promise from './iconsData.js'

const db = firebase.firestore()
const query = db.collection('about').get()

let skills = {}
let icons
let aboutText

await query.then(async docs => {
    await docs.forEach(doc => {
        icons = doc.data().skills
        aboutText = doc.data().text
    })
})

await promise
    .then(doc => {
        doc.forEach(icon => {
            if (icons.indexOf(icon.id) !== -1) {
                const key = Object.keys(icon.data())
                const value = Object.values(icon.data())
                skills[key] = value
            }
        })
    })


let aboutData = [
    {aboutText},
    {skills}
]

export default aboutData