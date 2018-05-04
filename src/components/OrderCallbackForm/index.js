import React from 'react';
import axios from 'axios';
import styles from './styles.module.scss';

export default class OrderCallbackForm extends React.Component {
  constructor(props) {
    super(props);

    this.formSubmitBtn = React.createRef();
  }

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
    })
    .then(function (response) {
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="callbackSmsPhoneNumber">Ваш телефонный номер:</label>
          <input id="callbackSmsPhoneNumber" className="form-control" name="phoneNumber" type="text" />
        </div>
        <button ref={this.formSubmitBtn} type="submit" className="btn btn-primary">Заказать</button>
      </form>
    );
  }

  componentDidMount() {
    const $scriptjs = require('scriptjs');

    $scriptjs('https://www.google.com/recaptcha/api.js', 'orderCallbackRecaptcha');

    $scriptjs.ready('orderCallbackRecaptcha', () => {
      this.formSubmitBtn.current.insertAdjacentHTML('beforebegin', '<div class="g-recaptcha" data-sitekey="6LdqK1cUAAAAAHRs1kA5qafNv7KlXle3Vq5v5TLO"></div>')
    })
  }
}
