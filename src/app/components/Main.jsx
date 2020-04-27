import React from 'react'
import { Provider } from 'react-redux'
import { store } from "../store"
import {ConnectedDashboard} from "./Dashbord"
import {Route} from 'react-router-dom'
import {Router} from 'react-router-dom'
import {history} from '../store/history'
import {ConnectedNavigation} from "./Navigation"
import { ConnectedTaskDetail } from "./TaskDetail"

export const Main = () => (
    <Router history = {history}>
        <Provider store = {store}>
            <div>
                <ConnectedNavigation/>
                <Route 
                    exact
                    path ="/dashboard"
                    render = {() => (<ConnectedDashboard/>)}
                />
                <Route
                    exact
                    path = "/task/:id"
                    render = {({match}) => (<ConnectedTaskDetail match = {match}/>)}
                />
            </div>
        </Provider>
    </Router>
    
)