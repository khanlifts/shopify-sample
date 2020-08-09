require("dotenv").config();
const withCSS = require('@zeit/next-css');
const webpack = require('webpack');
const { DefinePlugin } = webpack;

const apiKey =  JSON.stringify(process.env.SHOPIFY_API_KEY);

module.exports = withCSS({
  webpack: (config) => {
    const env = { API_KEY: apiKey };
    config.plugins.push(new DefinePlugin({
      "API_KEY": apiKey
    }));
    return config;
  },
});
