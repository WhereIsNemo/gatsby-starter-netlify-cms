import React from 'react';
import { SpecialOfferPageTemplate } from '../../templates/special-offer-page';

const SpecialOfferPagePreview = ({ entry }) => (
  <SpecialOfferPageTemplate
    title={entry.getIn(['data', 'title'])}
    image={entry.getIn(['data', 'image'])}
  />
);

export default SpecialOfferPagePreview;
