const db = firebase.firestore()

const projectsQuery = db.collection('projects').get()
const IconsQuery = db.collection('icons').get()

let projectsData = []

let icons = {}

await IconsQuery.then(doc => {
    doc.forEach(icon => {
        const key = Object.keys(icon.data())
        const value = Object.values(icon.data())
        return icons[key] = value
    })

}).then(() => {
    projectsQuery.then(async docs => {
        docs.forEach(doc => {
            const keys = Object.keys(doc.data())
            keys.forEach(key => {
                let obj = {...doc.data()[key]}
                obj['projectTechs'].forEach((tech, index) => {
                    obj['projectTechs'][index] = icons[tech]
                })
                obj['projectLinks'] = JSON.parse(obj['projectLinks'])
                projectsData.push(obj)
                
            })
        })
    })
})

function compare( a, b ) {
    if ( a.projectName < b.projectName ){
      return -1;
    }
    if ( a.projectName > b.projectName ){
      return 1;
    }
    return 0;
}

projectsData.sort(compare)

export default projectsData