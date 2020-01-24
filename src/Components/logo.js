import React from 'react'
import { Avatar, Grid } from '@material-ui/core'
import{ makeStyles } from '@material-ui/core/styles'

const logoStyles =  makeStyles(theme => ({
    root: {
        display: 'flex', 
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    logo: {
        width: theme.spacing(25),
        height: theme.spacing(25),
        background: '#333',
    },
}));

export default function Logo() {
    const styles = logoStyles();
    return(
        <Grid  className={styles.root} >
            <Avatar alt="Logo MotoPay" className={styles.logo} />
        </Grid>
    );
} 