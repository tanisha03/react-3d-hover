# react-3d-hover

[![npm version][npm-badge]][npm-url]
[![npm bundle size][size-badge]][npm-url]

_"A tiny package to hover smooth as butter for **React**"_


## Requirements

This package uses hooks internally so it has a requirement of React version 16.8 or above.

## Installation

This package is hosted on [npm](https://www.npmjs.com/package/react-3d-hover)

`npm i react-3d-hover`

## Usage

This component is imported and used like any standard React component

```jsx
import React from 'react';
import Hover from 'react-3d-hover';

const App = () => {
  return (
    <div class="App">
      <Hover></Hover>
    </div>
  );
};

export default App;
```

## Props

Here is a list of available options with their defaults:

```js
style:                  {}      // A jsx style object that will be applied to the root element
max:                    10      // Max tilt rotation (degrees)
perspective:            1000    // Transform perspective, the lower the more extreme the tilt gets.
scale:                  1       // 2 = 200%, 1.5 = 150%, etc..
speed:                  400     // Speed of the enter/exit transition
easing:                 "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit
onMouseEnter:           (e) => {} // A callback function for the mouse enter event 
onMouseMove:            (e) => {} // A callback function for the mouse move event 
onMouseLeave:           (e) => {} // A callback function for the mouse leave event 
```

**Example:**

```jsx
<Hover scale={1.2} perspective={900} speed={500}>
  <div>Hello World</div>
</Hover>
```


## License

[MIT License](./LICENSE)

[npm-url]: https://www.npmjs.com/package/react-3d-hover
[license-url]: ./LICENSE
[npm-badge]: https://badge.fury.io/js/react-3d-hover.svg
[size-badge]: https://img.shields.io/bundlephobia/minzip/react-3d-hover.svg
