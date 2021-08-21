const db = firebase.firestore()

const contactsQuery = db.collection('contacts').get()
const contacts = db.collection('icons').get()

let contactsData = []
let iconsId = []

contactsQuery.then(async docs => {
    await docs.forEach(doc => {
        let contactsObj = {}
        contactsObj['title'] = doc.data().title
        contactsObj['link'] = doc.data().link

        iconsId.push(doc.data().icon.path.split('/').pop())
        contactsData.push(contactsObj)
        
    })
})

await contacts.then(doc => {
    doc.forEach(icon => {
        if (iconsId.indexOf(icon.id) !== -1) {
            const value = Object.values(icon.data())
            contactsData.forEach(item => {
                if (value[0][0].toUpperCase() === item.title.toUpperCase()) {
                    item['icon'] = value[0][1]
                }
            })
        }
    })
})

export default contactsData
