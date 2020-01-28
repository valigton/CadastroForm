import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Stepper, Step, StepLabel, Button } from '@material-ui/core'

import DadosFisica from './DadosFisica'
import DadosVeiculo from './dadosVeiculo'
import DadosDocumentos from './dadosDocumentos'
import DadosResumo from './dadosResumo'
import SwitchComponent from './SwitchComponent'

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
    },
    buttonBox: {
      display: 'flex',
      justifyContent: 'flex-end',
      margin: '10px'
    }
}));

export default function StepperComponent(props) {
  const classes = styles();
  const steps = getSteps();
  const [activeStep, setActiveStep] = useState(0);
  const [data, setData] = useState();
  const [image, setImage] = useState();
  
  //passar os objetos dentro da função de continuar
  //não precisa concatenar com map
  //Passar o estado dos componentes filhos para o componente pai, e juntar todos em um objeto só
  //Separar comprador do vendedor 
  //Terminar a logica para o formulario de veiculos


  /*function handleImage() {
    const formData = new FormData();
    formData.append('image', image);
    axios.post('http://localhost:3000',formData)
  }*/

  const getData = (state, step) => {

    switch(step){
      case 'DadosFisica':
        setData({...data,
          cliente: {
            nome: state.nomeComprador,
            email: state.emailComprador,
            tel: state.telComprador,
          }
        });
      break;
    }
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }
  const handleNext = () => {
    setHandleGetData(true);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const [handleGetData , setHandleGetData] = useState(false);

  function getSteps() {
    return ['', '', '', ''];
  }

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <SwitchComponent />; //<DadosFisica getData={(state, step) => getData( state, step) } handleGetData={handleGetData} />;
      case 1:
        return <DadosVeiculo />;
      case 2:
        return <DadosDocumentos />;
      case 3:
        return <DadosResumo />;
      default:
    }
  }    
  
  console.log(data);
    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
            <div>
              <div className={classes.instructions}>{getStepContent(activeStep)}</div>
              <div className={classes.buttonBox}>
                <Button
                  size='large'
                  onClick={handleBack}
                  style={{backgroundColor: '#d3d3d3', marginBottom: '10px', color:'#333', marginRight: '5px', width: '50vh', marginTop: '10px' }}
                  className={classes.backButton}
                >Back
                </Button>
                <Button 
                  variant="contained" 
                  style={{backgroundColor: '#2196f3', margin: '10px', color:'#ffffff', width: '50vh'}} 
                  name={props.name}
                  onClick={handleNext}>
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
        </div>
      </div>
    );
  }