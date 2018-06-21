@page

@box({"className": "cover"})
# 现代javascript课程
#### 方怀南@TypeError
@boxEnd

@page

## TypeError课程介绍

请访问: https://github.com/typeerrorfeclass/home

@page

## 现代javascript

* ECMAScript是什么？
* ES6、ES7、ES2015、ES2016……是什么？
* tc39是什么？
* stage0、stage1、stage2是什么？

@page

## babel

* babel-cli
* babel-preset
  * babel-preset-env
* babel-plugin

@page

## .babelrc

``` json
{
  "presets": [
    [
      "env",
      {
        "targets": {
          "browsers": ["last 2 versions", "ie >= 10"]
        },
        "debug": false
      }
    ]
  ],
  "plugins": [
    "transform-class-properties",
    "transform-decorators-legacy",

    [
      "transform-react-jsx",
      {
        "pragma": "React.createElement"
      }
    ],

    [
      "transform-runtime",
      {
        "helpers": true,
        "polyfill": true,
        "regenerator": true,
        "moduleName": "babel-runtime"
      }
    ]
  ]
}

```