import {Routes, Route, Navigate} from 'react-router-dom';  // в новой версии Switch был заменен на Routes, а Redirect был удален (его можно заменить на Navigate).
import {authRoutes, publicRoutes} from "../routes.jsx";
import {useContext} from 'react';
import {Context} from "../index";

const AppRouter = () => {
    const {user} = useContext(Context)
    console.log(user) // или console.log(user.isAuth)
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
            <Route path="*" element={<Navigate to="/"/>} />  {/* // Редирект на главную страницу в случае ввода некорректного адреса */}

            {/* Альтернативный вариант роутинга:
            <Route path="/" element={<Shop />} />
            <Route path="/login" element={<Auth />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/device" element={<DevicePage />} />
            <Route path="*" element={<Navigate to="/"/>} />  */}
        </Routes>
    );
}

export default AppRouter
  

