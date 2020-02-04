import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { 
	Container, Grid, Radio, RadioGroup, FormControl, FormControlLabel, FormLabel, 
} from '@material-ui/core'

import DadosFisica from './DadosFisica'
import DadosJuridica from './DadosJuridica'
import DadosEndereco from './DadosEndereco'

const style = makeStyles(theme =>({
    text: {
        backgroundColor: '#ffffff',
        margin: '10px',
    },
    paper: {
        backgroundColor: '#dddd',
        display: 'column',
        margin: '5px',
    },
}));


export default function SwitchCadastro(props){
	const classes = style();
	const [value, setValue] = React.useState(props.data.tipoPessoa);

  	const handleChange = event => {  //Função que recebe 
    	setValue(event.target.value);
  	};

  	//Função que troca no formulario de cadastro do comprador de pessoa fisica para pessoa juridica
  	function TrocaDados(props) {
  		switch(props.value) {
  			case 'fisica':
  				return <DadosFisica  data={props.data} Validate={props.Validate} getData={props.getData} handleGetData={props.handleGetData}/>;
  				
  			case 'juridica':
  				return <DadosJuridica  all={props.all} Validate={props.Validate} getData={props.getData} handleGetData={props.handleGetData} />;
  			
  			default: 
  		}
  	}
	return(
	    <Grid container>
	    	<Grid item>
	        	<Container>
				    <FormControl component="fieldset">
				     <FormLabel component="legend">Eu sou: </FormLabel>
				     <RadioGroup aria-label="position" name="position" value={value} onChange={handleChange} row>
				        <FormControlLabel
				          value="fisica"
				          control={<Radio color="primary" />}
				          label="Pessoa Fisica"
				          labelPlacement="end"
				        />
				        <FormControlLabel
				          value="juridica"
				          control={<Radio color="primary" />}
				          label="Pessoa Juridica"
				          labelPlacement="end"
				        />
				    </RadioGroup>
				    </FormControl>
			    </Container>
		    </Grid>
		    <Grid item>
		    	<div>
		    		<TrocaDados value={value} data={props.data} Validate={props.Validate} getAll={props.getAll} handleGetData={props.handleGetData} />
		    	</div>
		    </Grid>
	    </Grid>
	);
}