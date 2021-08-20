# The New Plugins API

You need an active Font Awesome Pro subscription to use this example because version 6 is
only available to Pro subscribers right now.

1. Go to https://fontawesome.com/account
1. Scroll to the "Pro Package Token"
1. Copy this value
1. Run `export FONTAWESOME_NPM_AUTH_TOKEN=[TOKEN YOU JUST COPIED]`

You can also run `npm` like this if you don't want to export your token:

```
FONTAWESOME_NPM_AUTH_TOKEN=[TOKEN YOU JUST COPIED] npm run start.fontawesome
```

## Install the dependencies

```
npm install
```

## What are we doing here?

Version 6 of Font Awesome includes a new Plugins API that allows you to
pick-n-choose the features that you want. Folks asked quite a few times for
this, and we've delivered a system that can cut the final file size of the Font
Awesome SVG JavaScript library (the engine part) to less than half its original
size.

## How?

The most useful plugin is `ReplaceElements`. It searches the DOM for `<i>` tags and
replaces those with `<svg>` where appropriate.

**See entry-points/fontawesome.js**

```javascript
import {
  ReplaceElements,
} from '@fortawesome/fontawesome-svg-core/plugins'

const fontAwesomeApi = register([
  ReplaceElements,
], { mixoutsTo: {} })

document.addEventListener('DOMContentLoaded', () => {
  // https://fontawesome.com/v6.0/docs/apis/javascript/methods/dom-i2svg
  fontAwesomeApi.dom.i2svg()
})
```

## Developing with this example

Included is a local **web server** and **Rollup.js running in watch mode**.

In one terminal window:

```
npm run start.fontawesome
```

In another terminal window:

```
npm run start.http
```

## Building the `dist/fontawesome.js` file

This is running Rollup just like `start.fontawesome` does except it builds it
once and exits (doesn't watch for changes).

```
npm run build.fontawesome
```
