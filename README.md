# ember-scroll-preview

A simple ember addon to preview the scroll progress of the page.

## Overview

Based on the page's scroll, the current view port position is highlighted and shown on the image of the entire page. This addon uses [html2canvas](https://www.npmjs.com/package/html2canvas) to take screenshot of the whole page once it is rendered.

## Installation
```handlebars
  ember install ember-scroll-preview
```

## Usage

```handlebars
  {{#ember-scroll-preview
    position="top-right"
    offsetTop=85
  }}
    <!-- application content -->
    {{outlet}}
  {{/ember-scroll-preview}}

```
Note: Add the component in the application template to get the scroll preview for all the routes accessed inside the application.

## Parameters

* `offsetTop` to set the top offset based on the scroll container's top position inside the page.
* `position` to specify the position of the scroll preview container.

Available positions,

`top` `left` `top-left` `left-top` 

`bottom` `bottom-left` `left-bottom`

`right` `top-right` `right-top`

`bottom-right` `right-bottom`


## Contributing

### Installation

* `git clone <repository-url>` this repository
* `cd ember-scroll-preview`
* `npm install`

### Running Addon

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

### Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
