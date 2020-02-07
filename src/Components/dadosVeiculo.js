import React, { useState, useEffect } from 'react';
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
    const [veiculo, setVeiculo] = useState(props.data.veiculo);

    useEffect(() => {
        if(props.handleGetData){
            props.getAll(veiculo, 3);
        }
    }, [props.handleGetData]);

    function handleBlur(event){
        setVeiculo({...veiculo, [event.target.name]: event.target.value});
    }

    return (
        <Container>
            <Grid container >
                <Typography style={{marginLeft: '20px', marginTop: '10px'}}variant="body1">Dados do veículo</Typography>
                <Paper className={classes.paper}>
                    <Grid item >
                        <TextArea name="marca" value={veiculo.marca} className={classes.text} type="text" label="Marca" variant="outlined" handleBlur={handleBlur}/>
                        <TextArea name="modelo" value={veiculo.modelo} className={classes.text} type="text" label="Modelo" variant="outlined" handleBlur={handleBlur} />
                        <TextArea name="placa" mask="aaaa-999" value={veiculo.placa} className={classes.text} type="text" label="Placa" variant="outlined"handleBlur={handleBlur}/>
                    </Grid>
                    <Grid item >
                        <TextArea name="ano" mask="9999" value={veiculo.ano} className={classes.text} type="text" label="Ano Modelo" variant="outlined" handleBlur={handleBlur}/>
                        <TextArea name="fabricacao" mask="9999" value={veiculo.fabricacao} className={classes.text} type="text" label="Ano de Fabricação" variant="outlined" handleBlur={handleBlur}/>
                        <TextArea name="renavam" mask="999999999" value={veiculo.renavam} className={classes.text} type="text" label="Renavam" variant="outlined"handleBlur={handleBlur}/>
                    </Grid>
                    <Grid item >
                        <TextArea name="chassi" mask="*****************" value={veiculo.chassi} className={classes.text} type="text" label="Chassi" variant="outlined" handleBlur={handleBlur}/>
                        <TextArea name="cor" value={veiculo.cor} className={classes.text} type="text" label="Cor" variant="outlined" handleBlur={handleBlur}/>
                        <TextArea name="preco" value={veiculo.preco} className={classes.text} type="text" label="Preço" variant="outlined" handleBlur={handleBlur}/>
                    </Grid>
                </Paper>
            </Grid>
        </Container>
    );
}