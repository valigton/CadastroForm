import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, AppBar, Tabs, Tab, Typography, Box } from '@material-ui/core';

import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';


import TextArea from './textarea'
import codigoBarras from '../Assets/images.png'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  box: {
    width: '100%',
    heigth: '60px',
    border: 'solid 1px #333',
    margin: '5px',
    padding: '5px',
  },
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
  },
    boleto: {
    width: '100%',
    heigth: '60px',
    border: 'solid 1px #333',
    margin: '5px',
    padding: '5px',
  },
  topBoleto: {
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-start',
    fontSize: 'x-large',
    paddingLeft: '60px'
  },
  midBoleto: {
    display: 'flex',
    direction: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    fontSize: 'large'
  },
  botBoleto: {
    display: 'flex',
    justifyContent: 'center',
  },
  imgBoleto: {
    padding: '3px',
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function SwitchPagamento(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
   const [cartao, setCartao] = useState(props.data.cartao);

  useEffect(() => {
    if(props.handleGetData){
        props.getData(cartao, 6);
    }
  }, [props.handleGetData]);

  const handleInputFocus = (e) => {
    setCartao({...cartao, focus: e.target.name});
  }

  const handleBlur = (e) => {
    setCartao({...cartao, [e.target.name]: e.target.value })
  }

  return (
    <Grid container>
      <div className={classes.root}>
        <Grid item>
          <AppBar position="static" style={{boxShadow: 'none'}}>
            <Tabs
              variant="fullWidth"
              indicatorColor='primary'
              style={{backgroundColor: 'white', color: 'black'}}
              value={value}
              onChange={handleChange}
              aria-label="nav tabs example"
              >
              <LinkTab label="Pagamento integral"  {...a11yProps(0)} />
              <LinkTab label="Pagamento Compartilhado" {...a11yProps(1)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            <div className={classes.box}>
              <p>O pagamento integral refere-se ao pagamento total do valor.</p>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
          <div className={classes.box}>
             <p>O pagamento compartilhado é dividido pela metade entre ambas as partes. <br/> Valor a ser pago: </p>
          </div>
          </TabPanel>
        </Grid>
        <Grid item>
          <AppBar position="static" style={{boxShadow: 'none'}}>
            <Tabs
              variant="fullWidth"
              indicatorColor='primary'
              style={{backgroundColor: 'white', color: 'black'}}
              value={value}
              onChange={handleChange}
              aria-label="nav tabs example"
              >
              <LinkTab label="Boleto"  {...a11yProps(0)} />
              <LinkTab label="Cartão de Crédito" {...a11yProps(1)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={value}>

          { /*componente boleto*/
            value === 0  ? (
              <Grid container>
              <div className={classes.boleto}>
                <div className={classes.topBoleto}>
                  <h5><strong>Boleto</strong></h5>
                </div>
                <div className={classes.midBoleto}>
                  <div>
                    <p>CPF:</p>
                    <p>413.244.619-23</p>
                  </div>
                  <div>
                    <p>Nome:</p>
                    <p>Jorge Henrique</p>
                  </div>
                  <div>
                    <p>Valor:</p>
                    <p>R$ 390,00</p>
                  </div>
                </div>
                <div className={classes.botBoleto}>
                  <div className={classes.img}>
                  <img src={codigoBarras} heigth={100} width={300}/>  
                  </div>
                </div>
              </div>
            </Grid>

          ) : (
            /*componente cartão*/
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
                      type="tel"
                      name="number"
                      mask='9999 9999 9999 9999'
                      placeholder="Numero do Cartão"
                      value={cartao.number}
                      handleBlur={handleBlur}
                      onFocus={handleInputFocus}
                    />
                    <TextArea
                      className={classes.text}
                      type="string"
                      name="name"
                      placeholder="Titular do Cartão"
                      value={cartao.name}
                      handleBlur={handleBlur}
                      onFocus={handleInputFocus}
                    />
                    <div className={classes.mid}>
                      <TextArea
                        className={classes.text}
                        type="tel"
                        name="cvc"
                        mask='999'
                        placeholder="CVC"
                        value={cartao.cvc}
                        handleBlur={handleBlur}
                        onFocus={handleInputFocus}
                      />
                      <TextArea
                        className={classes.text}
                        type="tel"
                        name="expiry"
                        mask="99/99"
                        placeholder="Vencimento"
                        value={cartao.expiry}
                        handleBlur={handleBlur}
                        onFocus={handleInputFocus}
                      />
                    </div>
                    <TextArea
                      className={classes.text}
                      type="tel"
                      name="portion"
                      placeholder="Parcela"
                      value={cartao.portion}
                      handleBlur={handleBlur}
                      onFocus={handleInputFocus}
                    />
                  </form>
                </div>
              </div>
            </Container>
          )
        }         
          </TabPanel>
        </Grid>     
        </div>
    </Grid>
  );
}