const { Schema, model } = require ('mongoose');
const dateFormat = require('../utils/dateFormat');

const launchSchema = new Schema({
    id: {
        type: String,
        require: true
    },
    launchDate: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
        required: true
    },
    location: {
        type: String,
        required: true    
    },
    missionDescription: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    }
})

module.exports = Launches;