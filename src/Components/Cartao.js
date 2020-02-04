import React, { useState, useEffect } from 'react';
import Cards from 'react-credit-cards';
import { Container, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import 'react-credit-cards/es/styles-compiled.css';

import TextArea from './textarea'

const styles = makeStyles(theme => ({
  box: {
    border: 'solid 1px #333',
    margin: '5px',
    padding: '1em',
  },
  box2: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: '30px',
  },
  mid: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  text: {
    width: '100%',
    padding: '5px',
  },
  card:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
}));

export default function Cartao(props){
  const classes = styles(); 
  const [cartao, setCartao] = useState({
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  });

  useEffect(() => {
    if(props.handleGetData){
        props.getData(cartao, 'Cartao');
    }
  }, [props.handleGetData]);

  const handleInputFocus = (e) => {
    setCartao({...cartao, focus: e.target.name});
  }

  const handleBlur = (e) => {
    setCartao({...cartao, [e.target.name]: e.target.value })
  }

  return (
  <Container>
    <div id="PaymentForm" className={classes.box}>
      <div>
        <p><strong>Cartão de Credito</strong></p>
      </div>
      <div className={classes.box2}>
        <div className={classes.card}>
          <Cards
            cvc={cartao.cvc}
            expiry={cartao.expiry}
            focused={cartao.focus}
            name={cartao.name}
            number={cartao.number}
          />
        </div>
        <form className={classes.form}>
          <TextArea
            className={classes.text}
            type={"tel"}
            name={"number"}
            placeholder={"Numero do Cartão"}
            value={cartao.number}
            handleBlur={handleBlur}
            onFocus={handleInputFocus}
            variant={"outlined"}
          />
          <TextField
            className={classes.text}
            type={"string"}
            name={"name"}
            placeholder={"Titular do Cartão"}
            value={cartao.name}
            handleBlur={handleBlur}
            onFocus={handleInputFocus}
            variant={"outlined"}
          />
          <div className={classes.mid}>
            <TextField
              className={classes.text}
              type={"tel"}
              name={"cvc"}
              placeholder={"CVC"}
              value={cartao.cvc}
              handleBlur={handleBlur}
              onFocus={handleInputFocus}
              variant={"outlined"}
            />
            <TextField
              className={classes.text}
              type={"tel"}
              name={"expiry"}
              placeholder={"Vencimento"}
              value={cartao.expiry}
              handleBlur={handleBlur}
              onFocus={handleInputFocus}
              variant={"outlined"}
            />
          </div>
          <TextField
            className={classes.text}
            type={"tel"}
            name={"portion"}
            placeholder={"Parcela"}
            value={cartao.portion}
            handleBlur={handleBlur}
            onFocus={handleInputFocus}
            variant={"outlined"}
          />
        </form>
      </div>
    </div>
  </Container>
  );
}