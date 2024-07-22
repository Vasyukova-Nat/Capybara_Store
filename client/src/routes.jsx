import {ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "./utils/consts.jsx";
import Admin from "./pages/Admin.jsx";
import Basket from "./pages/Basket.jsx";
import Shop from "./pages/Shop.jsx";
import Auth from "./pages/Auth.jsx";
import DevicePage from "./pages/DevicePage.jsx";

export const authRoutes = [  // маршруты только для авторизованных пользователей
    {
        path: ADMIN_ROUTE,  // путь страницы. Можно указать прямо в коде как path: '/admin', но лучше вынести пути в папку utils/consts.js
        Component: Admin  // сама страница (компонент)
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
]

export const publicRoutes = [  // маршруты, доступные для неавторизованных пользователей
    {
        path: SHOP_ROUTE,
        Component: Shop,
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: DEVICE_ROUTE + '/:id',  // id конкретного устройства
        Component: DevicePage
    },
]