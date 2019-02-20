import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import BaseLayout from './components/BaseLayout';
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import Store from './components/Store';
import itemReducer from './reducers/itemReducer'

const store = createStore(itemReducer);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <BaseLayout>
                <Switch> 
                    <Route exact path="/" component={Store} />
                    <Route exact path="/app" component={App} />
                </Switch>
            </BaseLayout>
        </BrowserRouter>
    </Provider>

    , document.getElementById('root'));

