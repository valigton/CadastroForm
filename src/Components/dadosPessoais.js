import React, { useState } from 'react';
import { Container, Grid, Paper, Typography } from '@material-ui/core'
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

    function handleChange(event) {
        event.persist();
        setPessoais(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }));
        console.log(pessoais);
    }

    return (
        <Container>
            <Grid container >
                <Typography style={{marginLeft: '20px', marginTop: '10px'}}variant="body1">Seus dados</Typography>
                <Paper className={classes.paper}>
                <Grid item >
                    <TextArea name="nomeComprador"  value={pessoais.nomeComprador} className={classes.text} type="text" label="Nome" handleChange={handleChange}/>
                    <TextArea name="emailComprador" value={pessoais.emailComprador} className={classes.text} type="email" label="E-mail"  handleChange={handleChange} />
                    <InputMask name="telComprador" value={pessoais.telComprador} className={classes.text} mask="(99)9999-9999" type='tel' label='Telefone'  handleChange={handleChange} >{ (inputProps)=> <TextArea {...inputProps} />}</InputMask>
                </Grid>
                <Grid item >
                    <TextArea name="celComprador" value={pessoais.celComprador} className={classes.text} mask="(99)99999-9999" type="tel" label="Celular"  handleChange={handleChange}/>
                    <TextArea name="nascComprador" value={pessoais.nascComprador} className={classes.text} mask="99/99/9999" type="tel" label="Data de Nascimento"  handleChange={handleChange}/>
                    <TextArea name="cpfComprador" value={pessoais.cpfComprador} className={classes.text} mask="999.999.999-99" type="text" label="CPF"  handleChange={handleChange}/>
                    <TextArea name="rgComprador" value={pessoais.rgComprador} className={classes.text} mask="99.999.999-*"type="text" label="RG"  handleChange={handleChange}/>
                </Grid>
                </Paper>
                <Typography style={{marginLeft: '20px', marginTop: '10px'}} variant="body1">Endereço</Typography>
                <Paper className={classes.paper}>
                    <Grid item >
                        <TextArea name="cepComprador" value={pessoais.cepComprador} className={classes.text} mask="99999-999" type="text" label="CEP"  handleChange={handleChange}/>
                        <TextArea name="ruaComprador" value={pessoais.ruaComprador} className={classes.text} type="text" label="Rua"  handleChange={handleChange}/>
                        <TextArea name="numComprador" value={pessoais.numComprador} className={classes.text} mask="99999" type="text" label="Numero"  handleChange={handleChange}/> 
                    </Grid>
                    <Grid item >
                        <TextArea name="compComprador" value={pessoais.compComprador} className={classes.text} type="text" label="Complemento"  handleChange={handleChange}/>
                        <TextArea name="cidComprador" value={pessoais.cidComprador} className={classes.text} type="text" label="Cidade"  handleChange={handleChange}/>
                        <ComboBox name="estComprador" value={pessoais.estComprador} className={classes.text} handleChange={handleChange}/>
                    </Grid>
                </Paper>
            </Grid>
        </Container>
    );
}