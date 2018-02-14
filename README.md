# ember-scroll-preview

[![npm version](https://badge.fury.io/js/ember-scroll-preview.svg)](https://badge.fury.io/js/ember-scroll-preview)
[![Build Status](https://travis-ci.org/gowthamrm/ember-scroll-preview.svg?branch=master)](https://travis-ci.org/gowthamrm/ember-scroll-preview)
[![Ember Observer Score](https://emberobserver.com/badges/ember-scroll-preview.svg)](https://emberobserver.com/addons/ember-scroll-preview)

A simple ember addon to preview the scroll progress of the page.

## Overview

Based on the page's scroll, the current view port position is highlighted and shown on the image of the entire page. This addon uses [html2canvas](https://www.npmjs.com/package/html2canvas) to take screenshot of the whole page once it is rendered.

[DEMO](https://gowthamrm.github.io/ember-scroll-preview/)

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


## Collaborating on this project

### Installation

* `git clone <repository-url>` this repository
* `cd ember-scroll-preview`
* `npm install`

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running Tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `npm test` – Runs `ember try:each` to test your addon against multiple Ember versions

### Building

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
