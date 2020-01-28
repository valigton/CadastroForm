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
    }
}));

export default function SwitchComponent(){
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
		 <Container>
            <Grid container>
            	<Grid item>
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
			    </Grid>
			    <Grid item>
			    	<TrocaDados value={value}/>
			    </Grid>
			    <Grid item> 
                    <DadosEndereco />
			    </Grid>
            </Grid>
        </Container>
	);
}