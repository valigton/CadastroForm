import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Stepper, Step, StepLabel, Button, Typography } from '@material-ui/core'
import axios from 'axios'

import DadosPessoais from './dadosPessoais'
import DadosVeiculo from './dadosVeiculo'
import DadosDocumentos from './dadosDocumentos'
import DadosResumo from './dadosResumo'

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
  const [data, setData] = useState(0);
  
  const handleChange = (name,value) => {
    setData({...data,[name]: value });
  }

  const handleClick = () => {
      axios.post('/', data )
      console.log(data)
  }   

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  function getSteps() {
    return ['', '', '', ''];
  }

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <DadosPessoais handleChange={handleChange} handleClick={handleClick} />;
      case 1:
        return <DadosVeiculo handleChange={handleChange} handleClick={handleClick} />;
      case 2:
        return <DadosDocumentos />;
      case 3:
        return <DadosResumo />;
      default:
    }
  }    
  
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
              <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
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