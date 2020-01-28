import React, { useEffect, useState} from 'react';
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

export default function DadosEndereco(props){
	const classes = style();
     const [endereco, setEndereco] = useState({
        ruaComprador: '',
        numComprador: '',
        compComprador: '',
        cidComprador: '',
        estComprador: '',
    });

    useEffect(() => {
        if(props.handleGetData){
            props.getData(endereco, 'DadosEndereco');
        }
    }, [props.handleGetData]);

    function handleBlur(event) {
        setEndereco({...endereco, [event.target.name]: event.target.value });
    }
	return(
		<Container>
			<Grid container>
				  <p style={{marginLeft: '20px', marginTop: '10px'}} >Endereço</p>
                <Paper className={classes.paper}>
                    <Grid item >
                        <InputMask name="cepComprador" value={endereco.cepComprador} className={classes.text} mask="99999-999" type="text" label="CEP"  handleBlur={handleBlur}>{ (inputProps)=> <TextArea {...inputProps} />}</InputMask>
                        <TextArea name="ruaComprador" value={endereco.ruaComprador} className={classes.text} type="text" label="Rua"  handleBlur={handleBlur}/>
                        <TextArea name="numComprador" value={endereco.numComprador} className={classes.text} mask="99999" type="text" label="Numero"  handleBlur={handleBlur}/> 
                    </Grid>
                    <Grid item >
                        <TextArea name="compComprador" value={endereco.compComprador} className={classes.text} type="text" label="Complemento"  handleBlur={handleBlur}/>
                        <TextArea name="cidComprador" value={endereco.cidComprador} className={classes.text} type="text" label="Cidade"  handleBlur={handleBlur}/>
                        <ComboBox name="estComprador" value={endereco.estComprador} className={classes.text} handleBlur={handleBlur}/>
                    </Grid>
                </Paper>
			</Grid>
		</Container>
	);
}