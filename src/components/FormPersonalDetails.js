import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Enter Personal Details" />
            <TextField
              id="time"
              label="Opening Time"
              type="time"
              defaultValue={values.opentime}
              onChange={handleChange('opentime')}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
            />
            <br />
            <TextField
              id="time"
              label="Closing Time"
              type="time"
              defaultValue={values.closetime}
              onChange={handleChange('closetime')}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
            />
            <br />
            <FormControl>
              <InputLabel id="demo-controlled-open-select-label">Appointment duration in minutes</InputLabel>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                value={values.duration}
                onChange={handleChange('duration')}
              >
                <MenuItem value={15}>15 minutes</MenuItem>
                <MenuItem value={30}>30 minutes</MenuItem>
                <MenuItem value={45}>45 minutes</MenuItem>
                <MenuItem value={60}>60 minutes</MenuItem>
              </Select>
            </FormControl>
            <br />
            <TextField
              placeholder="Maximum Occupancy At A Time"
              label="Maximum Occupancy At A Time"
              type="number"
              onChange={handleChange('maximum')}
              defaultValue={values.maximum}
              margin="normal"
              fullWidth
            />
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

export default FormPersonalDetails;
