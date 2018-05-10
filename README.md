

This is a template for setting up webpack, for use with babel and generally for use with React &c.

It assumes `yarn` rather than npm, though I suspect it doesn't really matter.


## Currently Working

Webpack is currently working, and `yarn dev` will bring up the webpack-dev-server.

Babel is configured in `.babelrc`.

As a demo app, we currently edit the DOM two different ways: vanillajs and also React.  See `src/index.js`,
`src/vanilla_dom_edit`, and `src/App.jsx`.

It knows how to parse CSS/SCSS/SASS, as long as that is `require`d somewhere in the dependency tree.

There's the barest sketch of a server.js, and webpack-dev-server knows how to proxy `/api` to it.


## Wishlist

Linter

Tet-runner, sample tests, etc.

Might make sense to add a client dir and a server dir and have them separate.

Currently we can production-build with just `yarn run webpack`.  This is a bit primitive.
  1) probably it should copy the public files as well, over to build
  2) if I add a server directory with passthrough, the prod-build version of that will be quite different



---

Thanks to:

* [David VanDusen](https://github.com/davidvandusen/react-webpack-boilerplate)
* Karl Jensen


