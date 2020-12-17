import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { FormControl, Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { postOnePost, postPicture } from '../hooks/ApiHooks';
import Nav from '../components/Nav';

const BlogPostForm = (props) => {
    const [postTitle, setPostTitle] = useState("");
    const [postBody, setPostBody] = useState("");
    const [postPic, setPostPic] = useState();
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
           try {
           let response = await postOnePost(postTitle, postBody, user_id, username);
           //console.log("response from handleSubmit" + response + "type_ " + postPic.type);
           //if(postPic.type === "image/jpeg" ) {
           //let picResponse = await postPicture("testipicName", postPic, 400);
           //console.log("response from postPicture " + picResponse);
           //}
           alert("Submit succesful");
           } catch (e) {
               console.log("Error handleSubmit: " + e.message);
           }
        }
       f();
   }

   const handleFileChange = (event) => {
       const f = async () => {
           console.log("event: " +  event.target.files[0]);
           try {
            setPostPic(event.target.files[0])
           } catch (e) {
               console.log("Error: " + e.message);
           }
       }
       f();
   }


    return (
        <>
        <Nav loggedIn={true}/>
       <form>
           <Grid container style={{justifyContent:"center"}}>
            <div>
                <Grid item>
                <TextField
                style={{width:"35rem", marginBottom:"5rem"}}
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
                style={{width:"35rem"}}
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
        </>
    )
}

export default BlogPostForm;