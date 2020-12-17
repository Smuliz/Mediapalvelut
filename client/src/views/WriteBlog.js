import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { FormControl, Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import BlogPostForm from '../components/BlogPostForm';

const WriteBlog = () => {
    return(
        <>
        <BlogPostForm/>
        </>
    )
}

export default WriteBlog;