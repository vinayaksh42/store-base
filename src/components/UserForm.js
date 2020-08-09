import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';
import Category from './category';

export class UserForm extends Component {
  state = {
    step: 1,
    business: '',
    longitude: 1,
    latitude: 1,
    address: '',
    category: [
      {
        id: 0,
        state: false,
        title: 'dairy'
      },
      {
        id: 1,
        state: false,
        title: 'salon'
      },
      {
        id: 2,
        state: false,
        title: 'grocery'
      },
      {
        id: 3,
        state: false,
        title: 'doctors'
      },
    ],
    opentime: '09:00',
    closetime: '17:00',
    duration: '',
    maximum: 0
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
    console.log(this.state)
  };

  check = input => e => {
    this.setState({ category: this.state.category.map(service => {
      if(service.id === input){
        service.state = !service.state
      }
      return service;
    })});
    console.log(input)
    console.log(this.state)
  };

  callback = input => e => {
    this.setState({
      longitude: input.mapCenter.lng,
      latitude: input.mapCenter.lat
    });
    console.log(this.state)
  };

  render() {
    const { step } = this.state;
    const { business, address, category, opentime, closetime, duration, maximum, longitude, latitude } = this.state;
    const values = { business, category, address, opentime, closetime, duration, maximum, longitude, latitude };

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
            callback={this.callback}
          />
        );
      case 2:
          return (
            <Category
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              check={this.check}
              values={values}
            />
          );  
      case 3:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 5:
        return <Success />;
      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }
}

export default UserForm;
