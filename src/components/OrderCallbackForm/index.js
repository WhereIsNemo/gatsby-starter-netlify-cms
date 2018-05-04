import React from 'react';
import axios from 'axios';
import styles from './styles.module.scss';

export default class OrderCallbackForm extends React.Component {
  handleFormSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formDataObject = {};
    
    formData.forEach((value, key) => formDataObject[key] = value);

    const axiosAWS = axios.create({
      baseURL: 'https://ypxjjkrpa9.execute-api.us-east-1.amazonaws.com/220PlusSMS',
      timeout: 10000,
      headers: {
        "Content-Type": "text/plain; charset=UTF-8"
      }
    });

    axiosAWS.post('/sendCallbackSMS', {
      phoneNumber: formDataObject.phoneNumber,
      "g-recaptcha-response": formDataObject["g-recaptcha-response"],
    });
  }

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="callbackSmsPhoneNumber">Ваш телефонный номер:</label>
          <input 
            id="callbackSmsPhoneNumber" 
            className="form-control" 
            name="phoneNumber" 
            type="tel" 
            required 
          />
        </div>
        <div 
          className="g-recaptcha"
          data-sitekey="6LdqK1cUAAAAAHRs1kA5qafNv7KlXle3Vq5v5TLO"
        ></div>
        <button 
          type="submit"
          className="btn btn-primary"
        >Заказать</button>
      </form>
    );
  }

  componentDidMount() {
    const $scriptjs = require('scriptjs');

    $scriptjs('https://www.google.com/recaptcha/api.js', 'orderCallbackRecaptcha');
  }
}
