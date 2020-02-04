/*import React, { useEffect, useState} from 'react';
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
        ruaEndereco: '',
        numEndereco: '',
        complementoEndereco: '',
        cidadeEndereco: '',
        estadoEndereco: '',
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
                        <TextArea name="ruaEndereco" value={endereco.ruaEndereco} className={classes.text} type="text" label="Rua"  handleBlur={handleBlur}/>
                        <TextArea name="numEndereco" value={endereco.numEndereco} className={classes.text} mask="99999" type="text" label="Numero"  handleBlur={handleBlur}/> 
                    </Grid>
                    <Grid item >
                        <TextArea name="complementoEnredeco" value={endereco.complementoEnredeco} className={classes.text} type="text" label="Complemento"  handleBlur={handleBlur}/>
                        <TextArea name="cidadeEndereco" value={endereco.cidadeEndereco} className={classes.text} type="text" label="Cidade"  handleBlur={handleBlur}/>
                        <ComboBox name="estadoEndereco" value={endereco.estadoEndereco} className={classes.text} handleBlur={handleBlur}/>
                    </Grid>
                </Paper>
			</Grid>
		</Container>
	);
}*/