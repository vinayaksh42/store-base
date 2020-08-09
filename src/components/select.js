import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import dairy from './../dairy.jpg'
import salon from './../salon.png'
import grocery from './../grocery.jpg'
import doctor from './../doctor.png'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
  paper: {
    textAlign: 'center',
  },
}));

export default function CheckboxesGroup() {
    const classes = useStyles();
    const { values, handleChange } = this.props;
  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Category selection</FormLabel>
        <FormGroup>
            
        <div className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
                <FormControlLabel
                control={<Checkbox checked={values.dairy} onChange={handleChange('dairy')} name="Dairy" />}
                label="Dairy" style={tag}
                />
            </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
                <img src={dairy} alt="Logo" style={image}/>
            </Paper>
            </Grid>
        </Grid>
        </div>

        <div className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
                <FormControlLabel
            control={<Checkbox checked={values.salon} onChange={handleChange('salon')} name="Salon" />}
            label="Salon" style={tag}
          />
            </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
            <img src={salon} alt="Logo" style={image}/>
            </Paper>
            </Grid>
        </Grid>
        </div>

        <div className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
            <FormControlLabel
            control={<Checkbox checked={values.grocery} onChange={handleChange('grocery')} name="Grocery" />}
            label="Grocery" style={tag}
          />
            </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
                <img src={grocery} alt="Logo" style={image}/>
            </Paper>
            </Grid>
        </Grid>
        </div>
        <div className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
            <FormControlLabel
            control={<Checkbox checked={values.doctors} onChange={handleChange('doctors')} name="Doctors" />}
            label="Doctors" style={tag}
          />
            </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
                <img src={doctor} alt="Logo" style={image}/>
            </Paper>
            </Grid>
        </Grid>
        </div>
          
        </FormGroup>
      </FormControl>
    </div>
  );
}

const image = {
        border: '1px solid #ddd', /* Gray border */
        borderRadius: '4px',  /* Rounded border */
        width: '150px', /* Set a small width */
        height: '100px',
        margin: '5px',
        boxShadow: '0 0 2px 1px rgba(0, 140, 186, 0.5)',
        float: 'right',
}
const tag = {
    borderRadius: '4px',  /* Rounded border */
    width: '150px', /* Set a small width */
    height: '100px',
    margin: '5px',
    float: 'right',
}