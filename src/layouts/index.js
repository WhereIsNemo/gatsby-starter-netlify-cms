import React from 'react';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Services from '../components/Services';
import './all.scss';

export default class TemplateWrapper extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <React.Fragment>
        <Helmet>
          <title>220 Plus</title>
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans|Roboto:700&amp;subset=cyrillic"
            rel="stylesheet"
          />
        </Helmet>
        <Header />
        <div>{children()}</div>
        <Services />
        <Footer />
      </React.Fragment>
    );
  }

  componentDidMount() {
    // Yandex metrika
    (function (d, w, c) {
      (w[c] = w[c] || []).push(function () {
        try {
          w.yaCounter48701150 = new Ya.Metrika({
            id: 48701150,
            clickmap: true,
            trackLinks: true,
            accurateTrackBounce: true,
            webvisor: true
          });
        } catch (e) { }
      });

      var n = d.getElementsByTagName("script")[0],
        s = d.createElement("script"),
        f = function () { n.parentNode.insertBefore(s, n); };
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://mc.yandex.ru/metrika/watch.js";

      if (w.opera == "[object Opera]") {
        d.addEventListener("DOMContentLoaded", f, false);
      } else { f(); }
    })(document, window, "yandex_metrika_callbacks");

    // Jivosite integration
    (function () {
      var widget_id = 'E7x4zDRxnb'; var d = document; var w = window; function l() {
        var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = '//code.jivosite.com/script/widget/' + widget_id; var ss = document.getElementsByTagName('script')[0]; ss.parentNode.insertBefore(s, ss);
      } if (d.readyState == 'complete') { l(); } else { if (w.attachEvent) { w.attachEvent('onload', l); } else { w.addEventListener('load', l, false); } }
    })();
  }
}
