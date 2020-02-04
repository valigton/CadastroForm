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
  const [data, setData] = useState(props.data);
  const [handleGetData , setHandleGetData] = useState(false);

  const Validate = () => {
    //setActiveStep(prevActiveStep => prevActiveStep + 1);
    setHandleGetData(false);
  }

  function getSteps() {
    return ['', '', '', '', ''];
  }
  
  function getStepContent(stepIndex) {

    switch (stepIndex) {
      case 0:
        return <SwitchCadastro data={data} getAll={props.getAll} Validate={Validate} handleGetData={handleGetData} />;
      case 1:
        return <DadosVeiculo getAll={props.getAll} Validate={Validate} handleGetData={handleGetData} />;
      case 2:
        return <DadosVendedor getAll={props.getAll} Validate={Validate} handleGetData={handleGetData} />;
      case 3:
        return <DadosDocumentos getAll={props.getAll} Validate={Validate} handleGetData={handleGetData} />;
      case 4: 
        return <SwitchPagamento getAll={props.getAll} Validate={Validate} handleGetData={handleGetData} />;     
      default:
    }
  }    

  const handleNext = (e) => {
     e.preventDefault();
    setHandleGetData(true);
  }

  const handleBack = (e) => {
    e.preventDefault();
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

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