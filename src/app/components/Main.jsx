import React from 'react'
import { Provider } from 'react-redux'
import { store } from "../store"
import {ConnectedDashboard} from "./Dashbord"
import {Route} from 'react-router-dom'
import {Router} from 'react-router-dom'
import {history} from '../store/history'
import {ConnectedNavigation} from "./Navigation"
import { ConnectedTaskDetail } from "./TaskDetail"
import { Redirect } from 'react-router';
import {ConnectedLogin} from './Login'

const RouteGuard = Component =>({match})=>{
    if(!store.getState().session.authenticated){
        return <Redirect to="/" />
    }
    return <Component match={match}/>;
}

export const Main = () => (
    <Router history = {history}>
        <Provider store = {store}>
            <div>
                <ConnectedNavigation/>
                <Route exact path="/" component={ConnectedLogin}/>
                <Route 
                    exact
                    path ="/dashboard"
                    render={RouteGuard(ConnectedDashboard)}
                />
                <Route
                    exact
                    path = "/task/:id"
                    render={RouteGuard(ConnectedTaskDetail)}
                />
            </div>
        </Provider>
    </Router>
    
)