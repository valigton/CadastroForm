import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, AppBar, Tabs, Tab, Typography, Box } from '@material-ui/core';

import Boleto from './Boleto'
import Cartao from './Cartao'

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

export default function SwitchPagamento() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function TrocaComponente(props){
    switch (props.value){
      case 0:
        return <Boleto />
        break;
      case 1:
        return <Cartao />
        break;
      default:
    }
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
              <TrocaComponente value={value} />
          </TabPanel>
        </Grid>     
        </div>
    </Grid>
  );
}