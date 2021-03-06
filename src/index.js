// Copyright (c) Microsoft. All rights reserved.

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import AppContainer from 'components/app/app.container';
import configureStore from 'store/configureStore';
import registerServiceWorker from 'registerServiceWorker';
import { AuthService } from 'services';
import { epics as appEpics } from 'store/reducers/appReducer';

// Initialize internationalization
import './i18n';

// Include cross browser polyfills
import './polyfills';

// Include base page css
import './index.scss';

// Initialize the user authentication
AuthService.onLoad(() => {
  // Create the redux store and redux-observable streams
  const store = configureStore();

  // Initialize the app redux state
  store.dispatch(appEpics.actions.initializeApp());

  // Create the React app
  ReactDOM.render(
    <Suspense fallback={null}>
      <Provider store={store}>
        <Router>
          <AppContainer />
        </Router>
      </Provider>
    </Suspense>,
    document.getElementById('root')
  );

  registerServiceWorker();
});
