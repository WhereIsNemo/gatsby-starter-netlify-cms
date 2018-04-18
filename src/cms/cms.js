import CMS from 'netlify-cms';

import CategoryPagePreview from './preview-templates/CategoryPagePreview';
import CategoryPagePreview from './preview-templates/ProductPagePreview';

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('categories', CategoryPagePreview)
CMS.registerPreviewTemplate('categories', ProductPagePreview)
