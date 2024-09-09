import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { DishPage } from '../pages/DishPage';
import { SignUp } from '../pages/SignUp';
import { SignIn } from '../pages/SignIn';

import { HomeAdmin } from '../pages/HomeAdmin';
import { DishAdd } from '../pages/DishAdd';


export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/homeadmin" element={<HomeAdmin/>} />
            <Route path="/dish" element={<DishPage />} />
            <Route path="/dishadd" element={<DishAdd />} />



            <Route path="/login" element={<SignIn/>} />
            <Route path="/register" element={<SignUp/>} />
        </Routes>
    )
}