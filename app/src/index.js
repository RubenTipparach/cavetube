import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TubeViewer from './tube-viewer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TubeViewer />, document.getElementById('root'));
registerServiceWorker();
