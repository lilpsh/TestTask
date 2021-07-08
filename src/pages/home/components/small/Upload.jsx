import React from 'react'
import { useState,useEffect } from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import SUButton from './SUButton';
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

const Upload = (props) => {
  const classes = useStyles();

  const [error, setError] = useState("")
  const [fileName, setFileName] = useState('')

  // const [file, setFile] = useState({})

  const handleFile = (data) => {
    const file = data.target.files[0];
    // console.log(file);

    if(!file){
      return
    }
    if(file.type !== 'image/jpg' && file.type !== 'image/jpeg'){
      setError("Uploaded file should be jpg/jpeg image");
      return
    }
    if(file.size > 5000000){
      setError("Uploaded photo`s size must not exceed 5MB");
      return
    }
    let img = new Image()
    img.src = window.URL.createObjectURL(file)
    img.onload = () => {
      if(img.width < 70 && img.height < 70){
        setError("Uploaded photo`s resolution must be at least 70x70px");
        return
      }

      setFileName(file.name);
      setError("");
      props.uploadFile(file);
    }
  }

  const [open, setOpen] = useState(false);



  const handleClose = () => {
    setOpen(false);
  };


  return (
    <>
      <div className={!error ? 'home_formBlock-form-upload-wrapper' : 'home_formBlock-form-upload-wrapper home_formBlock-form-upload-wrapper-error'}>
        <label className="home_formBlock-form-upload-label" htmlFor='file'>
          <div className="home_formBlock-form-upload-label-button">
            Upload
          </div>
          <div className={!fileName ? "home_formBlock-form-upload-label-text" : "home_formBlock-form-upload-label-text home_formBlock-form-upload-label-text-uploaded"}>
            <p>{fileName ? fileName : "Upload your photo" }</p>
          </div>
          <input onChange={handleFile} style={{display:'none'}} type="file" id='file' />
        </label>
        <p className="home_formBlock-form-upload-label-error">{error || "‎"}</p>
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
        <DialogTitle id="alert-dialog-title">{"Congratulations"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You have successfully passed the registration 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <SUButton onClick={handleClose} title={"Great"}/>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default Upload
