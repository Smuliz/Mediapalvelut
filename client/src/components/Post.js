import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { getPost } from '../hooks/ApiHooks';
import {Button, Card, CardContent} from '@material-ui/core';
import BlogPostEditForm from './BlogPostEditForm';


const Post = (props) => {
    const [title, setTitle] = useState("");
    const [postBody, setPostBody] = useState("");
    const [author, setAuthor] = useState("");
    const [createdAt, setCreatedAt] = useState(Date);
    const [edit, setEdit] = useState(false);

    // TODO: Edit pipeline + modal?
    const handleEdit = () => {
        console.log("edit clicked");
        setEdit(true);
    }

    useEffect(() => {
        try {
        const initPost = async () => {
            const post = await getPost(props.postId);
            //const json = JSON.parse(post);
            console.log("Post status from effect: " + post.status + "json " + post.data[0]["title"]);
            await setTitle(post.data[0]["title"]);
            await setPostBody(post.data[0]["post_body"]);
            await setAuthor(post.data[0]["author"]);
            await setCreatedAt(post.data[0]["date_created"]);
        }
        initPost();
    } catch (e) {
        console.log("Error: " + e.message);
    }
    }, [props])




    return (
        <>
        <Card container style={{width:"300px", overflow:"auto", justifyContent:"center"}}>
            <CardContent>
            <Grid item xs={12}>
                <p>Title: {title}</p>
            </Grid>
            <Grid item xs={12}> 
                <p >Body: {postBody.substring(0, 300)}</p>
            </Grid>
            <Grid item>
                <p>Author: {author}</p>
            </Grid>
            <Grid item>
                <p>Created: {createdAt}</p>
            </Grid>
            {author === props.username &&
            <Grid item>
                <Button variant="outlined" onClick={(e => handleEdit(e))}>Edit</Button>
                {edit === true && <BlogPostEditForm postTitle={title} postBody={postBody} username={author} postId={props.postId}  userId={1}/>}
            </Grid>
                }
                </CardContent>
        </Card>
        </>
    )
};

export default Post;
