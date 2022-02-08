# Blink SEO Shopify developement wrapper

This is a development wrapper intended for working with Shopify themes, using the [Shopify CLI](https://shopify.dev/themes/tools/cli).

## Dependencies

To work with Shopify stores using this wrapper make sure to have the following installed

- [Shopify CLI](https://shopify.dev/themes/tools/cli/getting-started)
- [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

## Getting Started

Start by running npm install to set up the development dependencies you'll need.

```bash
npm install
```

It's generally a good idea to check who you are logged in as before you start any work.

```bash
shopify whoami
```

## Connecting to Shopify

Will output the store you are currently logged into and who you are logged in as. The output might look something like:

```bash
Logged into store blink-developer.myshopify.com in partner organization Blink
```

### Log into a store

Log into the store you want to work on with the `shopify login --store <SUBDOMAIN>.myshopify.com` command. Where the subdomain is the subdomain name of your store e.g.

```bash
shopify login --store blink-developer.myshopify.com
```

This will take you to an auth page in your browser. Use that to log into your account.

## Downloading a theme and working locally

Download an existing theme to your local machine using:

```bash
npm run pull
```

This will list out the themes currently on the store. Use your terminal to select the one you want to work on.

Once your theme has downloaded you can run:

```bash
npm run watch
```

to generate the following:

- A link to your development theme at http://127.0.0.1:9292. This URL can hot reload local changes to CSS and sections, or refresh the entire page when a file changes, allowing you to preview changes in real time using the store's data.
- A link to the online store editor for the theme.
- A preview link that you can share with other developers.

## Pushing your changes

Upload your local theme files to Shopify, overwriting the remote theme if specified.

```bash
npm run push
```

## File structure

You will see that the wrapper comes with two `assets/blink-` files.

To keep from pushing loads of file changes to our repo and having to handle many linting errors that may occur from the variety of themes we work with.

Any custom work we do that involves styles or scripts should go within these files.

Don't forget to link them within the `theme.liquid` file!

## Linting your files

Linting your Liquid, JS and CSS is handled using the NPM command

```bash
npm run lint
```

## Links

- [Shopify CLI theme commands](https://shopify.dev/themes/tools/cli/theme-commands)
- [component-based Liquid examples](https://shopify.github.io/liquid-code-examples/?shpxid=12a8706a-5F35-438E-0984-5DFF92F45F89)
- [Liquid reference](https://shopify.dev/api/liquid)
