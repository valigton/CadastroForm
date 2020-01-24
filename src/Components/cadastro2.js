import React from 'react'
import { Grid, Link, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import TextArea from './textarea';

const cadStyles = makeStyles(theme => ({
    buttonBox: {
        justifyItems: 'center',
        alignItems: 'center',
    },
    texBox: {
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
    const handleClick = () => {
        props.nextPage(2)
    }
    return(
        <>
            <Grid item >
                <div className={classes.texBox}>
                <Typography component='h5' variant="h5" className={classes.textPadding}>Você já possui um código de transação MotoPay?</Typography>
                <Typography component='p' variant="body2" className={classes.textPadding}>O código de transação motopay serve para você entrar em uma negociação já existente. Se você está criando uma nova transação <Link href={'#'} component="button" >clique aqui</Link>.</Typography>
                </div>
            </Grid>
            <Grid item >
                <TextArea 
                    id="code" 
                    label="Código de transação Motopay" 
                    variant="outlined" 
                    style={{ marginBottom: 10, width: '360px' }}
                />
                <Button size="large" name={props.page} onClick={handleClick} variant="outlined"  style={{height: 56, backgroundColor: '#dddd'}}>Continuar</Button>
            </Grid>
            <Link href={'#'} component="button" className={classes.textPadding} >Não tenho um código MotoPay</Link>
        </>
    );
}