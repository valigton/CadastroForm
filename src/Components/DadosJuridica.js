import React, { useState, useCallback } from 'react';
import { Container, Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

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
    const [juridica, setJuridica] = useState(props.data.juridica);

    useCallback(() => {
        if(props.handleGetData){
            props.getData(juridica, 'DadosJuridica');
        }
    }, [props.handleGetData]);

    function handleBlur(event) {
        setJuridica({...juridica, [event.target.name]: event.target.value });
    }

    return (
    <>
        <Container>
            <Grid container >
                <p style={{marginLeft: '20px', marginTop: '10px'}}>Seus dados</p>
                <Paper className={classes.paper}>
                    <Grid item >
                        <TextArea name="razaoSocial"  value={juridica.razaoSocial} className={classes.text} type="text" label="Razão Social" handleBlur={handleBlur}/>
                        <TextArea name="responsavel" value={juridica.responsavel} className={classes.text} type="email" label="Responsável"  handleBlur={handleBlur} />
                        <TextArea name="cnpjJuridica" value={juridica.cnpjJuridica} className={classes.text} mask="999.999.999-99" type='tel' label='CNPJ'  handleBlur={handleBlur} />
                    </Grid>
                    <Grid item >
                        <TextArea name="emailJuridica" value={juridica.emailJuridica} className={classes.text} type="email" label="E-mail"  handleBlur={handleBlur} />
                        <TextArea name="celJuridica" value={juridica.telJuridica} className={classes.text} mask="(99)99999-9999" type='tel' label='Celular'  handleBlur={handleBlur} />
                        <TextArea name="telJuridica" value={juridica.telJuridica} className={classes.text} mask="(99)9999-9999" type='tel' label='Telefone'  handleBlur={handleBlur} />
                    </Grid>
                </Paper>
            </Grid>
        </Container>
        <Container>
            <Grid container>
                  <p style={{marginLeft: '20px', marginTop: '10px'}} >Endereço</p>
                <Paper className={classes.paper}>
                    <Grid item >
                        <TextArea name="cepJuridica" value={juridica.cepJuridica} className={classes.text} mask="99999-999" type="text" label="CEP"  handleBlur={handleBlur} />
                        <TextArea name="ruaJuridica" value={juridica.ruaJuridica} className={classes.text} type="text" label="Rua"  handleBlur={handleBlur}/>
                        <TextArea name="numJuridica" value={juridica.numJuridica} className={classes.text} mask="99999" type="text" label="Numero"  handleBlur={handleBlur}/> 
                    </Grid>
                    <Grid item >
                        <TextArea name="compJuridica" value={juridica.compJuridica} className={classes.text} type="text" label="Complemento"  handleBlur={handleBlur}/>
                        <TextArea name="cidJuridica" value={juridica.cidJuridica} className={classes.text} type="text" label="Cidade"  handleBlur={handleBlur}/>
                        <ComboBox name="estJuridica" value={juridica.estJuridica} className={classes.text} handleBlur={handleBlur}/>
                    </Grid>
                </Paper>
            </Grid>
        </Container>
    </>
    );
}