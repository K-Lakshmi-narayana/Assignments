import './index.css'

const Comment = props => {
  const {commentData} = props
  const {name, email, body} = commentData
  return (
    <div className="comment-container">
      <div className="name-container">
        <p className="name">{name}</p>
        <p className="email">{email}</p>
      </div>
      <p className="comment-body">{body}</p>
    </div>
  )
}

export default Comment
