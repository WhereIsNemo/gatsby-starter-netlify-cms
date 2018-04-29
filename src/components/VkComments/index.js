import React from 'react';

export default class VkComments extends React.Component {
  render() {
    return <div id="vk_comments" />;
  }

  componentDidMount() {
    const $script = require('scriptjs');

    $script('//vk.com/js/api/openapi.js?154', 'vkComments');

    $script.ready('vkComments', () => {
      VK.init({ apiId: 6464457, onlyWidgets: true });
      VK.Widgets.Comments('vk_comments', { limit: 10, attach: 'photo' });
    });
  }
}
