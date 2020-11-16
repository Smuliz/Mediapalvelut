import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid';

const Nav = () => {


return (
    <>
    <Grid container style={{textAlign: "center", justifyContent:"space-around"}}>
        <Grid item>
            <a href="/">Home</a>
        </Grid>
        <Grid item>
            <a href="/blog">Blog</a>
        </Grid>
        <Grid item>
            <p>Work</p>
        </Grid>
        <Grid>
            <p>About</p>
        </Grid>
        <Grid>
            <p>Contact me</p>
        </Grid>
    </Grid>
    <hr style={{border: "5px solid yellow", borderRadius:"5px", width:"90vw"}}></hr>
    </>
)
}

export default Nav;