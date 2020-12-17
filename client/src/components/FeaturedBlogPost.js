import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { getPost } from '../hooks/ApiHooks';
import {Button, Card, CardContent, CardMedia} from '@material-ui/core';
import BlogPostEditForm from './BlogPostEditForm';
import clover from '../img/clover_grean.svg';



const FeaturedBlogPost = (props) => {
    const [title, setTitle] = useState("");
    const [postBody, setPostBody] = useState("");
    const [author, setAuthor] = useState("");
    const [createdAt, setCreatedAt] = useState(Date);
    const [edit, setEdit] = useState(false);


    useEffect(() => {
        try {
        const initPost = async () => {
            const post = await getPost(props.postId);
            try {
                const post = await getPost(props.postId);
                if (post.data[0] !== undefined){
                //const json = JSON.parse(post);
                console.log("Post status from effect: " + post.status + "json " + post.data[0]["title"]);
                await setTitle(post.data[0]["title"]);
                await setPostBody(post.data[0]["post_body"]);
                await setAuthor(post.data[0]["author"]);
                await setCreatedAt(post.data[0]["date_created"]);
                }
                } catch (e) {
                    console.log("Error initpost featured: " + e.message);
                }
        }
        initPost();
    } catch (e) {
        console.log("Error: " + e.message);
    }
    }, [props])

    const handleEdit = () => {
        console.log("edit clicked");
        setEdit(true);
    }


    return (
        <>
        <Grid container style={{flex: '1 0', flexDirection:'row'}}>
            
            <Card container variant="outlined" style={{ width:"80%", margin:"auto"}}>
           <Grid item xs={12}>
            <CardContent >
                <Grid container style={{flex: '1 0', flexDirection:'row'}}>
                
                <Grid item xs={6}>
                    <p>Title: {title}</p>
                    <p >Body: {postBody.substring(0,248)}...</p>
                    <p>Author: {author}</p>
                    <p>Created: {createdAt.substring(0,createdAt.lastIndexOf("T"))}</p>
                    <Button variant="outlined" style={{backgroundColor:"#fdd100", marginTop:"1rem"}}>Read More</Button>
                </Grid>
            <Grid item xs={6} style={{margin:"auto", textAlign:"center"}}>
                <CardMedia>
                    <img src={clover} style={{height: "30vh"}} alt="Clover" />
                </CardMedia>
                
                </Grid>
                </Grid>
                
                </CardContent>
              
                </Grid>
                 
        </Card>
        </Grid>
        </>
    )

}

export default FeaturedBlogPost