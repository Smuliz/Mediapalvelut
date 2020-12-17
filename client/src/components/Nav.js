import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid';
import el from '../img/EL.svg';
import {Button, makeStyles} from '@material-ui/core'
import {NavLink} from 'react-router-dom';
import Modal from '@material-ui/core/Modal';
import Input from '@material-ui/core/Input';
import { Login } from '../hooks/ApiHooks';


const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    button: {
        color: "#11111",
        "&.active": {
            color: '#55951b'
        }
    },
  }));



const Nav = (props) => {
const classes = useStyles();

const [openLogin, setOpenLogin] = useState(false);
const [modalStyle] = React.useState(getModalStyle);
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [loggedIn, setLoggedIn] = useState(false);


useEffect(() => {
if(props.loggedIn === true) {
    setLoggedIn(true);
}
}, [props.loggedIn])

const handleOpenLogin = () => {
    setOpenLogin(true);
}
const handleClose = () => {
    setOpenLogin(false);
}

function rand() {
    return Math.round(Math.random() * 20) - 10;
  }

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
      textAlign:"center",
    };
  }

  const handleUsernameChange = (event) => {
      setUsername(event.target.value);
  }

  const handlePasswordChange = (event) => {
      setPassword(event.target.value);
  }

  const handleLogin = async () => {
      console.log("login")
      if (username.length > 1 && password.length > 1) {
      const resp = await Login(username, password)
      console.log("RESPONSE FROM LOGIN: " + JSON.stringify(resp));
      if (resp.status === 200) {
          setLoggedIn(true);
          setOpenLogin(false);
      } else {
          alert("Something went wrong... Try Again!")
      }
    }
  }

  
// MODAL BODY
const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Login</h2>
      <form noValidate autoComplete="off" style={{justifyContent:"center", textAlign: "center"}}>
          <Grid container>
              <Grid item xs={12}>
          <Input defaultValue="Username" onChange={(e) => handleUsernameChange(e)}></Input>
          </Grid>
          <Grid item xs={12}>
          <Input defaultValue="Password" onChange={(e) => handlePasswordChange(e)}></Input>
          </Grid>
          <Grid item xs={12}  style={{marginTop:"3rem"}}>
          <Button variant="contained" onClick={(e) => handleLogin()}>Login</Button>
          </Grid>
          </Grid>
      </form>
    </div>
  );


return (
    <>
        
    <Grid container style={{ justifyContent:"space-between" }}>
        <Grid item>
            <Grid item style={{marginTop:"3rem"}} xs={6}>
              <img src={el} alt="Signature" style={{minWidth:"90%",maxWidth:"100%", marginLeft:"10rem"}} onClick={(e) => handleOpenLogin()}></img>
            </Grid>
        </Grid>
        <Grid container style={{flexDirection:"row", justifyContent:"flex-end", marginTop:"2rem"}} xs={10}>
        {loggedIn === true && 
              <Grid item style={{marginRight: "3rem"}}>
              <Button
              className={classes.button}
              component={NavLink}
              to="/write">Write Blog</Button>
          </Grid>}
            <Grid item style={{marginRight: "3rem"}}>
                <Button
                className={classes.button}
                component={NavLink}
                exact to="/">Home</Button>
            </Grid>
            <Grid item style={{marginRight: "3rem"}}>
                <Button
                className={classes.button}
                component={NavLink}
                to="/blog">Blog</Button>
            </Grid>
            <Grid item style={{marginRight: "3rem"}}>
                <Button
                className={classes.button}
                component={NavLink}
                to="/portfolio">Portfolio</Button>
            </Grid>
            
           
            <Grid style={{marginRight: "10rem"}}>
                <Button>Contact me</Button>
            </Grid>
        </Grid>
    </Grid>
    <hr style={{border: "3px solid #ffd100", borderRadius:"5px", width:"90vw"}}></hr>
    {openLogin === true &&
    <>
    <Modal
    open={openLogin}
    onClose={handleClose}
    aria-labelledby="simple-modal-title"
    aria-describedby="simple-modal-description"
    >
        {body}</Modal>
        </>}
    </>
)
}

export default Nav;