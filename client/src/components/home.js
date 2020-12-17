import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Post from './Post';
import PostBlogForm from './BlogPostForm';
import Nav from './Nav';
import frontPageDragonFly from '../img/etusivu_cropped.svg';
import {Grid, Typography} from '@material-ui/core';



const Home = props => {
  return(
    <>
    <Nav />
    <div id="banner" style={{width: "90vw", margin:"auto", backgroundColor:"#ffd100"}}>
      <img src={frontPageDragonFly} alt="Dragonfly" style={{objectFit: "fill", maxHeight:"45vh", width:"90vw"}}></img>
    </div>
    
    <div style={{textAlign:"center", marginTop:"3rem"}}>
      <div id="SelfPortrait"></div>
    </div>
    <div id="dragonFlyYellow" >
      
    </div>
    <div id="kukaOlen">
      <Grid container style={{textAlign:"center", marginTop:"3rem"}}>
        <Grid item xs={12} style={{margin:"auto"}}>
        <h2>Who am I?</h2>
        </Grid>
        <Grid item xs={12}>
          <Typography style={{width:"50%", margin:"auto"}}>
          Hello dear website visitor, welcome to my website. My name is Eve Lallukka and to put it shortly I’m a creative thinker who has recently discovered the beauty of literature.
          Previously I was only interested in all kinds of visual arts.
          I adore animals and think we humans can learn a lot from them. Currently I own just one cat. I would like to get at least one more cat, a dog, maybe a goat and a few chickens…
          </Typography>
        </Grid>
      </Grid>
    </div>
    <Grid container style={{justifyContent:"center", marginTop:"6rem", marginBottom:"2rem"}}>
      <Grid item >
    <div id="littleBalls">
    </div>
    </Grid>
    <Grid item style={{marginLeft:"5rem"}}>
    <div id="littleBalls">
    </div>
    </Grid>
    <Grid item style={{marginLeft:"5rem"}}>
    <div id="littleBalls">
    </div>
    </Grid>

    <div id="mitaTeen">
      <Grid container style={{textAlign:"center", marginTop:"3rem"}}>
        <Grid item xs={12} style={{margin:"auto"}}>
        <h2>What do I do?</h2>
        </Grid>
        <Grid item xs={12}>
          <Typography style={{width:"50%", margin:"auto"}}>
          Nowadays I work as a Marketing Professional and have passion for beautiful, clear and easy to understand visuals. I think my strongest skills are creativity and empathy.
          Combined with a positive attitude and an open mind I think I have a great toolbox to do marketing and keep deepening my understanding of it.
          Lately I have also been drawn more to the verbal side of marketing. Word choices have a huge impact on communications. Choosing the right words affect how your message is received and understood.
          You can check some of my work and projects I’ve been a part of from my portfolio.
          </Typography>
        </Grid>
      </Grid>
    </div>
    <Grid container style={{justifyContent:"center", marginTop:"6rem", marginBottom:"2rem"}}>
      <Grid item >
    <div id="littleBalls">
    </div>
    </Grid>
    <Grid item style={{marginLeft:"5rem"}}>
    <div id="littleBalls">
    </div>
    </Grid>
    <Grid item style={{marginLeft:"5rem"}}>
    <div id="littleBalls">
    </div>
    </Grid>
    </Grid>

    <div id="mihinPyrin">
      <Grid container style={{textAlign:"center"}}>
        <Grid item xs={12} style={{margin:"auto"}}>
        <h2>What are my goals?</h2>
        </Grid>
        <Grid item xs={12}>
          <Typography style={{width:"50%", margin:"auto"}}>
          My mission statement is “Trying to understand humans and sustainability”. I know that only by understanding humans, I can do marketing that arouses genuine feelings.
          I would love to help small climate-smart companies grow using epic marketing, branding and visual storytelling.
          Occasionally I take on freelance opportunities. If you have a cool project that would benefit from my expertise, please don’t hesitate to contact me!
          </Typography>
        </Grid>
      </Grid>
    </div>
    <div id="butterfly">
      
    </div>
    
    </Grid>
    
    </>
 )
};

export default Home;