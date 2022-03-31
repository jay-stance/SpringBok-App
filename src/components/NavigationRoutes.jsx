import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Dashboard from '../pages/Dashboard/Dashboard';
import FundWallets from '../pages/FundWallets/FundWallets';
import Resturants from '../pages/Resturants/Resturants';
import ResturantsDetail from '../pages/ResturantsDetail/ResturantsDetail';
import Users from '../pages/Users/Users';
import Wallets from '../pages/Wallets/Wallets';
import NotFound from '../pages/NotFound';

const NavigationRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Dashboard />}/>
            <Route path='/fundWallets' element={<FundWallets />}/>
            <Route path='/resturants' element={<Resturants />}/>
            <Route path='/resturantsDetail/:name' element={<ResturantsDetail />}/>
            <Route path='/users' element={<Users />}/>
            <Route path='/wallets' element={<Wallets />}/>
            <Route path='*' element={<NotFound />}/>
        </Routes>
    )
}

export default NavigationRoutes
