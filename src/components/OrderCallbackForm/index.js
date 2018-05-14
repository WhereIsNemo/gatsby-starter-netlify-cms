import React from 'react';
import axios from 'axios';
import styles from './styles.module.scss';

export default class OrderCallbackForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      submitResult: null,
    };
  }

  handleFormSubmit = e => {
    e.preventDefault();

    const component = this;
    const formData = new FormData(e.target);
    const formDataObject = {};

    formData.forEach((value, key) => (formDataObject[key] = value));

    const axiosAWS = axios.create({
      baseURL:
        'https://ypxjjkrpa9.execute-api.us-east-1.amazonaws.com/220PlusSMS',
      timeout: 10000,
      headers: {
        'Content-Type': 'text/plain; charset=UTF-8',
      },
    });

    component.setState({ submitResult: 'pending' });

    axiosAWS
      .post('/sendCallbackSMS', {
        phoneNumber: formDataObject.phoneNumber,
      })
      .then(function(response) {
        component.setState({ submitResult: 'success' });

        setTimeout(() => {
          component.props.closeTippy();
          component.setState({ submitResult: null });
        }, 5000);
      })
      .catch(function(error) {
        component.setState({ submitResult: 'error' });
      });
  };

  render() {
    const { submitResult } = this.state;

    return (
      <div className={styles.formWrapper}>
        {submitResult !== 'success' && (
          <form
            className={styles.form}
            onSubmit={this.handleFormSubmit}
            disabled={submitResult === 'pending'}
          >
            <label className={styles.label} htmlFor="callbackSmsPhoneNumber">
              Ваш телефонный номер:
            </label>
            <input
              id="callbackSmsPhoneNumber"
              className={styles.input}
              name="phoneNumber"
              type="tel"
              required
            />
            {submitResult === 'error' && (
              <div className={`${styles.message} ${styles.messageError}`}>
                При отправке произошла ошибка. Пожалуйста, попробуйте через
                некоторое время повторить попытку или свяжитесь с нами другим
                способом: по телефону, WhatsUp, Viber или Telegram -
                +7-929-364-46-00, или почте - 220pluse@gmail.com.
              </div>
            )}
            <button
              type="submit"
              className={`btn btn--outline ${styles.submitBtn}`}
            >
              Заказать
            </button>
          </form>
        )}
        {submitResult === 'success' && (
          <div className={`${styles.message} ${styles.messageSuccess}`}>
            Заказ произошёл успешно. Мы вам перезвоним в ближайшее время.
          </div>
        )}
      </div>
    );
  }
}
