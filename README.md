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

## Version 4
Добавлена в userController.js возможность получения параметров из ссылки запроса. См комментарии в файле. 
Использование:  http://localhost:5000/api/user/auth?id=5&text=bbbbbb  , параметры id и text (text можно заменить на другое имя переменной) можно изменять.

## Version 5
Добавлен обработчик ошибок. Ошибку  `if (!id) {return next(ApiError.badRequest('Не задан ID'))}`  можно получить так:  
http://localhost:5000/api/user/auth - высветится {"message":"Не задан ID"}. В коде веб-страницы можно увидеть ошибку 404 (Not Found).
http://localhost:5000/api/user/auth?id=5 - ошибки не будет. Отобразится только id.

## Version 6
Добавлено 2 запроса к типу устройства. Использование через Postman:
1. GET http://localhost:5000/api/type - посмотреть все существующие типы устройств
2. POST http://localhost:5000/api/type , body: {"name": "Ноутбуки"} - добавить тип устройства (не должны повторяться)

## Version 7
Добавление девайса:  
<img width="841" alt="image" src="https://github.com/user-attachments/assets/015a3a36-08b1-456a-8347-8a0150c97cfb">  
(Загруженному изображению будет приписан случайный уникальный id и оно будет сохранено в папке static под соответствующим названием).  

Вывод изображения по его id: http://localhost:5000/6d93287e-e59d-4400-95b5-fec7a959ab7d.jpg

Функция вывода девайсов getAll:
GET http://localhost:5000/api/device - вывод всех устройств (брэнд и тип в запросе не указаны).
GET http://localhost:5000/api/device?brandId=1&typeId=3 - вывод устройств с конкретным типом и/или брендом, в зависимости от того что указано. В Postman brandId и typeId можно указать в Params запроса под ссылкой.

## Version 8
Вызов функции регистрации:  
POST http://localhost:5000/api/user/registration , body: {"email": "user@mail.ru", "password": "12345"}. Будет выдан jwt-токен.

Вызов функции логина:  
Существующий пользователь: POST http://localhost:5000/api/user/login , body: {"email": "user@mail.ru", "password": "12345"} - успешно (Status 200 OK), будет выдан jwt-токен.  
Несуществующий пользователь: POST http://localhost:5000/api/user/login , body: {"email": "user333@mail.ru", "password": "12345"} - Status 500, покажется сообщение {"message": "Пользователь не найден"}. Если ввести неправильный пароль, также будет ошибка.

Вызов функции проверки авторизации check:  
Если отправить запрос без jwt-Токена - GET http://localhost:5000/api/user/auth , no body - выведется {"message": "Не авторизован"}.
Чтобы получить токен, отправляем: POST http://localhost:5000/api/user/login , body: {"email": "user@mail.ru", "password": "12345"}. Копируем токен который пришёл в поле вывода и вставляем его после типа токена (Bearer) во вкладке Headers:  
GET http://localhost:5000/api/user/auth , Headers: Key = Authorization, Value = Bearer eyJhbGciOi... (скопированный токен)
<img width="859" alt="image" src="https://github.com/user-attachments/assets/0c13cb04-c747-48c5-9507-4721cc9ad905">


