import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import './index.css';
import { Provider } from 'react-redux';
import { persistor, store } from './store/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<div>Loading....</div>}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter basename="/phonebook">
            <ThemeProvider theme={theme}>
              <App />
            </ThemeProvider>
          </BrowserRouter>
        </PersistGate>
      </Suspense>
    </Provider>
  </React.StrictMode>
);
