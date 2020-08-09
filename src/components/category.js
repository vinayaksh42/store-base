import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
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


export class Category extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, check } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Enter User Details" />

            <div >
      <FormControl component="fieldset" >
        <FormLabel component="legend">Category selection</FormLabel>
        <FormGroup>
            
        <div >
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
            <Paper >
                <FormControlLabel
                control={<Checkbox checked={values.category[0].state} onChange={check(0)} name="Dairy" />}
                label="Dairy" style={tag}
                />
            </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
            <Paper >
                <img src={dairy} alt="Logo" style={image}/>
            </Paper>
            </Grid>
        </Grid>
        </div>

        <div >
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
            <Paper >
                <FormControlLabel
            control={<Checkbox checked={values.category[1].state} onChange={check(1)} name="Salon" />}
            label="Salon" style={tag}
          />
            </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
            <Paper >
            <img src={salon} alt="Logo" style={image}/>
            </Paper>
            </Grid>
        </Grid>
        </div>

        <div >
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
            <Paper >
            <FormControlLabel
            control={<Checkbox checked={values.category[2].state} onChange={check(2)} name="Grocery" />}
            label="Grocery" style={tag}
          />
            </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
            <Paper >
                <img src={grocery} alt="Logo" style={image}/>
            </Paper>
            </Grid>
        </Grid>
        </div>
        <div >
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
            <Paper >
            <FormControlLabel
            control={<Checkbox checked={values.category[3].state} onChange={check(3)} name="Doctors" />}
            label="Doctors" style={tag}
          />
            </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
            <Paper >
                <img src={doctor} alt="Logo" style={image}/>
            </Paper>
            </Grid>
        </Grid>
        </div>
          
        </FormGroup>
      </FormControl>
    </div>
            <br />
            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>

            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
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





export default Category;

