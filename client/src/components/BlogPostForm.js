import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { FormControl, Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { postOnePost } from '../hooks/ApiHooks';

const BlogPostForm = (props) => {
    const [postTitle, setPostTitle] = useState("");
    const [postBody, setPostBody] = useState("");
    const user_id = 1;
    const username = "TestiUser";

   const handleTitleChange = (eventValue) => {
        setPostTitle(eventValue);
        console.log("postTitle changed")
   };

   const handleBodyChange = (eventValue) => {
       setPostBody(eventValue);
       console.log("postBody changed")
   }

   const handleSubmit = () => {
       const f = async () => {
           let response = await postOnePost(postTitle, postBody, user_id, username);
           console.log("response from submit" + response);
       }
       f();
   }


    return (
       <form>
           <Grid container>
            <div>
                <Grid item>
                <TextField
                    id="BlogPostTitle"
                    label="BlogPostTitle"
                    placeholder="BlogPostTitle"
                    variant="standard"
                    value={postTitle}
                    onChange={((e) => handleTitleChange(e.target.value))}
                />
                </Grid>
                <Grid item>
                <TextField
                    id="BlogPostBody"
                    label="Blog Post Body"
                    placeholder="Blog Post Body"
                    multiline
                    variant="outlined"
                    value={postBody}
                    onChange={((e) => handleBodyChange(e.target.value))}
                />
                </Grid>
                <Grid item>
                    <Button variant="outlined" onClick={(e) => handleSubmit()}>Submit</Button>
                </Grid>
            </div>
            </Grid>
       </form>
        
    )
}

export default BlogPostForm;