# Opt6 Landing Project

## Описание проекта
Выполненное тестовое задание (лендинг) для компании Opt6 с использованием Nuxt, TypeScript, SCSS.

## Выполненое задание
Выполненное здание можно посмотреть по адресу: [https://llladno.github.io/opt6/](https://llladno.github.io/opt6/)

## Как запустить проект

### Клонирование репозитория
```bash
git clone https://github.com/llladno/opt6.git
cd opt6
```

### Установка зависисмостей
```bash
npm install
```
### Запуск проекта
```bash
npm run dev
```
### Работа с проектом
Далее необходимо перейти по адресу [http://localhost:3000/opt6/](http://localhost:3000/opt6/)

## Структура проекта
```
├── api                     # Директория для API взаимодействий
├── assets                  # Директория для статических ресурсов
│   ├── blocks              # Блоки стилей
│   ├── common              # Общие стили
│   ├── icons               # Иконки
│   ├── img                 # Изображения и SCSS файлы для стилей
│   │   ├── \_base.scss      # Основные стили
│   │   ├── \_main.scss      # Главные стили
│   │   └── \_variables.scss # Переменные для SCSS
├── components              # Компоненты Vue.js
│   ├── common              # Общие компоненты
│   └── layout              # Компоненты для разметки
├── dist                    # Скомпилированные файлы для деплоя
├── layouts                 # Шаблоны для страниц
│   └── default.vue         # Основной шаблон
├── node_modules            # Папка с установленными npm модулями
├── pages                   # Страницы приложения
│   ├── documents           # Страницы для раздела документов
│   │   └── contacts.vue    # Страница контактов
│   ├── index.vue           # Главная страница
│   ├── login.vue           # Страница входа
│   ├── signup.vue          # Страница регистрации
│   └── tariffs.vue         # Страница тарифов
```

## Используемые технологии
* Nuxt.js
* TypeScript
* SCSS
