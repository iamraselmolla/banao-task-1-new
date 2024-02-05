import React, { useContext } from 'react';

import { useEffect } from 'react';
import { useState } from 'react';
import Post from '../../../../shared/Post';
import { AiFillEdit } from 'react-icons/ai';
import { AuthContext } from '../../../../AuthContext/AuthProvider';
import { toast } from 'react-hot-toast';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';

const CategoryMenu = () => {
    const { user, allPosts, setAllPosts } = useContext(AuthContext)
    const [posts, setPosts] = useState([]);
    const [reload, setReload] = useState(false);
    const [show, setShow] = useState(false);
    const [editPost, setEditPost] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <section>

            <div className="container position-relative">
                <div className="row">
                    <div className="col-md-7">
                        <h2 className="fw-bolder mb-4">
                            All Posts ({allPosts})
                        </h2>
                        {posts?.map(singlePost => <Post setReload={setReload} reload={reload} setEditPost={setEditPost} handleShow={handleShow} key={singlePost?._id} post={singlePost}></Post>)}
                        <a href="#post">
                            <div className="post-btn d-block d-sm-block d-md-none">
                                <AiFillEdit></AiFillEdit>
                            </div>
                        </a>
                    </div>
                    <div id='post' className="col-md-4 offset-md-1 position-relative">
                        <div className="position-sticky mt-3 top-0">
                            <h2 className="fw-bolder mb-4">
                                Write a Post <AiFillEdit></AiFillEdit>
                            </h2>
                            <form onSubmit={handlePost}>
                                <div className="mb-3">
                                    <textarea name='postText' className="form-control" placeholder="Write your thought..." id="floatingTextarea"></textarea>
                                </div>
                                {/* <div className="mb-3">
                                <input name='postFile' className="form-control" type="file" id="formFile" />
                            </div> */}
                                <button type="submit" className="btn mt-1 py-2 w-100 rounded-5 fw-bold btn-success">Post</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleUpdate}>
                        <div className="mb-3">
                            <textarea defaultValue={editPost?.postData} name='editpostText' className="form-control" id="floatingTextarea"></textarea>
                        </div>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button type="submit" variant="primary">
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </form>

                </Modal.Body>

            </Modal>
        </section>
    );
};

export default CategoryMenu;