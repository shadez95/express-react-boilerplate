import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blueGrey } from '@material-ui/core/colors';

// Import custom components
import store from './store';
import { verifyToken } from './actions/tokenAction';

// Import custom components
import MainRouter from './routers/routes';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: blueGrey,
  },
});

// Used to log in if token is valid
store.dispatch(verifyToken());

const renderApp = (Component) => {
  ReactDOM.render(
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <Component />
      </Provider>
    </MuiThemeProvider>,
    document.getElementById('root'),
  );
};

renderApp(MainRouter);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./containers/app/AppContainer', () => {
    // if you are using harmony modules ({modules:false})
    // eslint-disable-next-line global-require
    renderApp(require('./containers/app/AppContainer'));
  });
}
