import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Product from '../admin/Container/Product';
import PrivateRoutes from './PrivateRoutes';

function AdminRoutes(props) {
    return (
        <div>
            <Routes>
                <Route element={<PrivateRoutes />}>
                    <Route exact path='/Product' element={<Product />} />
                </Route>
            </Routes>
        </div>
    );
}

export default AdminRoutes;