const { Schema, model } = require ('mongoose')

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
    }
});


const Comments = model('Comment', commentSchema)
module.exports =  Comments;