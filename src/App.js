/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Home from './pages/Home';
import Show from './pages/Show';
import Starred from './pages/Starred';

import { NotFound } from './App.styled';

import GO_BACK from './images/Go back.png';

const theme = {
    mainColors: {
        blue: '#0047AB',
        gray: '#c6c6c6',
        dark: '#353535',
    },
};

function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Route exact path="/">
                    <Home />
                </Route>

                <Route exact path="/starred">
                    <Starred />
                </Route>

                <Route exact path="/show/:id">
                    <Show />
                </Route>

                <Route>
                    <NotFound>
                        <h1>Oops!</h1>
                        <div className="notfound">
                            <h2>404 - Page not found</h2>
                            <p>
                                The page you are looking for might have been
                                removed,
                                <br /> had its name changed or is temporarily
                                unavailable.
                            </p>
                            <br />
                            <img alt="go back" src={GO_BACK} />
                            <br />
                            <br />
                            <a href=".">GO TO HOMEPAGE</a>
                        </div>
                    </NotFound>
                </Route>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
