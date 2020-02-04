import React, { useState, useEffect } from 'react';
import { Container, Grid, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import InputMask from 'react-input-mask';


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
export default function DadosVendedor(props) {
    const classes = style();
    const [vendedor, setVendedor] = useState({
        nomeVendedor: '',
        emailVendedor: '',
        telVendedor: '',
        celVendedor: '',
        nascVendedor: '',
        cpfVendedor: '',
        cepVendedor: '',
        ruaVendedor: '',
        numVendedor: '',
        compVendedor: '',
        cidVendedor: '',
        estVendedor: '',
    });

    useEffect(() => {
        if(props.handleGetData){
            props.getData(vendedor, 'DadosVendedor');
        }
    }, [props.handleGetData]);

    function handleBlur(event){
        setVendedor({...vendedor, [event.target.name]: event.target.value});
    }
    
    return (
        <>
            <Container>
            <Grid container >
                <Typography style={{marginLeft: '20px', marginTop: '10px'}} variant="body1">Dados do Vendedor</Typography>
                <Paper className={classes.paper}>
                    <Grid item >
                        <TextArea name={"nomeVendedor"} value={vendedor.nomeVendedor} className={classes.text} type="text" label="Nome" variant="outlined"  handleBlur={handleBlur}/>
                        <TextArea name={"emailVendedor"} value={vendedor.emailVendedor} className={classes.text} type="email" label="E-mail" variant="outlined" handleBlur={handleBlur}/>
                        <TextArea name={"telVendedor"} value={vendedor.telVendedor} className={classes.text} mask="(99)9999-9999" type="tel" label="Telefone" variant="outlined" handleBlur={handleBlur}></TextArea>
                    </Grid>
                    <Grid item >
                        <TextArea name={"celVendedor"} value={vendedor.celVendedor} className={classes.text} mask="(99)99999-9999" type="tel" label="Celular" variant="outlined"handleBlur={handleBlur}/>
                        <TextArea name={"nascVendedor"} value={vendedor.nascVendedor} className={classes.text} mask="99/99/9999" type="tel" label="Data de Nascimento" variant="outlined" handleBlur={handleBlur}/>
                        <TextArea name={"cpfVendedor"} value={vendedor.cpfVendedor} className={classes.text} mask="999.999.999-99" type="text" label="CPF" variant="outlined" handleBlur={handleBlur}/>
                    </Grid>
                </Paper>
            </Grid>
            </Container>
            <Container>
            <Grid container>
                  <p style={{marginLeft: '20px', marginTop: '10px'}} >Endereço</p>
                <Paper className={classes.paper}>
                    <Grid item >
                        <InputMask name="cepVendedor" value={vendedor.cepComprador} className={classes.text} mask="99999-999" type="text" label="CEP"  handleBlur={handleBlur}>{ (inputProps)=> <TextArea {...inputProps} />}</InputMask>
                        <TextArea name="ruaVendedor" value={vendedor.ruaEndereco} className={classes.text} type="text" label="Rua"  handleBlur={handleBlur}/>
                        <TextArea name="numVendedor" value={vendedor.numEndereco} className={classes.text} mask="99999" type="text" label="Numero"  handleBlur={handleBlur}/> 
                    </Grid>
                    <Grid item >
                        <TextArea name="compVendedor" value={vendedor.complementoEnredeco} className={classes.text} type="text" label="Complemento"  handleBlur={handleBlur}/>
                        <TextArea name="cidVendedor" value={vendedor.cidadeEndereco} className={classes.text} type="text" label="Cidade"  handleBlur={handleBlur}/>
                        <ComboBox name="estVendedor" value={vendedor.estadoEndereco} className={classes.text} handleBlur={handleBlur}/>
                    </Grid>
                </Paper>
            </Grid>
        </Container>
        </>
    );
}