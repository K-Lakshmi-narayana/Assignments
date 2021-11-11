import {Component} from 'react'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import Comment from '../Comment'
import './index.css'

class Post extends Component {
  state = {postData: [], commentsData: [], isLoading: true}

  componentDidMount() {
    this.getPostData()
  }

  getPostData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const postResponse = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
    )
    const commentResponse = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
    )
    const data = await postResponse.json()
    const commentData = await commentResponse.json()
    this.setState({postData: data, commentsData: commentData, isLoading: false})
  }

  render() {
    const {postData, commentsData, isLoading} = this.state
    const {title, body} = postData

    return (
      <>
        {isLoading ? (
          <div className="loader-container">
            <Loader type="ThreeDots" color="#000000" height={80} width={80} />
          </div>
        ) : (
          <div className="post-container">
            <h1 className="post-heading">Post</h1>
            <div className="post-content-container">
              <img
                className="post-profile"
                alt="profile"
                src="https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Clipart.png"
              />
              <div>
                <p className="post-title">{title}</p>
                <p className="post-body">{body}</p>
              </div>
            </div>
            <h1 className="post-heading">Comments</h1>
            <ul>
              {commentsData.map(eachComment => (
                <Comment commentData={eachComment} />
              ))}
            </ul>
          </div>
        )}
      </>
    )
  }
}

export default Post
