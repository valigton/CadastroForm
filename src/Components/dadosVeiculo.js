import React, { useState } from 'react';
import { Container, Grid, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import TextArea from './textarea';
import ComboBox from './combobox'

const style = makeStyles(theme => ({
    text: {
        backgroundColor: '#ffffff',
        margin: '10px',
    },
    paper: {
        backgroundColor: '#dddd',
        display: 'column',
        margin: '5px'
    },
}));
export default function DadosVeiculo(props) {
    const classes = style();
    const [veiculo, setVeiculo] = useState({
        marcaVeiculo: '',
        modeloVeiculo: '',
        placaVeiculo: '',
        anoVeiculo: '',
        fabVeiculo: '',
        renavamVeiculo: '',
        chassiVeiculo: '',
        corVeiculo: '',
        precoVeiculo: '',
    });

    function handleBlur(event){
        setVeiculo({...veiculo, [event.target.name]: event.target.value});
    }
    
    return (
    <Container>
        <Grid container >
            <Typography style={{marginLeft: '20px', marginTop: '10px'}}variant="body1">Dados do veículo</Typography>
            <Paper className={classes.paper}>
                <Grid item >
                    <TextArea name={"marcaVeiculo"} value={veiculo.marcaVeiculo} className={classes.text} type="text" label="Marca" variant="outlined" handleBlur={handleBlur}/>
                    <TextArea name={"modeloVeiculo"} value={veiculo.modeloVeiculo} className={classes.text} type="text" label="Modelo" variant="outlined" handleBlur={handleBlur} />
                    <TextArea name={"placaVeiculo"} value={veiculo.placaVeiculo} className={classes.text} type="text" label="Placa" variant="outlined"handleBlur={handleBlur}/>
                </Grid>
                <Grid item >
                    <TextArea name={"anoVeiculo"} value={veiculo.anoVeiculo} className={classes.text} type="text" label="Ano Modelo" variant="outlined" handleBlur={handleBlur}/>
                    <TextArea name={"fabVeiculo"} value={veiculo.fabVeiculo} className={classes.text} type="text" label="Ano de Fabricação" variant="outlined" handleBlur={handleBlur}/>
                    <TextArea name={"renavamVeiculo"} value={veiculo.renavamVeiculo} className={classes.text} type="text" label="Renavam" variant="outlined"handleBlur={handleBlur}/>
                </Grid>
                <Grid item >
                    <TextArea name={"chassiVeiculo"} value={veiculo.chassiVeiculo} className={classes.text} type="text" label="Chassi" variant="outlined" handleBlur={handleBlur}/>
                    <TextArea name={"corVeiculo"} value={veiculo.corVeiculo} className={classes.text} type="text" label="Cor" variant="outlined" handleBlur={handleBlur}/>
                    <TextArea name={"precoVeiculo"} value={veiculo.precoVeiculo} className={classes.text} type="text" label="Preço" variant="outlined" handleBlur={handleBlur}/>
                </Grid>
            </Paper>
        </Grid>
    </Container>
    );
}