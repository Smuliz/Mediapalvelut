import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { getPost } from '../hooks/ApiHooks';


const Post = (props) => {
    const [title, setTitle] = useState("");
    const [postBody, setPostBody] = useState("");
    const [author, setAuthor] = useState("");
    const [createdAt, setCreatedAt] = useState(Date);

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
    }, [])




    return (
        <>
        <Grid container>
            <Grid item>
                <p>Title: {title}</p>
            </Grid>
            <Grid item>
                <p>Body: {postBody}</p>
            </Grid>
            <Grid item>
                <p>Author: {author}</p>
            </Grid>
            <Grid item>
                <p>Created: {createdAt}</p>
            </Grid>
        </Grid>
        </>
    )
};

export default Post;
