const { Schema, model } = require ('mongoose')
const dateFormat = require('../utils/dateFormat');

const commentSchema = new Schema({
    commentText: {
        type: String,
        require: true,
        minlength: 1,
        maxlength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp)
    },
    launchId: {
        type: String
    },
    commentAuthor: {
        type: String,
        required: true,
        trime: true
    }
});


const Comments = model('Comment', commentSchema)
module.exports =  Comments;