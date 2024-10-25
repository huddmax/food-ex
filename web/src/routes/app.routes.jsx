import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { DishPage } from '../pages/DishPage';

import { HomeAdmin } from '../pages/HomeAdmin';
import { DishPageAdmin } from '../pages/DishPageAdmin';
import { DishAdd } from '../pages/DishAdd';
import { DishEdit } from '../pages/DishEdit';


export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/dish" element={<DishPage />} />

            {/* rotas do admin */}
            <Route path="/homeadmin" element={<HomeAdmin/>} />
            <Route path="/dishadmin" element={<DishPageAdmin />} />
            <Route path="/dishadd" element={<DishAdd />} />
            <Route path="/dishedit" element={<DishEdit />} />


            {/* //rotas do auth.routes, estão aqui só pra testar */}
            {/* <Route path="/login" element={<SignIn/>} />
            <Route path="/register" element={<SignUp/>} /> */}
        </Routes>
    )
}