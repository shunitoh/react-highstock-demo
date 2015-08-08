
### Directory Layout
```
.
├── package.json
├── gulpfile.js
├── index.js
├── build
│   ├── bundle.js
│   ├── favicon.ico
│   └── index.html
└── src
    ├── app.jsx
    ├── components
    │   ├── App.jsx
    │   └── Charts
    │       ├── BaseChart.jsx
    │       ├── SimpleChart.jsx
    │       └── SimpleStockChart.jsx
    ├── favicon.ico
    └── index.html
```

### Getting Started

``` shell
$ git clone https://github.com/shunitoh/react-highstock-demo.git
$ npm install
```

### How to Build

```shell
$ gulp build
```

### How to Deploy

```shell
$ node index.js
```

### How to Access

- http://localhost:3000/

### Reference
- https://github.com/kirjs/react-highcharts
- https://www.npmjs.com/package/highstock-browserify
- http://www.highcharts.com/stock/demo
- http://www.highcharts.com/demo
