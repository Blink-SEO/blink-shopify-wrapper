# Blink SEO Shopify developement wrapper - Online Store 1.0

_Only works with Online Store 1.0_

This is a development wrapper intended for working with Shopify themes, using [Themekit](https://shopify.dev/themes/tools/theme-kit) and browsersync to handle changes.

## Getting Started

Start by running npm install to set up the development dependencies you'll need.

This includes themekit for local online store 1.0 development.

```bash
npm install
```

## Connecting to Shopify

You will need to make sure you have a themekit password set up before you start here. There are steps in the [Shopify dev docs](https://shopify.dev/themes/tools/theme-kit/access) with info on how to generate this.

Once you have your password generated run the following command to list out all of the themes available in the store you're working on.

```bash
theme get --list --password=[your-theme-kit-password] --store="[your-store.myshopify.com]"
```

Find the theme ID you want to use for development then run

```bash
theme get --password=[your-theme-kit-password] --store="[your-store.myshopify.com]" --themeid=[your-theme-id]
```

This will retreive the theme files as well as generate a simple config.yml file.

Navigate to you config.yml file and add the `ignore_files` line and production section as per the example below.

Your config file should look something like:

```yml
# config.yml

development:
  password: [your-theme-kit-passwor]
  theme_id: '[your-theme-id]'
  store: [your-store.myshopify.com]
  ignore_files:
    - config/settings_data.json
production:
  password: [your-theme-kit-passwor]
  theme_id: '[your-live-theme-id]'
  store: [your-store.myshopify.com]
  timeout: 60s
```

_Note: The theme ID will be different for your production settings, refer back to the list of IDs you generated at the start._

Rename the .env.sample, containing the shopify url and with the preview id, to .env and add the route to your localhost ssl key and certificate files (the location may be different for you). These are important for browsersync so it can launch the correct shopify theme. For more info on localhost ssl check out [web.dev](https://web.dev/how-to-use-local-https/).

It should look something like this:

```
# .env

PROXY_URL=https://your-store.myshopify.com.myshopify.com/?preview_theme_id=your-theme-id
SSL_KEY=/etc/ssl/localhost/localhost.key
SSL_CRT=/etc/ssl/localhost/localhost.crt
```

## Available CLI commands

- `npm run develop`: Opens and watches the development theme using browsersync to sync and watch for changes. _Because themekit has to push updated files up to the Shopify server there might be a second delay between your changes and the browser reloading. If your changes aren't immediately obvious try refreshing the browser manually._
- `npm run build`: Will optimise the css and js files and push the changes up to the production theme set in the `config.yml` file.
- `npm run lint`: Will lint the files for formatting errors

## Links

- [component-based Liquid examples](https://shopify.github.io/liquid-code-examples/?shpxid=12a8706a-5F35-438E-0984-5DFF92F45F89)
- [Liquid reference](https://shopify.dev/docs/themes/liquid/reference)
- [Config reference](https://shopify.dev/tools/theme-kit/configuration-reference)
