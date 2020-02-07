import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { 
	Container, Grid, Paper, Radio, RadioGroup, FormControl, FormControlLabel, FormLabel, 
} from '@material-ui/core'

import ComboBox from './combobox'
import TextArea from './textarea'

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
	const [value, setValue] = useState('fisica');

  	const [fisica, setFisica] = useState(props.data.cliente);
    const [juridica, setJuridica] = useState(props.data.juridica);

  	const handleChange = event => {  //Função que recebe 
    	setValue(event.target.value);
  	};

    useEffect(() => {
        if(props.handleGetData){
            props.getAll(fisica, 1);
        }
    }, [props.handleGetData]);

    function handleBlur(event) {
    	setFisica({...fisica, [event.target.name]: event.target.value }); 
    }
    
    /*useEffect(() => {
        return () => {
            let ok = true;
            Object.keys(fisica).map((key) => {
                if(fisica[key] === ''){
                   ok = false;
                }
            });
            if(ok){
                props.getAll(fisica, 'DadosFisica');
               props.Validate();
            }
    });*/

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
		    		{ value === 'fisica' ? (
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

		    			) : (

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
				                        <TextArea name="celJuridica" value={juridica.celJuridica} className={classes.text} mask="(99)99999-9999" type='tel' label='Celular'  handleBlur={handleBlur} />
				                        <TextArea name="telJuridica" value={juridica.telJuridica} className={classes.text} mask="(99)9999-9999" type='tel' label='Telefone'  handleBlur={handleBlur} />
				                    </Grid>
				                </Paper>
				            </Grid>
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

		    			)
		    		}
		    	</div>
		    </Grid>
	    </Grid>
	);
}