import React from 'react'
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';




const useStyles = makeStyles({
  root: {
    marginBottom: '-8px',

    '& .MuiTypography-body1':{
      fontFamily: "Nunito",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: 16,
      color: "rgba(0, 0, 0, 0.87)",
    },
    
    '& .MuiRadio-colorPrimary.Mui-checked':{
      color: "#00BDD3",
    }
  }
});

const FRadio = (props) => {
  const classes = useStyles();

  return (

    <FormControlLabel
      classes={{
        root: classes.root, // class name, e.g. `classes-nesting-root-x`
        // input: classes.input, // class name, e.g. `classes-nesting-label-x
      }}
      value={props.data.id.toString()}
      control={<Radio  color="primary" />}
      label={props.data.name}
      labelPlacement="end"
    />
  )
}

export default FRadio
