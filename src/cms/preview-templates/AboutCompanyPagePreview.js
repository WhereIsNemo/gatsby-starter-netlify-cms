import React from 'react'
import PropTypes from 'prop-types'
import { AboutCompanyPageTemplate } from '../../templates/about-company-page'

const AboutCompanyPagePreview = ({ entry }) => (
  <AboutCompanyPageTemplate
    title={entry.getIn(['data', 'title'])}
    body={entry.getIn(['data', 'body'])}
  />
)

AboutCompanyPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default AboutCompanyPagePreview
