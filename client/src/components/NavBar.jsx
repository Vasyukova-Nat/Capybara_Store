import { useContext } from 'react';
import { Context } from "../index";
import { NavLink } from 'react-router-dom'
import {observer} from "mobx-react-lite";

const NavBar = observer( () => {
    const {user} = useContext(Context)  // получаем UserStore из контекста (глобальная переменная), т.к. в зависимости от того, авторизован ли пользователь, будет меняться количество функций в NavBar

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">    
            <NavLink style={{color: 'white'}} to="/">Capybara Store</NavLink>  {/* альтернатива <a className="navbar-brand" href="/">Capybara</a>  */}
            {user.isAuth ?
                <div className="navbar-nav ml-auto">  
                    <a className="nav-link active" href="/">Админ панель</a>
                    <a className="nav-link active ml-2" href="/">Выйти</a>  {/* ml-2 - отступ слева */}
                </div>
                :
                <div className="navbar-nav ml-auto">  
                    <button href="/" onClick={() => user.setIsAuth(true)}>Авторизация</button>
                </div>
            }
        </nav>
    );
});

export default NavBar