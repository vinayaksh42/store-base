import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import CurrentLocation from './loaction';

export class MapContainer extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
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
            style={{overflow: 'hidden'}}
          >
            <AppBar title="Enter User Details" />
            <TextField
              placeholder="Enter Your Business Name"
              label="Business Name"
              onChange={handleChange('business')}
              defaultValue={values.business}
              margin="normal"
              fullWidth
              onClick={this.props.callback(this.state.selectedPlace)}
            />
            <br />
            <TextField
              placeholder="Enter Your Address"
              label="Address"
              onChange={handleChange('address')}
              defaultValue={values.address}
              margin="normal"
              fullWidth
            />
            <br />
            
           
            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>

             <h1>Select your location and click on the red indicator to confirm</h1>
            <CurrentLocation
              style={mapStyles}
              centerAroundCurrentLocation
              google={this.props.google}
            >
              <Marker onClick={this.onMarkerClick} name={'current location'} />
              <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}
                onClose={this.onClose}
              >
                <div>
                  <h4>{this.state.selectedPlace.name}</h4>
                </div>
              </InfoWindow>
            </CurrentLocation>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

const mapStyles = {
  overflow: 'hidden'
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCiVq-vTNOjmC3fcgNV_Kuj-owN8TKVwWw'
})(MapContainer);
