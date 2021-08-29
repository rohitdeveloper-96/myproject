import React from 'react';
import Routes from './Route';
import './assets/css/Header.css'
import { Provider } from 'react-redux';
import store from './storage/storage'
function App() {
  return (
       <Provider store={store}>
      <Routes />
      </Provider>
  );
}
export default App;