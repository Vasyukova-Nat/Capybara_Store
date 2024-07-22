// Начинаем работать с mobx

import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {  // конструктор будет вызываться при создании объекта данного класса
        this._isAuth = false  // переменная, показывающая, авторизован ли пользователь. Нижнее подчеркивание означает, что переменная изменяться не будет
        this._user = {}  
        makeAutoObservable(this)  // вызов функции из mobx. Она будет следить за изменениями данных переменных. При изменении компоненты будут перерендериваться
    }

    // Action-функции, которые изменяют состояния
    setIsAuth(bool) {  
        this._isAuth = bool  // присваевает переменной isAuth булевое значение
    }
    setUser(user) {
        this._user = user  // изменяет пользователя
    }

    // Получают переменные из состояния. Вызываются только в том случае, если переменная в их аргументе была изменена
    get isAuth() {
        return this._isAuth
    }
    get user() {
        return this._user
    }
}
