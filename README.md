# Настройка проекта

## Установка и настройка флага

1. Склонируйте репозиторий:
    ```bash
    git clone https://github.com/alvytsk/ctf-sql-injection
    cd ctf-sql-injection
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
- Задача "Авторизация", WEB, Админ забыл пароль от аккаунта, что же делать...
- Подсказка: admin забыл пароль от аккаунта, что же делать...
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

- Лицензия MIT
# Задача 2
- Задача "Комментарии", WEB, При разработке страницы с комментариями забыли убрать лишнее
- Подсказка: 
- Сложность: easy
- Решение:
Уязвимость - XSS:

Перейдите на страницу комментариев (http://localhost:3001/comments).
Введите следующий текст в поле комментария:
<script>document.getElementById('flag').style.display='block';</script>
Нажмите "Submit".

- Лицензия MIT
