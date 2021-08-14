// import promise from './iconsData.js'

// let icons = {}

// await promise
//     .then(doc => {
//         doc.forEach(icon => {
//             const key = Object.keys(icon.data())
//             const value = Object.values(icon.data())
//             return icons[key] = value
//         })
//     })

const db = firebase.firestore()

let contactsData
const query = db.collection('contacts').get()

await query.then(async docs => {
    contactsData = []
    await docs.forEach(doc => {
        let contactsArr = {}
        contactsArr['title'] = doc.data().title
        contactsArr['link'] = doc.data().link
        
        doc.data().icon.get().then(info => {
            const key = Object.keys(info.data())[0]
            contactsArr['icon'] = info.data()[key][1]
        })
        contactsData.push(contactsArr)
    })
})

// let contactsData
// const query = db.collection('contacts').get()

// await query.then(docs => {

//     contactsData = []
//     docs.forEach(doc => {
//         let contactsArr = {}
//         contactsArr['title'] = doc.data().title //=> Value #1
//         contactsArr['link'] = doc.data().link //=> value #2
//         const id = doc.data().icon.path.split('/').pop()
        
//         const ref = db.collection('techs').doc(id).get()
        
//         ref.then(info => {
//             const key = Object.keys(info.data())[0]
//             contactsArr['icon'] = info.data()[key][1] //=> value #3
//         })
//         contactsData.push(contactsArr)
//     })
// })

await new Promise((resolve) => {
    setTimeout(() => {
        resolve();
    }, 500);
});


export default contactsData
