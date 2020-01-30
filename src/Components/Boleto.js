import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import codigoBarras from '../Assets/images.png'

const useStyles = makeStyles(theme => ({
  box: {
    width: '100%',
    heigth: '60px',
    border: 'solid 1px #333',
    margin: '5px',
    padding: '5px',
  },
  top: {
  	display: 'flex',
  	width: '100%',
  	justifyContent: 'flex-start',
  	fontSize: 'x-large',
  	paddingLeft: '60px'
  },
  mid: {
  	display: 'flex',
  	direction: 'column',
  	justifyContent: 'space-around',
  	alignItems: 'center',
  	fontSize: 'large'
  },
  bot: {
  	display: 'flex',
  	justifyContent: 'center',
  },
  img: {
  	padding: '3px',
  },
}));


export default function Boleto() {
  const classes = useStyles(); 
  return (
  	<Grid container>
  		<div className={classes.box}>
  			<div className={classes.top}>
  				<h5><strong>Boleto</strong></h5>
  			</div>
  			<div className={classes.mid}>
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
  			<div className={classes.bot}>
  				<div className={classes.img}>
 					<img src={codigoBarras} heigth={100} width={300}/>  
  				</div>
  			</div>
  		</div>
  	</Grid>
  );
}