import React, { useState } from 'react';
import { TextField } from '@material-ui/core'

import InputMask from 'react-input-mask'

export default function TextArea(props) {
  
  const [state, setState] = useState(props.value);

  const onChange = (e) => {
    setState(e.target.value);
  }
  
  //useEffect(()=>{
   // if(props.value !== state){
     // setState(props.value);
    //}
  //}, [props.value]);
    return(
    <>
      { props.mask ? (
          <InputMask
            {...props} 
            value={state}
            onChange={ (e) => onChange(e) }
            onBlur={(e)=> props.handleBlur(e)}
            variant={"outlined"} >
            { (inputProps)=> <TextField {...inputProps} /> }
          </InputMask>

        ) : (
          
          <TextField 
            {...props}
            value={state}
            onChange={ (e) => onChange(e) }
            onBlur={(e)=> props.handleBlur(e)}
            variant={"outlined"} 
          />
        )
      }

    </> 
  );
}