import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputMask from "react-input-mask";


const useStyles = makeStyles({
  root: {
    width: 380,
    marginBottom:31,


    '& .MuiFormLabel-root':{
      '&.Mui-focused': {
        color: '#00BDD3',
      },
      '&.Mui-error': {
        color: '#cb3d40',
      },
    },

    '& .MuiOutlinedInput-root': {
      width: '100%',
      height: 54,
      '& fieldset': {
        border: '1px solid #D0CFCF',
        borderRadius: 4,
      },
      '&.Mui-focused fieldset': {
        border: '2px solid #00BDD3', 
        borderRadius: 4,
      },
      '&.Mui-error fieldset':{
        border: '2px solid #cb3d40', 
      }
    },

    
    '& .MuiFormHelperText-root': {
      fontFamily: "Nunito",
      fontSize: 12,
      lineHeight: "140%",
      color: "#CB3D40",
    }
  },

});

const FInput = (props) => {
  const classes = useStyles();

  if (props.mask) {
    return (
      <InputMask mask={props.mask} value={props.value} onChange={props.onChange} onBlur={props.onBlur}>
        <TextField
          classes={{
            root: classes.root, // class name, e.g. `classes-nesting-root-x`
            input: classes.input, // class name, e.g. `classes-nesting-label-x
          }}
          id={props.id}
          label={props.placeholder}
          placeholder={props.placeholder}
          error={props.error}
          helperText={ props.error ? props.error : "‎"}
          variant="outlined"
        />
      </InputMask>
    )
  }


  return (
    <TextField
      classes={{
        root: classes.root, // class name, e.g. `classes-nesting-root-x`
        input: classes.input, // class name, e.g. `classes-nesting-label-x

      }}
      onBlur={props.onBlur}
      id={props.id}
      value={props.value}
      onChange={props.onChange}
      label={props.placeholder}
      placeholder={props.placeholder}
      variant="outlined"
      error={props.error}
      helperText={ props.error ? props.error : "‎"}
    />
  )
}

export default FInput
