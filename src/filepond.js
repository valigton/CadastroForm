import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { makeStyles } from '@material-ui/core/styles'
// Import React FilePond
import { FilePond, File, registerPlugin } from 'react-filepond'

// Import FilePond styles
import 'filepond/dist/filepond.min.css'

// Import the Image EXIF Orientation and Image Preview plugins

import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)
  
  const styles = makeStyles(theme => ({
    img: {
      marginTop: '13px',
      height: '10em',
      width: '10em',
      textAlign: 'center',
    },
  }))

export default function App(props) {
  const classes = styles();
  const [files, setFiles] = useState([])
  const [text, setText] = useState({
      cnh: 'Clique aqui para enviar a foto do <strong>CNH</strong>',
      veiculo: 'Clique aqui para enviar a foto do <strong>Documento do Veículo</strong>',
      comprovante: 'Clique aqui para enviar a foto do <strong>Comporvante de Residência</strong>'
  });

  return (
    <div className="App">
      <FilePond
        className={classes.img}
        files={files}
        allowMultiple={false}
        onupdatefiles={setFiles}
        labelIdle={text[props.text]}
      />
    </div>
  )
}
