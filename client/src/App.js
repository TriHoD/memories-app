import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar'
import Main from './components/Main/Main';
import Auth from './components/Auth/Auth';

const App = () => {

    return (
        <BrowserRouter>
            <Container maxWidth="lg">
                <NavBar />
                <Switch>
                    <Route path="/" exact component={Main} />
                    <Route path="/auth" exact component={Auth} />
                </Switch>
            </Container>
        </BrowserRouter>
    )
}

export default App;
