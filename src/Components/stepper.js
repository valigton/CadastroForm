import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Stepper, Step, StepLabel, Button } from '@material-ui/core'

import DadosVeiculo from './dadosVeiculo'
import DadosDocumentos from './DadosDocumentos'
import SwitchCadastro from './SwitchCadastro'
import DadosVendedor from './DadosVendedor'
import SwitchPagamento from './SwitchPagamento'


const styles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    backButton: {
        marginTop: theme.spacing(1),

    },
    instruction: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        color: theme.color(),
    },
    buttonBox: {
      display: 'flex',
      justifyContent: 'flex-end',
      margin: '10px'
    },
}));

export default function StepperComponent(props) {
  const classes = styles();
  const steps = getSteps();
  const [data, setData] = useState(props.data);
  const [activeStep, setActiveStep] = useState(0);
  const [handleGetData , setHandleGetData] = useState(false);


  function getSteps() {
    return ['Dados Pessoais', 'Dados do Veiculo', 'Dados Vendedor', 'Documentos', 'Pagamento'];
  }

  function getStepContent(stepIndex, getAll, data) {
    switch (stepIndex) {
      case 0:
        return <SwitchCadastro data={data} getAll={(state, step) => getAll(state, step)} Validate={Validate} handleGetData={handleGetData} />;
      case 1:
        return <DadosVeiculo data={data}  getAll={(state, step) => getAll(state, step)} Validate={Validate} handleGetData={handleGetData} />;
      case 2:
        return <DadosVendedor data={data}  getAll={(state, step) => getAll(state, step)} Validate={Validate} handleGetData={handleGetData} />;
      case 3:
        return <DadosDocumentos data={data}  getAll={(state, step) => getAll(state, step)} Validate={Validate} handleGetData={handleGetData} />;
      case 4: 
        return <SwitchPagamento data={data}  getAll={(state, step) => getAll(state, step)} Validate={Validate} handleGetData={handleGetData} />;     
      default:
    }
  }    

  const getAll = (state, step) => {
    switch(step){ 
      case 1:   
        setData({ 
          ...data, 
          cliente: {
              nome: state.nome,
              email: state.email,
              tel: state.tel,
              cel: state.cel,
              nasc: state.nasc,
              cpf: state.cpf,
              rua: state.rua,
              numero: state.numero,
              complemento: state.complemento,
              cidade: state.cidade,
            },
          });
        break
      case 2: 
        setData({
          ...data,
          juridica: {
            razaoSocial: state.razaoSocial,
            responsavel: state.responsavel,
            cnpj: state.cnpj,
            email: state.email,
            cel: state.cel,
            tel: state.tel,
          },
        });
        break
      case 3:
        setData({
          ...data,
          veiculo: {
            marca: state.marca,
            modelo: state.modelo,
            placa: state.placa,
            ano: state.ano,
            fabricacao: state.fabricacao,
            renavam: state.renavam,
            chassi: state.chassi,
            cor: state.cor,
            preco: state.preco,
          },
        });
        break
      case 4:
        setData({
        ...data,
        vendedor: {
          nomeVendedor: state.nomeVendedor,
          emailVendedor: state.emailVendedor,
          telVendedor: state.telVendedor,
          celVendedor: state.celVendedor,
          nascVendedor: state.nascVendedor,
          cpfVendedor: state.cpfVendedor,
          cepVendedor: state.cepVendedor,
          ruaVendedor: state.ruaVendedor,
          numVendedor: state.numVendedor,
          compVendedor: state.compVendedor,
          cidVendedor: state.cidVendedor,
        },
      }); 
      break
      case 5: 
          setData({
            ...data,
            documentos: {
              cnh: state.cnh,
              veiculo: state.veiculo,
              comprovante: state.comprovante,
            },
          });
        break
      case 6:
        setData({
          cartao: {
            cvc: state.cvc,
            expiry: state.expiry,
            name: state.name,
            number: state.number,
            focus: state.focus,
          },
        });
        break
      default:
    }
  }

  const Validate = () => {
    setHandleGetData(false);
  }

  React.useEffect(() => {
    if(handleGetData){
      setHandleGetData(false);
      setActiveStep(prevActiveStep => prevActiveStep + 1);  
    }
  }, [data]);


  const handleNext = (e) => {
    setHandleGetData(true);
  }

  const handleBack = (e) => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

    return (
      <div className={classes.root}>
        <Stepper  activeStep={activeStep} alternativeLabel>
          {steps.map(label => (
            <Step key={label} >
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
            <div>
              <div className={classes.instructions}>{getStepContent(activeStep, getAll, data)}</div>
              <div className={classes.buttonBox}>
                <Button
                  size='large'
                  onClick={handleBack}
                  style={{backgroundColor: '#d3d3d3', marginBottom: '10px', color:'#333', marginRight: '5px', width: '50vh', marginTop: '10px' }}
                  className={classes.backButton}
                  disabled={activeStep === 0}
                >Voltar
                </Button>
                <Button 
                  variant="contained" 
                  style={{backgroundColor: '#2196f3', margin: '10px', color:'#ffffff', width: '50vh'}} 
                  name={props.name}
                  onClick={handleNext}>
                  {activeStep === steps.length - 1 ? 'Finalizar' : 'Proximo'}
                </Button>
              </div>
            </div>
        </div>
      </div>
    );
  }