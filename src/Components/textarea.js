import React, { useState, useEffect } from 'react';
import { TextField } from '@material-ui/core'

export default function TextArea(props) {
  const [state, setState] = useState(props.value);

  const onChange = (e) =>{
    setState(e.target.value);
  }

  useEffect(()=>{
    if(props.value !== state){
      setState(props.value);
    }
  }, [props.value]);

  return (
    <TextField 
    {...props}
    value={state} 
    variant={"outlined"} >
    </TextField>
  );
}