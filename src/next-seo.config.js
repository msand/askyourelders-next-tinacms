import { description, title, url, oneLiner } from './data/config'

export default {
  title,
  description,
  canonical: url,
  openGraph: {
    type: 'website',
    url,
    title,
    description,
    images: [
      {
        url: url + '/static/opengraph.png',
        width: 1200,
        height: 630,
        alt: oneLiner,
      },
    ],
    site_name: title,
  },
}
