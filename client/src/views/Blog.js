import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { FormControl, Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { getAllPosts } from '../hooks/ApiHooks';
import Post from '../components/Post';
import Nav from '../components/Nav';


const Blog = () => {

    const [respData, setRespData] = useState([]);
    const [goAhead, setGoAhead] = useState(false);
    useEffect(() => {
        const f = async () => {
            console.log("eff")
            setRespData(await getAllPosts());
            setGoAhead(true);
        }
        f();
        
    }, [])



    useEffect(() => {
        console.log("RespData effect: " )
    },[respData]);
    

    const renderPosts = () => {
        //const resp = await getAllPosts();
        console.log("respposts: " + respData.data.length);
        if (respData.data.length > 1) {
        for (let x=0; x<(respData.data.length); x++) {
            let a = respData.data[x]["post_id"];
            console.log("resp data loop: " + respData.data[x]["post_id"]);
            return (
                <>
                <Post postId={respData.data[1]["post_id"]} />
                </>
        )
        }
        console.log("Check")
      
        }
        
    }
//{renderPosts()}
    return(

        
        <>
        <Nav />
        <div style={{width: "100%", height: "150px", backgroundColor:"red"}}>
            BANNER
        </div>
        <Grid container 
        direction="row"
        >
            
            
            {goAhead === true && respData.data.map( (data, id) => {
                console.log("id" + data["post_id"]);
                return (
                    <Post postId={data["post_id"]}  username="TestiUser" />
                )
            })}
        
        </Grid>
        </>
        
        
    )
}


export default Blog;