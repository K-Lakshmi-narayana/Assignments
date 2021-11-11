import {Link} from 'react-router-dom'

import './index.css'

const PostCard = props => {
  const {postData} = props
  const {id, title, body} = postData
  return (
    <Link to={`/posts/${id}`}>
      <div className="post-card-container">
        <img
          className="profile"
          alt="profile"
          src="https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Clipart.png"
        />
        <div>
          <p className="title">{title}</p>
          <p className="body">{body}</p>
        </div>
      </div>
    </Link>
  )
}

export default PostCard
