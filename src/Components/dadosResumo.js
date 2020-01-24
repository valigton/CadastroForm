import React from 'react';
import { Container, Grid, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const style = makeStyles(theme =>({
    text: {
        backgroundColor: '#ffffff',
        margin: '10px',
    },
    paper: {
        backgroundColor: '#ffffff',
        margin: '5px',
        padding: '40px',
    },
    div: {
        margin: '10vh', 
    },
    formDiv: {
        display: 'flex',
        width: '100vh'
    },
}));
export default function DadosResumo() {
    const classes = style();
    return (
    <Container>
        <Typography style={{marginLeft: '20px', marginTop: '10px'}}variant="h6">Resumo</Typography>
        <Grid container justify='center'>
            <Paper className={classes.paper}>
            <Paper>
            <div>
                <Typography style={{marginLeft: '20px', marginTop: '10px'}}variant="h6">Comprador</Typography>
            </div>
            <div className={classes.formDiv}>
                <Grid item >
                    <div className={classes.div}>
                        <p>Nome:</p>
                        <p>Jorge Henrique</p>
                    </div>
                    <div className={classes.div}>
                        <p>E-mail:</p>  
                        <p>teste@teste</p>
                    </div>
                </Grid>
                <Grid item >
                    <div className={classes.div}>
                        <p>CPF:</p>
                        <p>192.444.875-09</p>
                    </div>
                    <div className={classes.div}>
                        <p>Telefone:</p>
                        <p>(11) 2222-2222</p>
                    </div>
                </Grid>
                <Grid item >
                    <div className={classes.div}>
                        <p>RG:</p>
                        <p>48.142.888-1</p>
                    </div>
                    <div className={classes.div}>
                        <p>Celular:</p>
                        <p>(11) 2222-2222</p>
                    </div>
                </Grid>
            </div>
            </Paper>
            <Paper>
            <div>
                <Typography style={{marginLeft: '20px', marginTop: '10px'}}variant="h6">Vendedor</Typography>
            </div>
            <div className={classes.formDiv}>
                <Grid item >
                    <div className={classes.div}>
                        <p>Nome:</p>
                        <p>Jorge Henrique</p>
                    </div>
                    <div className={classes.div}>
                        <p>E-mail:</p>  
                        <p>teste@teste</p>
                    </div>
                </Grid>
                <Grid item >
                    <div className={classes.div}>
                        <p>CPF:</p>
                        <p>192.444.875-09</p>
                    </div>
                    <div className={classes.div}>
                        <p>Telefone:</p>
                        <p>(11) 2222-2222</p>
                    </div>
                </Grid>
                <Grid item >
                    <div className={classes.div}>
                        <p>RG:</p>
                        <p>48.142.888-1</p>
                    </div>
                    <div className={classes.div}>
                        <p>Celular:</p>
                        <p>(11) 2222-2222</p>
                    </div>
                </Grid>
            </div>
            </Paper>
            <Paper>
            <div>
                <Typography style={{marginLeft: '20px', marginTop: '10px'}}variant="h6">Veículo</Typography>
            </div>
            <div className={classes.formDiv}>
                <Grid item >
                    <div className={classes.div}>
                        <p>Marca:</p>
                        <p>Honda</p>
                    </div>
                    <div className={classes.div}>
                        <p>Renavam:</p>  
                        <p>124521512</p>
                    </div>
                    <div className={classes.div}>
                        <p>Combustivel:</p>  
                        <p>Gasolina</p>
                    </div>
                </Grid>
                <Grid item >
                    <div className={classes.div}>
                        <p>Modelo:</p>
                        <p>Transalp</p>
                    </div>
                    <div className={classes.div}>
                        <p>Chassi:</p>
                        <p>412124124</p>
                    </div>
                    <div className={classes.div}>
                        <p>Cilindradas:</p>
                        <p>600</p>
                    </div>
                </Grid>
                <Grid item >
                    <div className={classes.div}>
                        <p>Placa:</p>
                        <p>TTT-2233</p>
                    </div>
                    <div className={classes.div}>
                        <p>Cor:</p>
                        <p>Preto</p>
                    </div>
                </Grid>
            </div>
            </Paper>
            <div>
                <Typography style={{marginLeft: '20px', marginTop: '10px'}}variant="h6">Laudo</Typography>
            </div>
            <div className={classes.formDiv}>
                <Grid item >
                    <div className={classes.div}>
                        <p>R$350,00</p>
                    </div>
                </Grid>
            </div>
            </Paper>
        </Grid>
    </Container>
    );
}