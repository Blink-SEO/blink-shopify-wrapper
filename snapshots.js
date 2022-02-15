/**
 * Snapshot config
 *
 * List of pages we want to test
 * Name is optional as we will fallback to the url if it is not present.
 * We can also pass other options to each object if we want them to run on specific pages
 * see https://docs.percy.io/docs/cli-snapshot#usage for examples.
 */
const snapshotConfig = {
  site: 'https://blink-developer.myshopify.com', // Update this to the store you are working on
  previewID: 125258629288, // Update this to the theme ID you are working on
  devMode: false,
  pages: [
    // Example pages make sure to update these
    { name: 'Home', url: '/' },
    {
      name: 'About',
      url: '/pages/about-us/',
    },
  ],
};

/**
 * Create our snapshot urls list
 *
 * @param {object} - config object for our snapshot to run
 * @returns {array} - array of objects containing our page names and urls
 * @link https://docs.percy.io/docs/cli-snapshot
 */
const createSnapshotUrls = (config) => {
  const site = config.site || '';
  const previewID = config.previewID
    ? `?preview_theme_id=${config.previewID}`
    : '';

  // Attempt to warn user that they haven't changed the default settings
  if (config.devMode === false && site.includes('blink-developer')) {
    console.warn(
      'It looks like you are trying to run this on the blink-development site. Make sure to change your .env file to update the url. \nAlternatively change snapshotConfig.devMode to true.',
    );
    return;
  }

  return config.pages.map((page) => ({
    name: page.name || page.url,
    url: `${site}${page.url}${previewID}`,
  }));
};

module.exports = createSnapshotUrls(snapshotConfig);
