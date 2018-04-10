import React from 'react';
import { render } from 'react-dom';
import { Provider } from "react-redux";
import store from './store';
import Billboard from './components/Billboard';

import './styles/main.scss';
import 'normalize.css'; // reset css.

render((
  <Provider store={store}>
    <Billboard />
  </Provider>
), document.querySelector('#root'));
