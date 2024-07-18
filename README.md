# Capybara_Store

My first online store training project

---

## Version 1

Запуск: в папке server - npm run dev  
Должна открыться страница с json-текстом {"message":"Working!"}.  
Можно также протестировать в приложении Postman:  
GET http://localhost:5000/  
(no body)  
Выведется сообщение {"message":"Working!"} и отобразится статус 200 OK.

## Version 2

Если перейти по URL для запросов пользователя (user)  http://localhost:5000/api/user/auth , увидим сообщение из userRouter.js.

## Version 3

Теперь функция с логикой запроса перемещена из userRouter.js в отдельный файл userController.js. Если перейти по прежнему URL  http://localhost:5000/api/user/auth , увидим сообщение из функции check в файле userController.js.
