import React, { useState } from 'react'
import { Grid, Link, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import TextArea from './textarea';

const cadStyles = makeStyles(theme => ({
    buttonBox: {
        justifyItems: 'center',
        alignItems: 'center',
    },
    textBox: {
        display: 'grid',
        alignItems: 'center',
        textAlign: 'center'
    },
    textPadding: {
        marginBottom: '50px',
    }
}));

export default function Cadastro2(props){
    const classes = cadStyles();
    const [cod, setCod] = useState('');
    const handleClick = () => {
        props.nextPage(2)
    }
    const handleBlur = (e) => {
        setCod({...cod, [e.target.name]: e.target.value });
    }
    return(
        <div className={classes.textBox}>
            <Grid item >
                <div className={classes.textBox}>
                    <h5 className={classes.textPadding}>Você já possui um código de transação MotoPay?</h5>
                    <p className={classes.textPadding}>O código de transação motopay serve para você entrar em uma negociação já existente. Se você está criando uma nova transação <Link href={'#'} component="button" >clique aqui</Link>.</p>
                </div>
            </Grid>
            <Grid item >
                <TextArea 
                    id=" code" 
                    label="Código de transação Motopay" 
                    variant="outlined" 
                    style={{ marginBottom: 10, width: '360px' }}
                    handleBlur={handleBlur}
                />
                <Button size="large" name={props.page} onClick={handleClick} variant="outlined"  style={{height: 56, backgroundColor: '#dddd'}}>Continuar</Button>
            </Grid>
            <Link href={'#'} component="button" className={classes.textPadding} >Não tenho um código MotoPay</Link>
        </div>
    );
}