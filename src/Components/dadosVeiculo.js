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
    const [state, setState] = useState('');

    function handleChange(e){
        if (e.target.value !== ''){
            props.handleChange(state);
        } else {
            setState({...state, [e.target.name]: e.target.value});
        }
    }
    return (
    <Container>
        <Grid container >
            <Typography style={{marginLeft: '20px', marginTop: '10px'}}variant="body1">Dados do veículo</Typography>
            <Paper className={classes.paper}>
                <Grid item >
                    <TextArea name={"marcaVeiculo"} className={classes.text} type="text" label="Marca" variant="outlined" onChange={handleChange}/>
                    <TextArea name={"modeloVeiculo"} className={classes.text} type="text" label="Modelo" variant="outlined" onChange={handleChange} />
                    <TextArea name={"placaVeiculo"} className={classes.text} type="text" label="Placa" variant="outlined"onChange={handleChange}/>
                </Grid>
                <Grid item >
                    <TextArea name={"anoVeiculo"} className={classes.text} type="text" label="Ano Modelo" variant="outlined" onChange={handleChange}/>
                    <TextArea name={"fabVeiculo"} className={classes.text} type="text" label="Ano de Fabricação" variant="outlined" onChange={handleChange}/>
                    <TextArea name={"renavamVeiculo"} className={classes.text} type="text" label="Renavam" variant="outlined"onChange={handleChange}/>
                </Grid>
                <Grid item >
                    <TextArea name={"chassiVeiculo"} className={classes.text} type="text" label="Chassi" variant="outlined" onChange={handleChange}/>
                    <TextArea name={"corVeiculo"} className={classes.text} type="text" label="Cor" variant="outlined" onChange={handleChange}/>
                    <TextArea name={"combustVeiculo"} className={classes.text} type="text" label="Combustivel" variant="outlined" onChange={handleChange}/>
                </Grid>
                <Grid item >
                    <TextArea name={"kmVeiculo"} className={classes.text} type="text" label="Kilometragem" variant="outlined" onChange={handleChange}/>
                    <TextArea name={"preçoVeiculo"} className={classes.text} type="text" label="Preço" variant="outlined" onChange={handleChange}/>
                </Grid>
            </Paper>
            <Typography style={{marginLeft: '20px', marginTop: '10px'}} variant="body1">Dados do Vendedor</Typography>
            <Paper className={classes.paper}>
                <Grid item >
                    <TextArea name={"nomeVendedor"} className={classes.text} type="text" label="Nome" variant="outlined"  onChange={handleChange}/>
                    <TextArea name={"emailVendedor"} className={classes.text} type="email" label="E-mail" variant="outlined" onChange={handleChange}/>
                    <TextArea name={"telVendedor"} className={classes.text} mask="(99)9999-9999" type="tel" label="Telefone" variant="outlined" onChange={handleChange}></TextArea>
                </Grid>
                <Grid item >
                    <TextArea name={"celVendedor"} className={classes.text} mask="(99)99999-9999" type="tel" label="Celular" variant="outlined"onChange={handleChange}/>
                    <TextArea name={"telVendedor"} className={classes.text} mask="99/99/9999" type="tel" label="Data de Nascimento" variant="outlined" onChange={handleChange}/>
                    <TextArea name={"cpfVendedor"} className={classes.text} mask="999.999.999-99" type="text" label="CPF" variant="outlined" onChange={handleChange}/>
                    <TextArea name={"rgVendedor"} className={classes.text} mask="99.999.999-*"type="text" label="RG" variant="outlined" onChange={handleChange}/>
                </Grid>
            </Paper>
            <Typography style={{marginLeft: '20px', marginTop: '10px'}} variant="body1">Endereço</Typography>
            <Paper className={classes.paper}>
                <Grid item >
                    <TextArea name={"cepVendedor"} className={classes.text} type="text" label="CEP" variant="outlined" onChange={handleChange}/>
                    <TextArea name={"ruaVendedor"} className={classes.text} type="text" label="Rua" variant="outlined" onChange={handleChange}/>
                    <TextArea name={"numVendedor"} className={classes.text} type="text" label="Numero" variant="outlined" onChange={handleChange}/> 
                </Grid>
                <Grid item >
                    <TextArea name={"compVendedor"} className={classes.text} type="text" label="Complemento" variant="outlined" onChange={handleChange}/>
                    <TextArea name={"cidVendedor"} className={classes.text} type="text" label="Cidade" variant="outlined" onChange={handleChange}/>
                    <ComboBox name={"estVendedor"}  onChange={handleChange}/>
                </Grid>
            </Paper>
        </Grid>
    </Container>
    );
}