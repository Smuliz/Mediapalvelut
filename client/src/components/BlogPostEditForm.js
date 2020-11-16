import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { FormControl, Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { editOnePost } from '../hooks/ApiHooks';

const BlogPostEditForm = (props) => {
    const [postTitle, setPostTitle] = useState("");
    const [postBody, setPostBody] = useState("");
    const [userId, setUserId] = useState("");
    const [username, setUsername] = useState("");

    useEffect(() => {
        const f = async () => {
            await setPostTitle(props.postTitle);
            await setPostBody(props.postBody);
            await setUserId(props.userId);
            await setUsername(props.username);
            console.log("all set" + props.postTitle + props.postBody + props.userId + props.username);

        }
        f();
       
    }, [props])

   const handleTitleChange = (eventValue) => {
        setPostTitle(eventValue);
        console.log("postTitle edited")
   };

   const handleBodyChange = (eventValue) => {
       setPostBody(eventValue);
       console.log("postBody edited")
   }

   const handleSubmit = () => {
       const f = async () => {
           try {
           let response = await editOnePost(postTitle, postBody, userId, props.postId, props.username);
           console.log("response from handleSubmit" + response);
           alert("Submit succesful");
           } catch (e) {
               console.log("Error handleSubmit: " + e.message);
           }
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

export default BlogPostEditForm;