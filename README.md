# gatsby-plugin-fabric-ui

Gatsby plugin for the [Office Fabric UI framework](https://github.com/OfficeDev/office-ui-fabric-react). Adds [the boilerplate needed for server-side rendering](https://github.com/OfficeDev/office-ui-fabric-react#server-side-rendering), which Gatsby performs during `gatsby build`.

## Installation

```sh
npm install office-ui-fabric-react gatsby-plugin-fabric-ui
```

### Usage

After installing the plugin, add it to your site's config file:

`gatsby-config.js`

```js
module.exports = {
    plugins: ['gatsby-plugin-fabric-ui'],
};
```

Then you can use any of the components as usual:

```jsx
import React from 'react';
import { DefaultButton } from 'office-ui-fabric-react';

const Index = () => (
    <div>
        <DefaultButton>Hello, world!</DefaultButton>
    </div>
);

export default Index;
```

See the [test](./test) folder for an example Gatsby site.

## Compatibility

Currently only tested with:

-   `react` v16
-   `gatsby` v2
-   `office-ui-fabric-react` v6

## Contributing

1. Clone this repo.
2. `npm install`
3. Make changes to `gatsby-ssr.jsx`. Please also prettier via `npm run format`.
4. To test your changes, run the sample project:

```sh
cd test
npm install
npm run build # test that SSR works properly
npm run develop # launches the sample site
```

5. In the main package, you can also run `npm test`.
