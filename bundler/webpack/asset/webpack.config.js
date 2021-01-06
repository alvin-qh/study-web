const path = require('path');
const webpackConfig = require('./webpack-common.config.js');

const toml = require('toml');
const yaml = require('yamljs');
const json5 = require('json5');

module.exports = {
  ...webpackConfig,
  module: {
    rules: [
      {
        // load css content as <style> element into bounde
        // need 'style-loader' and 'css-loader' package
        test: /\.css$/i,
        use: [
          {
            // load css content as <style> elements into html
            loader: 'style-loader'
          },
          {
            // extracting css content as string
            loader: 'css-loader'
          }
        ]
      },
      {
        // load image as file from resource url in bundle
        // need 'url-loader' and 'file-loader' package
        test: /\.(svg|png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10240,   // when resource size less than limit, save as base64 string, otherwise save as file
              name: 'image/[name].[ext]'
            }
          }
        ]
      },
      {
        // load font as file from resource url in bundle
        // need 'url-loader' and 'file-loader' package
        test: /\.(eot|woff|woff2|ttf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10240,  // when resource size less than limit, save as base64 string, otherwise save as file
              name: 'font/[name].[ext]'
            }
          }
        ]
      },
      {
        // load 'csv' or 'tsv' content as object list into bounde
        // need 'csv-loader' package
        test: /\.(csv|tsv)$/,
        include: path.resolve(__dirname, 'src'),
        use: [
          {
            loader: 'csv-loader'
          }
        ]
      },
      {
        // load 'xml' content as json object into bounde
        // need 'xml-loader' package
        test: /\.(xml)$/,
        include: path.resolve(__dirname, 'src'),  // constraint the scope of the loader
        use: [
          {
            loader: 'xml-loader'
          }
        ]
      },
      {
        // use `toml` file parser, parse `toml` data as json into bounde
        // need `toml` package
        test: /\.toml$/i,
        include: path.resolve(__dirname, 'src'),  // constraint the scope of the parser
        type: 'json',
        parser: {
          parse: toml.parse,
        }
      },
      {
        // use `yaml` file parser, parse `yaml` data as json into bounde
        // need `yamljs` package
        test: /\.yaml$/i,
        include: path.resolve(__dirname, 'src'),  // constraint the scope of the parser
        type: 'json',
        parser: {
          parse: yaml.parse,
        }
      },
      {
        // use `json5` file parser, parse `json5` data as json into bounde
        // need `json5` package
        test: /\.json5$/i,
        include: path.resolve(__dirname, 'src'),  // constraint the scope of the parser
        type: 'json',
        parser: {
          parse: json5.parse,
        }
      }
    ]
  }
};
