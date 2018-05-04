import React from 'react';
import axios from 'axios';

export default class OrderCallbackForm extends React.Component {
  handleFormSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formDataObject = {};
    
    formData.forEach((value, key) => formDataObject[key] = value);

    console.log('formDataObject');
    console.log(formDataObject);

    const axiosAWS = axios.create({
      baseURL: 'https://ypxjjkrpa9.execute-api.us-east-1.amazonaws.com/220PlusSMS',
      timeout: 10000,
      headers: {
        "Content-Type": "text/plain; charset=UTF-8"
      }
    });

    // axiosAWS.post('/sendCallbackSMS', {
    //   phoneNumber: formDataObject.phoneNumber,
    // })
    // .then(function (response) {
    //   console.log('response');
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log('error');
    //   console.log(error);
    // });
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input name="phoneNumber" type="text" />
        <input type="submit" />
      </form>
    );
  }
}
