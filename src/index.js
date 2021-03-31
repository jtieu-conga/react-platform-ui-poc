import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

window.mount = (element, injected) => {
    ReactDOM.render(
        <App {...injected} />,
        element
    );
};


// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// );