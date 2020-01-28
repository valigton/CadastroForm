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

export default function DadosFisica(props) {
    const classes = style();
    const [fisica, setFisica] = useState({
        nomeComprador: '',
        emailComprador: '',
        telComprador: '',
        celComprador: '',
        nascComprador: '',
        cpfComprador: '',
        rgComprador: '',
    });

    useEffect(() => {
        if(props.handleGetData){
            props.getData(fisica, 'DadosPessoais');
        }
    }, [props.handleGetData]);

    function handleBlur(event) {
        setFisica({...fisica, [event.target.name]: event.target.value });
    }
    
    return (
        <Container>
            <Grid container >
                <p style={{marginLeft: '20px', marginTop: '10px'}}>Seus dados</p>
                <Paper className={classes.paper}>
                <Grid item >
                    <TextArea name="nomeComprador"  value={fisica.nomeComprador} className={classes.text} type="text" label="Nome" handleBlur={handleBlur}/>
                    <TextArea name="emailComprador" value={fisica.emailComprador} className={classes.text} type="email" label="E-mail"  handleBlur={handleBlur} />
                    <InputMask name="telComprador" value={fisica.telComprador} className={classes.text} mask="(99)9999-9999" type='tel' label='Telefone'  handleBlur={handleBlur} >{ (inputProps)=> <TextArea {...inputProps} />}</InputMask>
                </Grid>
                <Grid item >
                    <InputMask name="celComprador" value={fisica.celComprador} className={classes.text} mask="(99)99999-9999" type="tel" label="Celular"  handleBlur={handleBlur}>{ (inputProps)=> <TextArea {...inputProps} />}</InputMask>
                    <InputMask name="nascComprador" value={fisica.nascComprador} className={classes.text} mask="99/99/9999" type="tel" label="Data de Nascimento"  handleBlur={handleBlur}>{ (inputProps)=> <TextArea {...inputProps} />}</InputMask>
                    <InputMask name="cpfComprador" value={fisica.cpfComprador} className={classes.text} mask="999.999.999-99" type="text" label="CPF"  handleBlur={handleBlur}>{ (inputProps)=> <TextArea {...inputProps} />}</InputMask>
                    <InputMask name="rgComprador" value={fisica.rgComprador} className={classes.text} mask="99.999.999-*"type="text" label="RG"  handleBlur={handleBlur}>{ (inputProps)=> <TextArea {...inputProps} />}</InputMask>
                </Grid>
                </Paper>
            </Grid>
        </Container>
    );
}