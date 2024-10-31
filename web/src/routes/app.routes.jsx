import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { DishPage } from '../pages/DishPage';


export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/dish" element={<DishPage />} />

        </Routes>
    )
}