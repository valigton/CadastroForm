import React from 'react';
import { Container, Grid, Paper } from '@material-ui/core'
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
export default function DadosResumo(props) {
    const classes = style();
    let data = '' 
    return (
    <Container>
        <h6 style={{marginLeft: '20px', marginTop: '10px'}}variant="h6">Resumo</h6>
        <Grid container justify='center'>
            <Paper className={classes.paper}>
            <div>
                <h6 style={{marginLeft: '20px', marginTop: '10px'}}variant="h6">Comprador</h6>
            </div>
            <div className={classes.formDiv}>
                <Grid item >
                    <div className={classes.div}>
                        <p>Nome:</p>
                        <p>{data.nomeComprador}</p>
                    </div>
                    <div className={classes.div}>
                        <p>E-mail:</p>  
                        <p>{data.emailComprador}</p>
                    </div>
                </Grid>
                <Grid item >
                    <div className={classes.div}>
                        <p>CPF:</p>
                        <p>{data.cpfComprador}</p>
                    </div>
                    <div className={classes.div}>
                        <p>Telefone:</p>
                        <p>{data.telComprador}</p>
                    </div>
                </Grid>
                <Grid item >
                    <div className={classes.div}>
                        <p>RG:</p>
                        <p>N/A</p>
                    </div>
                    <div className={classes.div}>
                        <p>Celular:</p>
                        <p>{data.celComprador}</p>
                    </div>
                </Grid>
            </div>
            <div>
                <h6 style={{marginLeft: '20px', marginTop: '10px'}}variant="h6">Vendedor</h6>
            </div>
            <div className={classes.formDiv}>
                <Grid item >
                    <div className={classes.div}>
                        <p>Nome:</p>
                        <p>{data.nomeVendedor}</p>
                    </div>
                    <div className={classes.div}>
                        <p>E-mail:</p>  
                        <p>{data.emailVendedor}</p>
                    </div>
                </Grid>
                <Grid item >
                    <div className={classes.div}>
                        <p>CPF:</p>
                        <p>{data.cpfVendedor}</p>
                    </div>
                    <div className={classes.div}>
                        <p>Telefone:</p>
                        <p>{data.telVendedor}</p>
                    </div>
                </Grid>
                <Grid item >
                    <div className={classes.div}>
                        <p>RG:</p>
                        <p>N/A</p>
                    </div>
                    <div className={classes.div}>
                        <p>Celular:</p>
                        <p>{data.celVendedor}</p>
                    </div>
                </Grid>
            </div>
            <div>
                <h6 style={{marginLeft: '20px', marginTop: '10px'}}variant="h6">Veículo</h6>
            </div>
            <div className={classes.formDiv}>
                <Grid item >
                    <div className={classes.div}>
                        <p>Marca:</p>
                        <p>{data.marcaVeiculo}</p>
                    </div>
                    <div className={classes.div}>
                        <p>Renavam:</p>  
                        <p>{data.renavamVeiculo}</p>
                    </div>
                    <div className={classes.div}>
                        <p>Combustivel:</p>  
                        <p>N/A</p>
                    </div>
                </Grid>
                <Grid item >
                    <div className={classes.div}>
                        <p>Modelo:</p>
                        <p>{data.modeloVeiculo}</p>
                    </div>
                    <div className={classes.div}>
                        <p>Chassi:</p>
                        <p>{data.chassiVeiculo}</p>
                    </div>
                    <div className={classes.div}>
                        <p>Cilindradas:</p>
                        <p>N/A</p>
                    </div>
                </Grid>
                <Grid item >
                    <div className={classes.div}>
                        <p>Placa:</p>
                        <p>{data.placaVeiculo}</p>
                    </div>
                    <div className={classes.div}>
                        <p>Cor:</p>
                        <p>{data.corVeiculo}</p>
                    </div>
                </Grid>
            </div>
            <div>
                <h6 style={{marginLeft: '20px', marginTop: '10px'}}>Laudo</h6>
            </div>
            <div className={classes.formDiv}>
                <Grid item >
                    <div className={classes.div}>
                        <p>{data.precoVeiculo}</p>
                    </div>
                </Grid>
            </div>
            </Paper>
        </Grid>
    </Container>
    );
}