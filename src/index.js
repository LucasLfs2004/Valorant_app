import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './main/App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import configStore from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configStore()

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

reportWebVitals();