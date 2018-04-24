import React from 'react'
import { AboutCompanyPageTemplate } from '../../templates/about-company-page'

const AboutCompanyPagePreview = ({ entry }) => (
  <AboutCompanyPageTemplate
    title={entry.getIn(['data', 'title'])}
    body={entry.getIn(['data', 'body'])}
  />
)

export default AboutCompanyPagePreview
