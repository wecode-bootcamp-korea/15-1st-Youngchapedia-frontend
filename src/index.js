import React from 'react';
import ReactDOM from 'react-dom';
import '../src/styles/reset.scss';
import '../src/styles/common.scss';
import '../node_modules/font-awesome/css/font-awesome.min.css';

import Routes from './Routes.js';

ReactDOM.render(<Routes />, document.getElementById('root'));
