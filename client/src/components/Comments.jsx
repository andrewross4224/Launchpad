function CommentList({ comment }) {

    return (
        <>
            {comment && Array.isArray(comment) && comment.map((current) => (
                <div>
                <p>{current.commentAuthor}</p>
                <p key={current.id}>{current.commentText}</p>
                <p>created at: {current.createdAt}</p>
                </div>
            ))}
        </>
    )
}

export default CommentList;