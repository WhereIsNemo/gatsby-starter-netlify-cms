import React from 'react';
import OrderCallbackForm from '../OrderCallbackForm';
import { Tooltip } from 'react-tippy';

export default ({ btnClasses, additionalText, children }) => {
  const btnContent = children ? children : 'Заказать обратный звонок';

  return (
    <Tooltip
      html={<OrderCallbackForm additionalText={additionalText} />}
      position="bottom"
      trigger="click"
      interactive={true}
    >
      <button className={`btn ${btnClasses}`}>{btnContent}</button>
    </Tooltip>
  );
};
