import React, { useState, useEffect } from 'react';
import {Button, Card, CardContent, CardMedia} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Nav from '../components/Nav';
import PortfolioCard from '../components/PortfolioCard';


const Portfolio = () => {





    return (
        <>
        <Nav/>
        <Grid container style={{textAlign:"center", justifyContent:"center"}}>
            <Grid item>
                <h2>Portfolio</h2>
            </Grid>
            <Grid item xs={12}>
                <PortfolioCard/>
            </Grid>
        </Grid>
        <Grid container style={{textAlign:"center", marginTop:"5rem", justifyContent:"space-around"}}>
            <Grid item xs={12} md={4}>
                <PortfolioCard/>
            </Grid>
            <Grid item xs={12} md={4} >
                <PortfolioCard/>
            </Grid>
            <Grid item xs={12} md={4}>
                <PortfolioCard/>
            </Grid>
        </Grid>


        </>
    )
}

export default Portfolio;