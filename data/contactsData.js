import promise from './iconsData.js'


const db = firebase.firestore()
const query = db.collection('contacts').get()

let contactsData = []
let iconsId = []

await query.then(async docs => {
    await docs.forEach(doc => {
        let contactsObj = {}
        contactsObj['title'] = doc.data().title
        contactsObj['link'] = doc.data().link
        // contactsObj['id'] = doc.data().icon.path.split('/').pop()

        iconsId.push(doc.data().icon.path.split('/').pop())
        contactsData.push(contactsObj)
        
    })
})

await promise
    .then(doc => {
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


// console.log(iconArr)

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

// await new Promise((resolve) => {
//     setTimeout(() => {
//         resolve();
//     }, 500);
// });

export default contactsData
