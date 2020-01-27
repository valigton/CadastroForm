import React from 'react'
import { CssBaseline , Container, Grid, Link, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import Logo from './logo'

const cadStyles = makeStyles(theme => ({
    mainBox: {
        border:'outlined',
        backgroundColor: '#ffffff' ,
        display: 'grid',
        height: 600,
        width: 800,
        alignItems: 'center',
        justifyItems: 'center',
        marginBottom: '200px',
        marginTop: '50px' 
    },
    buttonBox: {
        justifyItems: 'center',
        alignItems: 'center',
    },
    texBox: {
        display: 'grid',
        alignItems: 'center',
        textAlign: 'center'
    }
}));

export default function Laudo(){
    const classes = cadStyles();
    return(
    <Container style={{ width: '100%',backgroundColor:'#d3d3d3d3'}}>
        <CssBaseline />
        <Grid container alignItems="center" justify="center" style={{ minHeight: '95vh', backgroundColor:'#d3d3d3d3'}} >
            <div className={classes.mainBox}>
                <Grid item >
                    <Logo />
                </Grid>
                <Grid item >
                    <div className={classes.texBox}>
                        <Typography component='h5' variant="h5" style={{marginBottom:'100px'}}>Tudo certo o seu pedido, agora basta realizar o pagamento para iniciarmos o processo de vistoria.</Typography>
                        <Typography style={{ marginBottom: '20px' }} component='h5' variant="h5">Laudo: MP-2244</Typography>
                        <Typography component='p' variant="body2">O valor para emitir o laudo é de R$390,00.</Typography>
                        <Typography component='p' variant="body2">Você recebeu o boleto do laudo em seu e-mail, caso queria ver o boleto agora <Link>clique aqui</Link>.</Typography>
                        <Typography style={{color: '#424242', paddingTop: '10px'}} component='p' variant="body2">Após o pagamento do boleto será possivel prosseguir com o agendamento do laudo.</Typography>
                    </div>
                </Grid>
                <Grid item >
                    <Button size="large" variant="outlined" style={{height: 56, backgroundColor: '#dddd', margin: '30px'}}>Ir para o sistema</Button>
                </Grid>
            </div>
        </Grid>
    </Container>
    );
}