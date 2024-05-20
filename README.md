# Описание
Приложение включает в себя:

- Главную страницу с ссылкой на страницу входа.
- Форму входа, где пользователи могут ввести свое имя пользователя и пароль.
- Панель управления, на которой отображается флаг, если пользователь вошел как администратор.
- Страницу комментариев, уязвимую к XSS-атакам.

# Настройка проекта

## Установка и настройка флага

1. Склонируйте репозиторий:
    ```bash
    git clone https://github.com/tzzzich/ctf-tasks
    cd ctf-tasks
    ```

2. Установите зависимости:
    ```bash
    npm install
    ```

3. Создайте файл .env с содержимым:
    ```env
    FLAG_SQL="HITS{sql_injection_success}"
    FLAG_XSS="HITS{xss_success}"
    ```
 
4. Запустите приложение:
    ```bash
    node --env-file=.env app.js
    ```

5. Откройте веб-браузер и откройте страницу:
    ```
    http://localhost:3001
    ```

## Использование Docker

Вы также можете собрать и запустить приложение с помощью Docker.

1. Сборка Docker-образа:
    ```bash
    docker build -t ctf-project .
    ```

2. Запуск Docker-контейнера:
    ```bash
    docker run -p 3001:3001 ctf-project
    ```

3. Откройте веб-браузер и откройте страницу:
    ```
    http://localhost:3001
    ```


# Задача 1
- Задача "Авторизация"
- Тэги: WEB
- Легенда: Админ забыл пароль от аккаунта, что же делать...
- Подсказки:
    1. admin забыл пароль от аккаунта, что же делать...
    2. Здесь есть бд, из которой достаются пользователи.
- Сложность: easy
- Решение:
Уязвимость - SQL Injection:

1. Перейдите на страницу входа (`http://localhost:3001/login`).
2. В поле имени пользователя введите:
    ```
    admin'--
    ```
3. В поле пароля введите любой текст.
4. Нажмите "Login".

- Лицензия MIT, находится в соответствующем файле


# Задача 2
- Задача "Комментарии"
- Тэги: WEB
- Легенда: При разработке страницы с комментариями забыли убрать лишнее.
- Подсказка:
    1. Это не на SQL-инъекцию.
- Сложность: easy
- Решение:
Уязвимость - XSS:

1. Перейдите на страницу комментариев (http://localhost:3001/comments).
2. Если открыть исходный код страницы в панели разработчика, можно заметить скрытый элемент, содержащий зашифрованный флаг и функцию для его дешифрования.
3. Введите следующий текст в поле комментария:
 ```html
    <script>revealFlag();</script>
```
3. Нажмите "Submit".

- Лицензия MIT, находится в соответствующем файле
