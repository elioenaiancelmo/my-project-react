import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './styles/globalStyle';
import Routers from './routes';

ReactDOM.render(
    <>
        <Routers />, <GlobalStyle />
    </>,

    document.getElementById('root')

);


