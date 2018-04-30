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
    // Jivosite integration
    (function () {
      var widget_id = 'E7x4zDRxnb'; var d = document; var w = window; function l() {
        var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = '//code.jivosite.com/script/widget/' + widget_id; var ss = document.getElementsByTagName('script')[0]; ss.parentNode.insertBefore(s, ss);
      } if (d.readyState == 'complete') { l(); } else { if (w.attachEvent) { w.attachEvent('onload', l); } else { w.addEventListener('load', l, false); } }
    })();
  }
}
