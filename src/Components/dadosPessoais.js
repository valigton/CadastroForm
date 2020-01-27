import React, { useState, useEffect } from 'react';
import { Container, Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import InputMask from 'react-input-mask';

import TextArea from './textarea';
import ComboBox from './combobox';

const style = makeStyles(theme =>({
    text: {
        backgroundColor: '#ffffff',
        margin: '10px',
    },
    paper: {
        backgroundColor: '#dddd',
        display: 'column',
        margin: '5px',
    }
}));

export default function DadosPessoais(props) {
    const classes = style();
    const [pessoais, setPessoais] = useState({
        nomeComprador: '',
        emailComprador: '',
        telComprador: '',
        celComprador: '',
        nascComprador: '',
        cpfComprador: '',
        rgComprador: '',
        cepComprador: '',
        ruaComprador: '',
        numComprador: '',
        compComprador: '',
        cidComprador: '',
        estComprador: '',
    });

    useEffect(() => {
        if(props.handleGetData){
            props.getData(pessoais, 'DadosPessoais');
        }
    }, [props.handleGetData]);

    function handleBlur(event) {
        setPessoais({...pessoais, [event.target.name]: event.target.value });
    }
    
    return (
        <Container>
            <Grid container >
                <p style={{marginLeft: '20px', marginTop: '10px'}}>Seus dados</p>
                <Paper className={classes.paper}>
                <Grid item >
                    <TextArea name="nomeComprador"  value={pessoais.nomeComprador} className={classes.text} type="text" label="Nome" handleBlur={handleBlur}/>
                    <TextArea name="emailComprador" value={pessoais.emailComprador} className={classes.text} type="email" label="E-mail"  handleBlur={handleBlur} />
                    <InputMask name="telComprador" value={pessoais.telComprador} className={classes.text} mask="(99)9999-9999" type='tel' label='Telefone'  handleBlur={handleBlur} >{ (inputProps)=> <TextArea {...inputProps} />}</InputMask>
                </Grid>
                <Grid item >
                    <InputMask name="celComprador" value={pessoais.celComprador} className={classes.text} mask="(99)99999-9999" type="tel" label="Celular"  handleBlur={handleBlur}>{ (inputProps)=> <TextArea {...inputProps} />}</InputMask>
                    <InputMask name="nascComprador" value={pessoais.nascComprador} className={classes.text} mask="99/99/9999" type="tel" label="Data de Nascimento"  handleBlur={handleBlur}>{ (inputProps)=> <TextArea {...inputProps} />}</InputMask>
                    <InputMask name="cpfComprador" value={pessoais.cpfComprador} className={classes.text} mask="999.999.999-99" type="text" label="CPF"  handleBlur={handleBlur}>{ (inputProps)=> <TextArea {...inputProps} />}</InputMask>
                    <InputMask name="rgComprador" value={pessoais.rgComprador} className={classes.text} mask="99.999.999-*"type="text" label="RG"  handleBlur={handleBlur}>{ (inputProps)=> <TextArea {...inputProps} />}</InputMask>
                </Grid>
                </Paper>
                <p style={{marginLeft: '20px', marginTop: '10px'}} >Endereço</p>
                <Paper className={classes.paper}>
                    <Grid item >
                        <InputMask name="cepComprador" value={pessoais.cepComprador} className={classes.text} mask="99999-999" type="text" label="CEP"  handleBlur={handleBlur}>{ (inputProps)=> <TextArea {...inputProps} />}</InputMask>
                        <TextArea name="ruaComprador" value={pessoais.ruaComprador} className={classes.text} type="text" label="Rua"  handleBlur={handleBlur}/>
                        <TextArea name="numComprador" value={pessoais.numComprador} className={classes.text} mask="99999" type="text" label="Numero"  handleBlur={handleBlur}/> 
                    </Grid>
                    <Grid item >
                        <TextArea name="compComprador" value={pessoais.compComprador} className={classes.text} type="text" label="Complemento"  handleBlur={handleBlur}/>
                        <TextArea name="cidComprador" value={pessoais.cidComprador} className={classes.text} type="text" label="Cidade"  handleBlur={handleBlur}/>
                        <ComboBox name="estComprador" value={pessoais.estComprador} className={classes.text} handleBlur={handleBlur}/>
                    </Grid>
                </Paper>
            </Grid>
        </Container>
    );
}