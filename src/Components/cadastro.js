import React from 'react'
import { Button, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { palette } from '@material-ui/system';

const cadStyles = makeStyles(theme => ({
    mainBox: {
        border:'outlined',
        backgroundColor: '#ffffff' ,
        display: 'grid',
        width: 800,
        alignItems: 'center',
        justifyItems: 'center', 
    },
    buttonBox: {
        margin: theme.spacing(12),
        justifyItems: 'center',
        alignItems: 'center',
    },
}));

export default function Cadastro(props){
    const classes = cadStyles();
    const handleClick = () => {
        props.nextPage(1)
    }
    return(
        <div className={classes.mainBox}>
            <Grid item >
                <Typography variant="body1">Seja bem vindo a MotoPay, onde você pode comprar e/ou vender de forma segura!</Typography>
            </Grid>
            <Grid item >
                <Button color="warning.main" size="large" className={classes.buttonBox} variant='contained' page={props.page} onClick={handleClick} >Estou Comprando</Button>
                <Button size="large" className={classes.buttonBox} variant='contained' page={props.page} onClick={handleClick} >Estou Vendendo </Button>
            </Grid>
        </div>
    ); 
}