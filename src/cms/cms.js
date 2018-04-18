import React from 'react'
import CMS from 'netlify-cms'
import 'netlify-cms/dist/cms.css'

import CategoryPagePreview from './preview-templates/CategoryPagePreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'

CMS.registerPreviewTemplate('categories', CategoryPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
