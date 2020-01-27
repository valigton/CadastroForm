import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Grid, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios';

import TextArea from './textarea';

const loginStyles = makeStyles(theme => ({
    loginButton: {
        border: 'outlined',
        borderColor: '#3f51b5' ,
        background: '#3f51b5',
        borderRadius: 3,
        color: 'white',
        height: 48,
        width: '100%',
        padding: '0 30px',
        },
    boxInside: {
        border: 0,
        background: '#ffffff',
        padding: 80,
        display: 'flex',
        width: '50%',
        justifyItens: 'center',
        alignContent: 'center',
        marginLeft: '200px',
    },
    boxOutside: {
        border: 0,
        background: '#c3c3c3',
        padding: 30,
        width: '100%',
        height: '100vh',
        alignItems: 'center',
        justifyItems: 'center',
        alignContent: 'center',
        display: 'flex',
        paddingBottom: '100em',
    },
    boxLogo: {
        border: 1,
        background: '#c3c3c3',
        height: '40vh',
        width: '40vh',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
    },
    formLogin: {
        display: 'column',
        position: 'relative',
        bottom: '20px',
        alignItems: 'center',
    },
    loginText: {
        width: '100%',
        margin: 8,
    },
    link: {
        display: 'flex',
        padding: theme.spacing(2),
        textAlign: 'center',
        justifyContent: 'space-between',
    },
    [theme.breakpoints.down('sm')]: {//600px
        boxOutside: {
            marginRight: '60vh',
            width: '360px',
            background: '#ffffff',
            padding: 0,
        },
        boxInside: {
            width:'360px'
        },
        formLogin: {
            marginTop: '60px'
        },
        title: {
            justifyContent: 'center',
            alignItems: 'center'
        }
    },
    [theme.breakpoints.down('md')]: {
        formLogin: {
            
        },
        boxInside: {
            marginRight: '150vh',
        }
    },
}));

export default function Login(){
    const classes = loginStyles();
    const [mail, setMail] = useState({
        email: '',
        pass: '',
    });
    
    function handleChange(event) {
        event.preventDefault();
        setMail({...mail, [event.target.name]: event.target.value })
    }
    
    function handleClick(){
        axios.post('/', mail )
        console.log(mail)
    }

    function ValidateEmail() {
        if(!/\S+@\S+\.\S+/.test(mail.email)){
            console.log('Email Inválido')
        }else{
            handleClick(); 
        }
    }
    
    return(
    <Grid maxWidth='lg'>
        <div className={classes.boxOutside}>
            <div className={classes.boxInside}>
                <Grid className={classes.root} container >
                    <Grid item sm={12} md={6} lg={6} xl={6}>
                        <div className={classes.boxLogo}>Logo</div>
                    </Grid>
                    <Grid item sm={12} md={6} lg={6} xl={6}>
                        <form className={classes.formLogin} autoComplete="off" >
                            <h3 className={classes.title}>Login</h3>
                            <TextArea value={mail.email} name={'email'} label={'Email'} style={{ marginBottom: '10px', width: '100%' }} onChange={handleChange}/>
                            <TextArea value={mail.pass} name={'pass'} type={'password'} label={'Senha'} style={{ marginBottom: '10px', width: '100%' }} onChange={handleChange}/>
                            <Button variant="outlined" className={classes.loginButton} onClick={ValidateEmail} >Acessar</Button>
                        </form>
                        <Grid className={classes.link} item xs={12}>
                            <Link>Esqueci a Senha</Link>
                            <Link to={"/cadastro"} >Cadastre-se</Link>
                        </Grid>
                    </Grid>             
                </Grid>       
            </div>
        </div>
    </Grid>
    );
}