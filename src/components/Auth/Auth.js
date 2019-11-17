import React from 'react';
import { FormGroup, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: "20px"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    alignSelf: 'center',

    width: 400,
  },
  button: {
    margin: theme.spacing(1),
    width: 400,
    alignSelf: 'center'
  },
  input: {
    display: 'none',
  }
}));


const Auth = () => {
  const classes = useStyles();
  return (
    <FormGroup className={classes.container}>
      <TextField
        error
        id="outlined-error-helper-text"
        label="Error"
        defaultValue="Hello World"
        helperText="Incorrect entry."
        className={classes.textField}
        margin="normal"
        variant="outlined"
      />
      <TextField
        error
        id="outlined-error-helper-text"
        label="Error"
        defaultValue="Hello World"
        helperText="Incorrect entry."
        className={classes.textField}
        margin="normal"
        variant="outlined"
      />
      <Button variant="contained" color="primary" className={classes.button}>
        Primary
      </Button>
      <Button variant="contained" color="secondary" className={classes.button}>
        Secondary
      </Button>
    </FormGroup>);
};

export default Auth;
