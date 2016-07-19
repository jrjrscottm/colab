Getting Started
============================

Installation
------------

1. Install Node.js
    - [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
2. Run `npm install` to install npm packages locally
3. Run `gulp watch`

Development
-----------

This application uses a simple express server to serve HTML, CSS and Javascript content.

The backend serves `views/index.html`, along with and javascript and css, at `http://localhost:9999`.

Livereload is enabled, the page will reload with updates to any files in `public/` or `views/`

On the back-end,
- the app starts at `server.js`
- add frameworks and packages in `package.json`
- store configuration variables in `.env`

On the front-end,
- edit `public/client.js`, `public/style.css` and `public/index.html`
- add images to `assets`