require('dotenv').config();

// List of pages we want to test
// Name is optional as we will fallback to the url if it is not present.
// We can also pass other options to each object if we want them to run on specific pages
// see https://docs.percy.io/docs/cli-snapshot#usage for examples
const pagesConfig = [
  { name: 'Home', url: '/' },
  {
    name: 'About',
    url: '/pages/about-us/',
  },
];

/**
 * Create our snapshot urls list
 *
 * @link https://docs.percy.io/docs/cli-snapshot
 * @returns {array} array of objects containing our page names and urls
 */
const createSnapshotUrls = (pages) => {
  const store = process.env.STORE_URL || '';
  const previewID = process.env.PREVIEW_ID
    ? `?preview_theme_id=${process.env.PREVIEW_ID}`
    : '';

  // Attempt to warn user that they haven't changed the default settings
  if (!process.env.LOCAL_MODE && store.includes('blink-developer')) {
    console.warn(
      'It looks like you are trying to run this on the blink-development store. Make sure to change your .env file to update the url. \nAlternatively add LOCAL_MODE=true to your .env file',
    );
    return;
  }

  return pages.map((page) => ({
    name: page.name || page.url,
    url: `${store}${page.url}${previewID}`,
  }));
};

module.exports = createSnapshotUrls(pagesConfig);
