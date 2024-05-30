
// src/App.js
import App from './App';
import Reducer from './Reducer'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
const store = createStore(Reducer);
ReactDOM.render(
  <React.StrictMode>
    <App />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);