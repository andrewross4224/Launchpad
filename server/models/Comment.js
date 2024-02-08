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
    // launchId: [store launch id's here to link comments to specific launch]
});


const Comments = model('Comment', commentSchema)
module.exports =  Comments;