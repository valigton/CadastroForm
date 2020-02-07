import React, { useEffect, useState } from 'react';
import { Grid, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import FilePond from '../filepond'

const style = makeStyles(theme =>({
    text: {
        backgroundColor: '#ffffff',
        margin: '10px',
    },
    main: {
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: '#dddd',
        display: 'flex',
        margin: '5px',
        padding: '40px',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        backgroundColor: '#ffff',
        height: '10em',
        width: '10em',
        margin: '10px',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));

export default function DadosDocumentos(props) {
    const classes = style();
    const [documentos, setDocumentos] = useState(props.data.documentos);

    useEffect(() => {
        if(props.handleGetData){
            props.getAll(documentos, 5);
        }
    }, [props.handleGetData]);


    return (
        <>
        <p style={{marginLeft: '100px', marginTop: '10px'}}>Documentos</p>
            <Grid container className={classes.main}>
                <Paper className={classes.paper}>
                    <Grid item >
                        <div className={classes.box} value={documentos.cnh}>
                           <FilePond text={'cnh'}/>
                        </div>
                    </Grid>
                    <Grid item >
                        <div className={classes.box} value={documentos.veiculo}>
                            <FilePond text={'veiculo'} />
                        </div>
                    </Grid>
                    <Grid item >
                        <div className={classes.box} value={documentos.comprovante}>
                            <FilePond text={'comprovante'} />
                        </div>
                    </Grid>
                </Paper>
            </Grid>
        </>
    );
}