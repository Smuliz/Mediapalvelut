import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid';

const Nav = () => {


return (
    <>
    <Grid container>
        <Grid item>
            <p>Home</p>
        </Grid>
        <Grid item>
            <p>Blog</p>
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
    </>
)
}

export default Nav;