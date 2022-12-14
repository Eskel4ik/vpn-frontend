import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import ErrorBoundry from './components/ErrorBoundry/ErrorBoundry';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import RoboApiProvider from './components/RoboApiProvider/RoboApiProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorBoundry>
      <Provider store={store}>
        <HashRouter>
          <RoboApiProvider>
            <App />
          </RoboApiProvider>
        </HashRouter>
      </Provider>
    </ErrorBoundry>
  </React.StrictMode>
);

reportWebVitals();
