import React, { useState, useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Container, CssBaseline, Grid } from '@material-ui/core'

import Logo from './logo';
import Cadastro from './cadastro';
import Cadastro2 from './cadastro2';
import StepperComponent from './stepper'
import Laudo from './laudo'
import DadosResumo from './DadosResumo'


const cadStyles = makeStyles(theme => ({
    mainBox: {
        border:'outlined',
        backgroundColor: '#ffffff' ,
        display: 'grid',
        width: '800px',
        alignItems: 'center',
        justifyItems: 'center',
        marginBottom: '200px',
        marginTop: '50px',
    },
}));

export default function Main() {
    const classes = cadStyles();
    let count = 0;
    const [page, setPage] = useState(<Cadastro page={count} nextPage={nextPage}/>);
    const [data, setData] = useState({
        cliente: {
            nome: '',
            email: '',
            tel: '',
            cel: '',
            nasc: '',
            cpf: '',
            rua: '',
            numero: '',
            complemento: '',
            cidade: '',
        },
        juridica: {
            razaoSocial: '',
            responsavel: '',
            cnpj: '',
            email: '',
            cel: '',
            tel: '',
            cep: '',
            rua: '',
            numero: '',
            complemento: '',
            cidade: '',
            estado: '',
        },
        veiculo: {
            marca: '',
            modelo: '',
            placa: '',
            ano: '',
            fabricaçao: '',
            renavam: '',
            chassi: '',
            cor: '',
            preco: '',
        },
        vendedor: {
          nomeVendedor: '',
          emailVendedor: '',
          telVendedor: '',
          celVendedor: '',
          nascVendedor: '',
          cpfVendedor: '',
          cepVendedor: '',
          ruaVendedor: '',
          numVendedor: '',
          compVendedor: '',
          cidVendedor: '',
          estVendedor: '',
        },
        documentos: {
            cnh: '',
            veiculo: '',
            comprovante: '',
        },
        cartao: {    
            cvc: '',
            expiry: '',
            focus: '',
            name: '',
            number: '',
        },
    });
   //Mudei função que pega os dados para a main, falta arrumar isso
    
    function nextPage(count){
        switch (count) {
            case 1:
                setPage(<Cadastro2 page={count} nextPage={nextPage}/>);
                break   
            case 2:
                setPage(<StepperComponent data={data}  page={count} nextPage={nextPage} />) 
                break
            case 3:
                setPage(<DadosResumo page={count} nextPage={nextPage} />)
                break
            case 4: 
                setPage(<Laudo page={count} nextPage={nextPage} />)
                break
            default:
        }
    }
  return (
    <Container style={{ width: '100%',backgroundColor:'#d3d3d3d3'}}>
        <CssBaseline />
        <Grid container component='div' alignItems="center" justify="center" style={{ minHeight: '95vh', backgroundColor:'#d3d3d3d3'}} >
            <div className={classes.mainBox}>
            <Logo />
            {page}
            </div>
        </Grid>
    </Container>
  );
}