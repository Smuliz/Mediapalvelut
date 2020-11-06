import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Post from './Post';

const Home = props => {
    useEffect(() => {
      axios.get('/api/hello')
        .then(res => setState(res.data))
    }, [])

    const [state, setState] = useState('')

  return(
    <div>
      Home
      <p>{state}</p>
      <h1>POST</h1>
      <Post postId="1"/>
    </div>
 )
};

export default Home;