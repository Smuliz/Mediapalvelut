import React from 'react';
import axios from 'axios';



const getPost = async (postId) => {
    console.log("getPost started");
    try {
    const resp = await axios.get('api/get/onepost', {
        params: {
            post_id: postId
        }
    });
    console.log("RESP from getPost " + resp.data);
    //console.log("json from getPost " , "deprecated");
    console.log("parse " + JSON.stringify(resp.data));
    return resp;
} catch (e) {
    console.log("Error: " + e.message);
}
  
}

export  {
    getPost,
}