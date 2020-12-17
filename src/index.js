import React from 'react';
import ReactDOM from 'react-dom';
import '../src/styles/reset.scss';
import '../src/styles/common.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

import Routes from './Routes';

ReactDOM.render(<Routes />, document.getElementById('root'));
