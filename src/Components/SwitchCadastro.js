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

 /*useEffect(() => {
        if(props.handleGetData){
            props.getData(fisica, 'DadosPessoais');
        }
    }, [props.handleGetData]);

    function handleBlur(event) {
        setFisica({...fisica, [event.target.name]: event.target.value });
    }*/

export default function SwitchCadastro(){
	const classes = style();
	const [value, setValue] = React.useState('fisica');
  	const handleChange = event => {
    	setValue(event.target.value);
  	};

  	function TrocaDados(props) {
  		switch(props.value) {
  			case 'fisica':
  				return <DadosFisica />
  				break;
  			case 'juridica':
  				return <DadosJuridica />
  				break;
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
		    		<TrocaDados value={value} />
		    	</div>
		    </Grid>
		    <Grid item> 
		    	<div>
	            	<DadosEndereco />
	            </div>
		    </Grid>
	    </Grid>
	);
}