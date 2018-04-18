import CMS from 'netlify-cms';

import CategoryPagePreview from './preview-templates/CategoryPagePreview';

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('categories', CategoryPagePreview)
