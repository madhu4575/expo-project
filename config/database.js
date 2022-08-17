const mongoose = require('mongoose')

const configureDb = () => { 
    mongoose.connect("mongodb://localhost:27017/expo-project")
        .then(() => {console.log('connected to db')})
        .catch((err) => {console.log('error connecting to db',err)})
}

module.exports = configureDb