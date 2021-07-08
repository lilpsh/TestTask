import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    flexShrink: 0,
    background: '#F4E041',
    borderRadius: 80,
    border: 0,
    color: 'black',
    height: 50,
    width: 148,
    padding: '0 30px',
    '&:hover': {
      background: '#FFE302',
    },
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',

    '&.Mui-disabled':{
      background: "#B4B4B4",
      color: '#fff'
    }
  },
  label: {
    textTransform: "none",
    fontFamily: 'Nunito',
    fontSize: 16,
  },
});

const SUButton = ({ title, onClick,onSignUp, disabled, type}) => {

  
  const openRegistration = () => {
    window.location.href="#signUp"
  }
  const classes = useStyles();
  console.log(title);
  return (
    <Button
      classes={{
        root: classes.root, // class name, e.g. `classes-nesting-root-x`
        label: classes.label, // class name, e.g. `classes-nesting-label-x`

      }}
      disabled={disabled}
      onClick={onSignUp ? openRegistration : onClick}
      type={type}
    >
      {title}
    </Button>
  )
}

export default SUButton
