import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Container, CssBaseline, Grid } from '@material-ui/core'

import Logo from './logo';
import Cadastro from './cadastro';
import Cadastro2 from './cadastro2';
import Cadastro3 from './cadastro3';
import StepperComponent from './stepper'
import Laudo from './laudo'

const cadStyles = makeStyles(theme => ({
    mainBox: {
        border:'outlined',
        backgroundColor: '#ffffff' ,
        display: 'grid',
        width: 800,
        alignItems: 'center',
        justifyItems: 'center',
        marginBottom: '200px',
        marginTop: '50px',
    },
}));

export default function Main() {
    let count = 0;
    const [page, setPage] = useState(<Cadastro page={count} nextPage={nextPage}/>);
   
function nextPage(count){
    switch (count) {
        case 1:
            setPage(<Cadastro2 page={count} nextPage={nextPage}/>);
            break   
        case 2:
            setPage(<Cadastro3 page={count} nextPage={nextPage}/>);
            break
        case 3:
            setPage(<StepperComponent page={count} nextPage={nextPage}/>) 
            break
        case 4:
            setPage(<Laudo page={count} nextPage={nextPage}/>)
            break
        default:
    }
}

const classes = cadStyles();
  return (
    <Container fullWidth style={{ backgroundColor:'#d3d3d3d3'}}>
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