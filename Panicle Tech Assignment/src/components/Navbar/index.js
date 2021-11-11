import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Modal, Button} from 'react-bootstrap'

import './index.css'

const Navbar = props => {
  const {
    onChangeNewPostId,
    onChangeNewPostTitle,
    onChangeNewPostBody,
    addPost,
    successMsgClass,
    postId,
    postTitle,
    postBody,
  } = props
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const changeNewPostId = event => {
    onChangeNewPostId(event.target.value)
  }

  const changeNewPostTitle = event => {
    onChangeNewPostTitle(event.target.value)
  }

  const changeNewPostBody = event => {
    onChangeNewPostBody(event.target.value)
  }

  const addNewPost = () => {
    addPost()
  }

  return (
    <>
      <nav className="navbar">
        <img
          className="logo"
          alt="logo"
          src="https://zenprospect-production.s3.amazonaws.com/uploads/pictures/605d585757e66000015ed49f/picture"
        />

        <Button className="add-post-btn" onClick={handleShow}>
          Add Post
        </Button>

        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header>
            <Modal.Title>Add New Post</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="form-input">
              <p className="input-label">User Id</p>
              <input value={postId} onChange={changeNewPostId} type="text" />
            </div>
            <div className="form-input">
              <p className="input-label">Title</p>
              <input
                value={postTitle}
                onChange={changeNewPostTitle}
                type="text"
              />
            </div>
            <div className="form-input">
              <p className="input-label">Body</p>
              <input
                value={postBody}
                onChange={changeNewPostBody}
                type="text"
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="success" onClick={addNewPost}>
              Add Post
            </Button>
          </Modal.Footer>
          <p className={`success-msg ${successMsgClass}`}>
            Post Successfully added
          </p>
        </Modal>
      </nav>
    </>
  )
}

export default Navbar
