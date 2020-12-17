import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { FormControl, Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { getAllPosts } from '../hooks/ApiHooks';
import Post from '../components/Post';
import Nav from '../components/Nav';
import perhonen from '../../src/front_page_image_dragonfly.png'
import FeaturedBlogPost from '../components/FeaturedBlogPost';
import BlogPostForm from '../components/BlogPostForm';


const Blog = () => {

    const [respData, setRespData] = useState([]);
    const [goAhead, setGoAhead] = useState(false);
    const [featuredPostId, setFeaturedPostId] = useState(25);
    useEffect(() => {
        const f = async () => {
            console.log("eff")
            setRespData(await getAllPosts());
            setGoAhead(true);
        }
        f();
        
    }, [])



    useEffect(() => {
        if(respData.data !== undefined) {
            console.log("RespData effect: " + respData.data.length);
            setFeaturedPostId(respData.data[respData.data.length - 1]["post_id"]);
        }
        
    },[respData]);
    
    

    const renderPosts = () => {
        //const resp = await getAllPosts();
        console.log("respposts: " + respData.data.length);
        if (respData.data.length > 1) {
        for (let x=0; x<(respData.data.length); x++) {
            let a = respData.data[x]["post_id"];
            console.log("resp data loop: " + a);
            return (
                <>
                <Post postId={respData.data[x]["post_id"]} />
                </>
        )
        }
        console.log("Check")
      
        }
        
    }
//{renderPosts()}
/*

            */
    return(

        
        <>
        <Nav />
        <FeaturedBlogPost postId={featuredPostId}/>
        <Grid container 
        direction="row"
        style={{justifyContent:"space-around", marginTop:"10rem"}}
        >
            {goAhead === true && respData.data.map( (data, id) => {
                console.log("idi" + data["post_id"]);
                return (
                    <Post postId={data["post_id"]}  username="TestiUser" />
                )
            })}
            
            
            
        
        </Grid>
        </>
        
        
    )
}


export default Blog;