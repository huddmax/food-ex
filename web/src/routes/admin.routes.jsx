import { Routes, Route } from 'react-router-dom';

import { HomeAdmin } from '../pages/HomeAdmin';
import { DishPageAdmin } from '../pages/DishPageAdmin';
import { DishAdd } from '../pages/DishAdd';
import { DishEdit } from '../pages/DishEdit';


export function AdminRoutes() {
    return (
        <Routes>

            {/* rotas do admin */}
            <Route path="/" element={<HomeAdmin/>} />
            <Route path="/dish/:id" element={<DishPageAdmin />} />
            <Route path="/dishadd" element={<DishAdd />} />
            <Route path="/dishedit" element={<DishEdit />} />

        </Routes>
    )
}