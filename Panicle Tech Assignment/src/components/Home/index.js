import {Component, useState} from 'react'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import PostCard from '../PostCard'
import Navbar from '../Navbar'

import './index.css'

class Home extends Component {
  state = {
    postsData: [],
    isLoading: true,
    newPostId: '',
    newPostTitle: '',
    newPostBody: '',
    successMsgClass: 'd-none',
  }

  componentDidMount() {
    this.getPostsData()
  }

  getPostsData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    this.setState({postsData: data, isLoading: false})
  }

  onChangeNewPostId = userId => {
    this.setState({newPostId: userId})
  }

  onChangeNewPostTitle = title => {
    this.setState({newPostTitle: title})
  }

  onChangeNewPostBody = body => {
    this.setState({newPostBody: body})
  }

  addPost = async () => {
    const {newPostId, newPostTitle, newPostBody} = this.state

    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        title: newPostTitle,
        body: newPostBody,
        userId: newPostId,
      }),
    }
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts',
      requestOptions,
    )
    if (response.ok) {
      this.setState({
        successMsgClass: '',
        newPostId: '',
        newPostTitle: '',
        newPostBody: '',
      })
      setTimeout(() => this.setState({successMsgClass: 'd-none'}), 2000)
    }
  }

  render() {
    const {
      postsData,
      isLoading,
      successMsgClass,
      newPostId,
      newPostTitle,
      newPostBody,
    } = this.state

    return (
      <>
        <Navbar
          onChangeNewPostId={this.onChangeNewPostId}
          onChangeNewPostTitle={this.onChangeNewPostTitle}
          onChangeNewPostBody={this.onChangeNewPostBody}
          addPost={this.addPost}
          successMsgClass={successMsgClass}
          postId={newPostId}
          postTitle={newPostTitle}
          postBody={newPostBody}
        />

        {isLoading ? (
          <div className="loader-container">
            <Loader type="ThreeDots" color="#000000" height={80} width={80} />
          </div>
        ) : (
          <div className="posts-container">
            <h1 className="posts-heading">All Posts</h1>
            <ul className="posts-list">
              {postsData.map(eachPost => (
                <PostCard key={eachPost.id} postData={eachPost} />
              ))}
            </ul>
          </div>
        )}
      </>
    )
  }
}

export default Home
