import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom'
import {
    Home, Login, Comic, ListComic, CreateComic, UpdateComic, Genre, ListGenre, CreateGenre, UpdateGenre
} from '../pages'
import SideNavbar from './SideNavbar';
import TopNavbar from './TopNavbar';
const MainContent = () => {
    const [loginStatus, setLoginStatus] = useState(false)

    const loginCbHeader = (result) => {
        setLoginStatus(result)
    }

    useEffect(() => {
        if (localStorage.getItem('access_token')) {
            setLoginStatus(true)
        } else {
            setLoginStatus(false)
        }
    }, [loginStatus])
    return (
        <>
            <SideNavbar></SideNavbar>
            <div id="content-wrapper" class="d-flex flex-column">
                <div id="content">
                    <TopNavbar></TopNavbar>
                    <Routes>
                        <Route path='' element={
                            loginStatus ?
                                <Home loginStatus={loginStatus} loginCbHeader={loginCbHeader}></Home>
                                : <Login loginCbHeader={loginCbHeader}></Login>
                        }>
                        </Route>
                    </Routes>
                </div>

            </div>
        </>
    )
}

export default MainContent