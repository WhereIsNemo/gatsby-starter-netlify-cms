import React from 'react';
import Helmet from 'react-helmet';

const NotFoundPage = () => (
  <div className="container-fluid">
    <Helmet>
      <title>220 Plus - Страница не найдена</title>
      <meta name="robots" content="noindex" />
    </Helmet>
    <div className="section">
      <h1 className="section__title">Страница не найдена</h1>
      <p>Вы пытались перейти на страницу, которой нет</p>
    </div>
  </div>
);

export default NotFoundPage;
