import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Sidebar from '../sidebar/Sidebar';
import TopNav from '../topnav/TopNav';
import NavigationRoutes from '../NavigationRoutes';
import "./Layout.css"

const themeReducer = {
    mode: "",
    color: ""
}

const Layout = () => {
    return (
        <BrowserRouter>
            <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
                <div className="layout__sidebar">
                    <Sidebar />
                </div>
                <div className="layout__content">
                    <div className="layout__topnav">
                        <TopNav/>
                    </div>
                    <div className="layout__content_main">
                        <NavigationRoutes/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default Layout