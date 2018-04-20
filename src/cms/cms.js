import React from 'react'
import CMS from 'netlify-cms'
import 'netlify-cms/dist/cms.css'

import CategoryPagePreview from './preview-templates/CategoryPagePreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import SpecialOfferPagePreview from './preview-templates/SpecialOfferPagePreview'

CMS.registerPreviewTemplate('categories', CategoryPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('special-offers', ProductPagePreview)
