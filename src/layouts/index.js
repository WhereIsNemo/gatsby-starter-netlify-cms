import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Services from '../components/Services';
import './all.scss';

export default class TemplateWrapper extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <React.Fragment>
        <Header />
        <div>{children()}</div>
        <Services />
        <Footer />
      </React.Fragment>
    );
  }

  componentDidMount() {
    // Fonts
    const loadCSS = require('fg-loadcss').loadCSS;
    loadCSS(
      'https://fonts.googleapis.com/css?family=Open+Sans:400,600&amp;subset=cyrillic'
    );
    loadCSS('https://fonts.googleapis.com/css?family=Roboto&amp;text=₽');

    // Google analytics
    const $scriptjs = require('scriptjs');
    $scriptjs(
      'https://www.googletagmanager.com/gtag/js?id=UA-118409157-1',
      'googleAnalytics'
    );
    $scriptjs.ready('googleAnalytics', () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag('js', new Date());

      gtag('config', 'UA-118409157-1');
    });

    // Yandex metrika
    (function(d, w, c) {
      (w[c] = w[c] || []).push(function() {
        try {
          w.yaCounter48701150 = new Ya.Metrika({
            id: 48701150,
            clickmap: true,
            trackLinks: true,
            accurateTrackBounce: true,
            webvisor: true,
          });
        } catch (e) {}
      });

      var n = d.getElementsByTagName('script')[0],
        s = d.createElement('script'),
        f = function() {
          n.parentNode.insertBefore(s, n);
        };
      s.type = 'text/javascript';
      s.async = true;
      s.src = 'https://mc.yandex.ru/metrika/watch.js';

      if (w.opera == '[object Opera]') {
        d.addEventListener('DOMContentLoaded', f, false);
      } else {
        f();
      }
    })(document, window, 'yandex_metrika_callbacks');
  }
}
