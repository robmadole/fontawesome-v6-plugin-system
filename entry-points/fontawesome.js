import {
  register,
  PromisePonyfill,
  InjectCSS,
  ReplaceElements,
  Layers,
  LayersCounter,
  LayersText,
  PseudoElements,
  MutationObserver,
  PowerTransforms,
  Masks,
  MissingIconIndicator,
  SvgSymbols
} from '@fortawesome/fontawesome-svg-core/plugins'

const fontAwesomeApi = register([
  // PromisePonyfill,
  // InjectCSS,
  ReplaceElements,
  // Layers,
  // LayersCounter,
  // LayersText,
  // PseudoElements,
  // MutationObserver,
  // PowerTransforms,
  // Masks,
  // MissingIconIndicator,
  // SvgSymbols
], { mixoutsTo: {} })

// Since you only used ReplaceElements, Rolup will use tree-shaking to eliminate the imported
// plugins that you didn't use.

// The `@fortawesome/fontawesome-svg-core` doesn't automatically do anything. You have to
// perform the actions manually.

// If you want to include the InjectCSS plugin we can call this:
//fontAwesomeApi.dom.insertCss()

document.addEventListener('DOMContentLoaded', () => {
  // This will search the DOM and replace <i> tags with icons
  // Waiting for DOMContentLoaded makes sure the <body> has been parsed
  fontAwesomeApi.dom.i2svg()

  // If you include the MutationObserver plugin you can watch the DOM for changes
  //fontAwesomeApi.dom.watch()
})
