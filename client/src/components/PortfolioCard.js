import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import {Button, Card, CardContent, CardMedia, Typography} from '@material-ui/core';
import moodboard from '../img/moodboard_food_fusion.png'


const PortfolioCard = (props) => {
    return (
        <>
        <Card container variant="elevation" style={{ width:"70%", margin:"auto"}}>
            <CardContent>
                <Grid item>
                    <h1>Food Fusion – a Food Event in Swedish</h1>
                </Grid>
                <Grid item>
                    <img src={moodboard} style={{width:"65%"}} alt="Moodboard"/>
                </Grid>
                <Grid item style={{marginTop:"3rem"}}>
                    <Typography>
                    As a first project of the BBA program, I had a chance to create an event for Svenska Veckan, a week that celebrates the Finnish-Swedish culture.
                    Fortunately I didn’t have to do it alone. Our student group was divided into smaller groups and each group organized one event.
                    We got a small budget from the client and pretty much free hands to create any kind of open event as long as everything was done in Swedish. It definitely wasn’t an easy task to organize and event from scratch in a language that none of us had as a mother tongue. 
                    But I did learn a whole lot about organizing events, marketing, team working and working for a client.
                    A mood board was one of the first tasks we were given when starting to build the concept of the event. 
                    I did the mood board shown on top of this page for our team. It really helped  us as a team to understand what kind of atmosphere we were trying to create for our food event – Food Fusion. 
                    </Typography>
                    <Button style={{backgroundColor:"#fdd100", marginTop:"2rem"}} variant="outlined">Read More</Button>

                </Grid>
            </CardContent>

        </Card>
        </>
    )
}

export default PortfolioCard;