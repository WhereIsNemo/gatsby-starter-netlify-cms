import React from 'react';
import OrderCallbackForm from '../OrderCallbackForm';
import {
  Tooltip,
} from 'react-tippy';

export default ({ btnClasses, additionalText}) => (
  <Tooltip
    html={<OrderCallbackForm additionalText={additionalText} />}
    position="bottom"
    trigger="click"
    interactive={true}
  >
    <button className={`btn ${btnClasses}`}>Заказать обратный звонок</button>
  </Tooltip>
);
