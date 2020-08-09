import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { business, address, category, opentime, closetime, duration, maximum, longitude, latitude}
     } = this.props;
  const items = []
  for (const [index, value] of category.entries()) {
    if(value.state === true){
      items.push(<p key={index}>{value.title}</p>)
    }
  }
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Confirm User Data" />
            <List>
              <ListItem>
                <ListItemText primary="Business Name" secondary={business} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Address" secondary={address} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Latitude" secondary={latitude} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Longitude" secondary={longitude} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Category" secondary={items} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Opening time" secondary={opentime} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Closing time" secondary={closetime} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Duration" secondary={duration} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Maximum occupancy" secondary={maximum} />
              </ListItem>
            </List>
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
            >Confirm & Continue</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Confirm;
