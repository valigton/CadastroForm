import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const style = makeStyles(theme =>({
    text: {
        backgroundColor: '#ffffff',
        margin: '10px',
    },
    main: {
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: '#dddd',
        display: 'flex',
        margin: '5px',
        padding: '40px',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        backgroundColor: '#ffff',
        height: '10em',
        width: '10em',
        margin: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    }
}));
export default function DadosPessoais() {
    const classes = style();
    return (
        <>
        <p style={{marginLeft: '100px', marginTop: '10px'}}>Documentos</p>
        <Grid container className={classes.main}>
            <Paper className={classes.paper}>
                <Grid item >
                    <div className={classes.box}>
                        <Typography variant='body1'>Clique aqui para enviar a foto do <strong>CNH</strong></Typography>
                    </div>
                </Grid>
                <Grid item >
                    <div className={classes.box}>
                        <Typography variant='body1'>Clique aqui para enviar a foto do <strong>Documento do veículo</strong></Typography>
                    </div>
                </Grid>
                <Grid item >
                    <div className={classes.box}>
                        <Typography variant='body1'>Clique aqui para enviar a foto do <strong>Comprovante de residência</strong></Typography>
                    </div>
                </Grid>
            </Paper>
        </Grid>
        </>
    );
}