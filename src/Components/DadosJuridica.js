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

export default function DadosJuridica(props) {
    const classes = style();
    const [juridica, setJuridica] = useState({
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
            props.getData(juridica, 'DadosJuridica');
        }
    }, [props.handleGetData]);

    function handleBlur(event) {
        setJuridica({...juridica, [event.target.name]: event.target.value });
    }
    
    return (
        <Container>
            <Grid container >
                <p style={{marginLeft: '20px', marginTop: '10px'}}>Seus dados</p>
                <Paper className={classes.paper}>
                    <Grid item >
                        <TextArea name="razaoSocial"  value={juridica.nomeComprador} className={classes.text} type="text" label="Razão Social" handleBlur={handleBlur}/>
                        <TextArea name="responsavel" value={juridica.emailComprador} className={classes.text} type="email" label="Responsável"  handleBlur={handleBlur} />
                        <InputMask name="cnpjComprador" value={juridica.telComprador} className={classes.text} mask="999.999.999-99" type='tel' label='CNPJ'  handleBlur={handleBlur} >{ (inputProps)=> <TextArea {...inputProps} />}</InputMask>
                    </Grid>
                    <Grid item >
                        <TextArea name="emailComprador" value={juridica.emailComprador} className={classes.text} type="email" label="E-mail"  handleBlur={handleBlur} />
                        <InputMask name="celComprador" value={juridica.telComprador} className={classes.text} mask="(99)99999-9999" type='tel' label='Celular'  handleBlur={handleBlur} >{ (inputProps)=> <TextArea {...inputProps} />}</InputMask>
                        <InputMask name="telComprador" value={juridica.telComprador} className={classes.text} mask="(99)9999-9999" type='tel' label='Telefone'  handleBlur={handleBlur} >{ (inputProps)=> <TextArea {...inputProps} />}</InputMask>
                    </Grid>
                </Paper>
            </Grid>
        </Container>
    );
}