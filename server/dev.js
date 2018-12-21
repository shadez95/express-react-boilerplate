/* eslint-disable import/no-extraneous-dependencies */
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import app from './config/express';

// enable webpack hot module replacement in development mode
import webpackConfig from '../webpack/webpack.config.dev';

export default function () {
  const compiler = webpack(webpackConfig);
  app.use(
    webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }),
  );
  app.use(webpackHotMiddleware(compiler));
}
