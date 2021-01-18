# Short - Open Source Link Shortening Website

This is an Open Source Link Shortening website written in Django and NuxtJS. With a single click, you can shorten any valid URL.

The website is decoupled into the frontend and the backend which is over API. The above package contains only the frontend! You can find the backend [here](https://github.com/iamoracle/short). A live demo of this project can be found on [netlify](https://angry-noyce-464939.netlify.app/).


## How to Deploy

Note: To proceed you must install NodeJS and Git on your system.

```bash

# clone the repository
$ git clone https://github.com/iamoracle/short-frontend.git

# navigate to the cloned directory
$ cd short-frontend

# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev


```

## Upload to a live server

Run the following commands to generate a distribution file that can be found at [dist](dist)

```bash

# build for production
$ npm run build

# launch server, not important!
$ npm run start

# generate static project
$ npm run generate
```

## Custom Settings to avoid errors!

To use your own custom backend/frontend

Go to [assets/config.js](assets/config.js) to modify the default URL of your frontend app. You can change it to whatever URL you deploy your frontend to.

Go to [nuxt.config.js](nuxt.config.js) to change the proxy URL to that of your backend.


## New to NuxtJS?

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Contribution

You are free to contribute by forking this repo!