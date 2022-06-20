# REST API for work with issues github

Задание:

Написать тестовое приложение(веб сервер), предоставляющий REST API для взаимодействия с GITHUB, приложение должно выбирать issue произвольного репозитория, с фильтрацией и сортировкой.

## Rest way

### Методы запросов

`GET` - основной метод.

### Routes

`api/about` - возвращает ссылку на файл readme, который содержит информацио о приложении.

`api/issues/owner/repo` - возвращает информацию, где обязательно необходимо указать владельца
репозитория (owner) и название репозитория (repo). Это динамические параметры.

### Query parameters

`milestone`

If an integer is passed, it should refer to a milestone by its number field. If the string \* is passed, issues with any milestone are accepted. If the string none is passed, issues without milestones are returned.

`state`

Indicates the state of the issues to return. Can be either open, closed, or all.
Default: open
Can be one of: open, closed, all

`assignee`

Can be the name of a user. Pass in none for issues with no assigned user, and \* for issues assigned to any user.

`creator`

The user that created the issue.

`mentioned`

A user that's mentioned in the issue.

`labels`

A list of comma separated label names. Example: bug,ui,@high

`sort`

What to sort results by. Can be either created, updated, comments.
Default: created
Can be one of: created, updated, comments

`direction`

The direction to sort the results by.
Default: desc
Can be one of: asc, desc

`since`

Only show notifications updated after the given time. This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.

`per_page`

The number of results per page (max 100).
Default: 30

`page`

Page number of the results to fetch.
Default: 1

### Стандарт ответов от сервера

Стандартный ответ сервера (200):

```json
{
  "ok": true,
  "result": {}
}
```

Стандартный ответ с ошибкой (404):

```json
{
  "ok": false,
  "code": 404,
  "msg": "Not found.",
  "data": {}
}
```

Стандартный ответ по url: `api/about` (200):

```html
<a href="https://www.google.ru/">Читай readme</a>
```

## Main Technologies

**Express** - для создания приложения.

**Axios** - Для отправки запросов к апи github.

## Instruction

### Getting started

Для начала работы, необходим установленный NodeJs.

### Installing dependencies

To install the dependencies required in the project, the developer should navigate to the project folder and run the following command in the terminal.

In the terminal run:

```shell
$npm install
```

## Available Scripts

In the project directory, you can run:

### `npm start:dev`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run start`

Runs the app.

## Authors

Nick - **BuGalter**

Name - _Valery Yakubchik_

## License

Этот проект лицензируется в соответствии с лицензией Apache License 2.0 — подробности
см. в файле LICENSE.
