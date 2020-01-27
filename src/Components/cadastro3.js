import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import Stepper from './stepper'

const cadStyles = makeStyles(theme => ({
    mainBox: {
        border:'outlined',
        backgroundColor: '#ffffff' ,
        display: 'grid',
        width: 800,
        alignItems: 'center',
        justifyItems: 'center',
        marginTop: '50px' 
    },
    buttonBox: {
        justifyItems: 'center',
        alignItems: 'center',
    },
    texBox: {
        display: 'grid',
        alignItems: 'center',
        textAlign: 'center'
    }
}));

export default function Cadastro3(){
    const classes = cadStyles();
    return(
        <div className={classes.mainBox}>
            <Grid alignItems="center" justify="center" >
                <Stepper />
            </Grid>
        </div>
    );
}