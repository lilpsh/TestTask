import React from 'react'
import { useState, useEffect } from 'react'
import { useFormik } from 'formik';
import FInput from './small/FInput';
import * as Yup from 'yup';
import FRadio from './small/FRadio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import Upload from './small/Upload'
import SUButton from './small/SUButton'

import './form.scss'

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  root: {
    '& .MuiDialog-paper':{
      background: "#FFFFFF",
      borderRadius: "4px",
      width: "452px",
      height: "194px",
    
      '& .MuiDialogTitle-root':{
        padding:"24px 24px 6px",

        '& .MuiTypography-h6':{
          fontFamily: "Nunito",
          fontSize: "22px",
          lineHeight: "31px",
        }
      },

      '& .MuiDialogContent-root':{
        margin:"0px",
        padding:"0px",

        '& .MuiTypography-root':{
          paddingLeft:'24px',
          marginBottom:'0px',
          fontFamily: "Nunito",
          fontSize: "16px",
          lineHeight: "26px",
          color: "rgba(0, 0, 0, 0.87)",
        }
      },

      '& .MuiDialogActions-root':{
        padding:"24px ",
      },
    },
  }
});

const Form = ({getUsers}) => {

  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [popupMessage, setPopupMessage] = useState({
    title:'Congratulations',
    message:"You have successfully passed the registration",
  })

  const [positions, setPositions] = useState([])

  useEffect(() => {
    fetch('https://frontend-test-assignment-api.abz.agency/api/v1/positions')
      .then(function (response) { return response.json(); })
      .then(function (data) {
        if (data.success) {
          setPositions(data.positions)
        }
        else {
          // proccess server errors 
        }
      })
  }, [])

  console.log(positions);

  const formik = useFormik({
    validateOnChange: false,
    validateOnBlur: true,
    initialValues: {
      name: '',
      email: '',
      phone: '',
      position: '1',
      file:null,
    },
    
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .matches(/([a-z])+/g, "Use only english")
        .min(2, "Min 100 symbols")
        .max(100, "Max 100 symbols")
        .required("Required"),
      email: Yup.string()
        .email("Invalid email address")
        .max(100, "Max 100 symbols")
        .required("Required"),
      phone: Yup.string()
        .min(13, "Must be completed")
        .matches(/^\+[0-9]{12}/g, "Must be completed")
        .required("Required"),
    }),
    onSubmit: values => {
      fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')
      .then(function (response) { return response.json(); })
      .then(function (data) {
        var formData = new FormData();  
        formData.append('position_id', +values.position); 
        formData.append('name', values.name); 
        formData.append('email', values.email); 
        formData.append('phone', values.phone); 
        formData.append('photo', values.file);
        fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', 
        { 
          method: 'POST', 
          body: formData, 
          headers: { 'Token': data.token, }, 
        }) 
          .then(function(response) { return response.json(); }) 
          .then(function(data) { if(data.success) { setPopupMessage({title:'Congratulations',message:"You have successfully passed the registration",});setOpen(true);getUsers() } else {setPopupMessage({title:'Error',message:data.message,}); setOpen(true)} }) 
          .catch(function(error) { console.log(error.message); setPopupMessage({title:'Error',message:data.message,}); setOpen(true)});
      })
    },
  });

  const uploadFile = (file) => {
    formik.setFieldValue("file", file);
  }

  const disabledButton = !formik.values.name || !formik.values.email || !formik.values.phone || !formik.values.file || !formik.isValid;



  const handleClose = () => {
    setOpen(false);
  };


  return (
    <>
      <div className="home_formBlock" id="signUp">
        <h1 className="home_formBlock-title">Register to get a work</h1>
        <h2 className="home_formBlock-subtitle">Your personal data is stored according to the Privacy Policy</h2>
        <form className="home_formBlock-form" onSubmit={formik.handleSubmit}>
          <FInput id={"name"} placeholder={"Your name"}  error={formik.touched.name && formik.errors.name} value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} />
          <FInput id={"email"} placeholder={"Email"}  error={formik.touched.email && formik.errors.email} value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
          <FInput id={"phone"} placeholder={"Phone"}  mask={"+380999999999"} error={formik.touched.phone && formik.errors.phone} value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} />
          <div className="home_formBlock-form-radios">
            <h3 className="home_formBlock-form-radios-title">Select your position</h3>
            <FormControl component="fieldset" >
              <RadioGroup value={formik.values.position} onChange={(event) => {formik.setFieldValue("position", event.currentTarget.value)}} >
                {positions.map((position) => (
                  <FRadio key={position.id} data={position} value={formik.values.position}/>
                ))}
              </RadioGroup>
            </FormControl>
          </div>
          <Upload uploadFile={uploadFile} />
          <SUButton type={"submit"} disabled={disabledButton} title={"Sign up"} />
        </form>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        classes={{
          root: classes.root, // class name, e.g. `classes-nesting-root-x`
          // input: classes.input, // class name, e.g. `classes-nesting-label-x
        }}
      >
        <DialogTitle id="alert-dialog-title">{popupMessage.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {popupMessage.message} 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <SUButton onClick={handleClose} title={"Great"}/>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default Form
