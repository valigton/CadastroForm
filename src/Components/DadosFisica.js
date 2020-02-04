import React, { useState, useCallback } from 'react';
import { Container, Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import TextArea from './textarea';
import ComboBox from './combobox';

const style = makeStyles(theme => ({
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
    const [fisica, setFisica] = useState(props.data.cliente);

    useCallback(() => {
        props.getAll(fisica, 'DadosFisica');
        props.Validate();
    }, [props.handleGetData]);

    function handleBlur(event) {
        setFisica({...fisica, [event.target.name]: event.target.value });
    }
    
    return (
        <>
            <Container>
                <Grid container >
                    <p style={{marginLeft: '20px', marginTop: '10px'}}>Seus dados</p>
                    <Paper className={classes.paper}>
                        <Grid item >
                            <TextArea name="nome" value={fisica.nome} className={classes.text} type="text" label="Nome" handleBlur={handleBlur}/>
                            <TextArea name="nasc" value={fisica.nasc} className={classes.text} mask="99/99/9999" type="tel" label="Data de Nascimento"  handleBlur={handleBlur}/>
                            <TextArea name="cpf" value={fisica.cpf} className={classes.text} mask="999.999.999-99" type="text" label="CPF"  handleBlur={handleBlur}/> 
                        </Grid>
                        <Grid item >
                            <TextArea name="email" value={fisica.email} className={classes.text} type="email" label="E-mail"  handleBlur={handleBlur} />
                            <TextArea name="cel" value={fisica.cel} className={classes.text} mask="(99)99999-9999" type="tel" label="Celular"  handleBlur={handleBlur}/>
                            <TextArea name="tel" value={fisica.tel} className={classes.text} mask="(99)9999-9999" type='tel' label='Telefone'  handleBlur={handleBlur} />
                        </Grid>
                    </Paper>
                </Grid>
            </Container>
            <Container>
                <Grid container>
                      <p style={{marginLeft: '20px', marginTop: '10px'}} >Endereço</p>
                    <Paper className={classes.paper}>
                        <Grid item >
                            <TextArea name="cep" value={fisica.cep} className={classes.text} mask="99999-999" type="text" label="CEP"  handleBlur={handleBlur}/>
                            <TextArea name="rua" value={fisica.rua} className={classes.text} type="text" label="Rua"  handleBlur={handleBlur}/>
                            <TextArea name="numero" value={fisica.numero} className={classes.text} mask="99999" type="text" label="Numero"  handleBlur={handleBlur}/> 
                        </Grid>
                        <Grid item >
                            <TextArea name="complemento" value={fisica.complemento} className={classes.text} type="text" label="Complemento"  handleBlur={handleBlur}/>
                            <TextArea name="ciddade" value={fisica.cidade} className={classes.text} type="text" label="Cidade"  handleBlur={handleBlur}/>
                            <ComboBox name="estado" value={fisica.estado} className={classes.text} handleBlur={handleBlur}/>
                        </Grid>
                    </Paper>
                </Grid>
            </Container>
        </>
    );
}