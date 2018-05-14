import React from 'react';
import OrderCallbackForm from '../OrderCallbackForm';
import { Tooltip } from 'react-tippy';

export default class OrderCallbackButton extends React.Component {
  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    this.tooltip = React.createRef();
  }

  closeTippy = () => {
    this.tooltip.current.hideTooltip();
  };

  render() {
    const { btnClasses, additionalText, children } = this.props;
    const btnContent = children ? children : 'Заказать обратный звонок';

    return (
      <Tooltip
        html={
          <OrderCallbackForm
            additionalText={additionalText}
            closeTippy={this.closeTippy}
          />
        }
        position="bottom"
        trigger="click"
        interactive={true}
        ref={this.tooltip}
      >
        <button className={`btn ${btnClasses}`}>{btnContent}</button>
      </Tooltip>
    );
  }
}
