const db = firebase.firestore()

const aboutQuery = db.collection('about').get()
const IconsQuery = db.collection('icons').get()

let skills = {}
let icons
let aboutText

await aboutQuery.then(async docs => {
    await docs.forEach(doc => {
        icons = doc.data().skills
        aboutText = doc.data().text
    })

}).then(() => {
    IconsQuery.then(doc => {
        doc.forEach(icon => {
            if (icons.indexOf(icon.id) !== -1) {
                const key = Object.keys(icon.data())
                const value = Object.values(icon.data())
                skills[key] = value
            }
        })
    })
}).catch((e) => console.log(e))

let aboutData = [
    {aboutText},
    {skills}
]

export default aboutData