import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Post from './Post';
import PostBlogForm from './BlogPostForm';
import Nav from './Nav';

const Home = props => {
  return(
    <>
    <Nav />
    <div>
      <Post postId="3" username="TestiUser"/>
    </div>
    <div>
      <PostBlogForm />
    </div>
    </>
 )
};

export default Home;