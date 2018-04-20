import React from 'react'
import PropTypes from 'prop-types'
import { SpecialOfferPageTemplate } from '../../templates/special-offer-page'

const SpecialOfferPagePreview = ({ entry }) => (
  <SpecialOfferPageTemplate
    title={entry.getIn(['data', 'title'])}
    image={entry.getIn(['data', 'image'])}
  />
)

SpecialOfferPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default SpecialOfferPagePreview
