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
        combustVeiculo: '',
        kmVeiculo: '',
        precoVeiculo: '',
        nomeVendedor: '',
        emailVendedor: '',
        telVendedor: '',
        celVendedor: '',
        nascVendedor: '',
        cpfVendedor: '',
        rgVendedor: '',
        cepVendedor: '',
        ruaVendedor: '',
        numVendedor: '',
        compVendedor: '',
        cidVendedor: '',
        estVendedor: '',
    });

    function handleBlur(event){
        setVeiculo({...veiculo, [event.target.name]: event.target.value});
    }
    console.log(veiculo)
    
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
                    <TextArea name={"combustVeiculo"} value={veiculo.combustVeiculo} className={classes.text} type="text" label="Combustivel" variant="outlined" handleBlur={handleBlur}/>
                </Grid>
                <Grid item >
                    <TextArea name={"kmVeiculo"} value={veiculo.kmVeiculo} className={classes.text} type="text" label="Kilometragem" variant="outlined" handleBlur={handleBlur}/>
                    <TextArea name={"precoVeiculo"} value={veiculo.precoVeiculo} className={classes.text} type="text" label="Preço" variant="outlined" handleBlur={handleBlur}/>
                </Grid>
            </Paper>
            <Typography style={{marginLeft: '20px', marginTop: '10px'}} variant="body1">Dados do Vendedor</Typography>
            <Paper className={classes.paper}>
                <Grid item >
                    <TextArea name={"nomeVendedor"} value={veiculo.nomeVendedor} className={classes.text} type="text" label="Nome" variant="outlined"  handleBlur={handleBlur}/>
                    <TextArea name={"emailVendedor"} value={veiculo.emailVendedor} className={classes.text} type="email" label="E-mail" variant="outlined" handleBlur={handleBlur}/>
                    <TextArea name={"telVendedor"} value={veiculo.telVendedor} className={classes.text} mask="(99)9999-9999" type="tel" label="Telefone" variant="outlined" handleBlur={handleBlur}></TextArea>
                </Grid>
                <Grid item >
                    <TextArea name={"celVendedor"} value={veiculo.celVendedor} className={classes.text} mask="(99)99999-9999" type="tel" label="Celular" variant="outlined"handleBlur={handleBlur}/>
                    <TextArea name={"nascVendedor"} value={veiculo.nascVendedor} className={classes.text} mask="99/99/9999" type="tel" label="Data de Nascimento" variant="outlined" handleBlur={handleBlur}/>
                    <TextArea name={"cpfVendedor"} value={veiculo.cpfVendedor} className={classes.text} mask="999.999.999-99" type="text" label="CPF" variant="outlined" handleBlur={handleBlur}/>
                    <TextArea name={"rgVendedor"} value={veiculo.rgVendedor} className={classes.text} mask="99.999.999-*"type="text" label="RG" variant="outlined" handleBlur={handleBlur}/>
                </Grid>
            </Paper>
            <Typography style={{marginLeft: '20px', marginTop: '10px'}} variant="body1">Endereço</Typography>
            <Paper className={classes.paper}>
                <Grid item >
                    <TextArea name={"cepVendedor"} value={veiculo.cepVendedor} className={classes.text} type="text" label="CEP" variant="outlined" handleBlur={handleBlur}/>
                    <TextArea name={"ruaVendedor"} value={veiculo.ruaVendedor} className={classes.text} type="text" label="Rua" variant="outlined" handleBlur={handleBlur}/>
                    <TextArea name={"numVendedor"} value={veiculo.numVendedor} className={classes.text} type="text" label="Numero" variant="outlined" handleBlur={handleBlur}/> 
                </Grid>
                <Grid item >
                    <TextArea name={"compVendedor"} value={veiculo.compVendedor} className={classes.text} type="text" label="Complemento" variant="outlined" handleBlur={handleBlur}/>
                    <TextArea name={"cidVendedor"} value={veiculo.cidVendedor} className={classes.text} type="text" label="Cidade" variant="outlined" handleBlur={handleBlur}/>
                    <ComboBox name={"estVendedor"} value={veiculo.estVendedor} onChange={handleBlur}/>
                </Grid>
            </Paper>
        </Grid>
    </Container>
    );
}