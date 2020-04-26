
import { store } from "./store"
import React from 'react'
import ReactDom from 'react-dom'
import { Dashboard } from './components/Dashbord'
import { Main } from "./components/Main"

ReactDom.render(
    <Main/>,
    document.getElementById("app")
)