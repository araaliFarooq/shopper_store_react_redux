[![Build Status](https://travis-ci.org/araaliFarooq/shopper_store_react_redux.svg?branch=master)](https://travis-ci.org/araaliFarooq/shopper_store_react_redux)
[![Maintainability](https://api.codeclimate.com/v1/badges/2e46afc3167cbf0c401f/maintainability)](https://codeclimate.com/github/araaliFarooq/shopper_store_react_redux/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/2e46afc3167cbf0c401f/test_coverage)](https://codeclimate.com/github/araaliFarooq/shopper_store_react_redux/test_coverage)

## About

This is an API of an application to manage and record transcations of a shopping store

## Heroku api demo link

- https://shopers-store-api-2.herokuapp.com/

## API Documentation

- https://araalifarooq.docs.apiary.io
  

## Features

- Login
- Create an attendant's account
- Create a product

## Heroku UI demo link

- Login: https://araalifarooq.docs.apiary.io
- Add Attendant: https://araalifarooq.docs.apiary.io
- Add Product: https://araalifarooq.docs.apiary.io
  

## Tools Used

### API
- [Flask](http://flask.pocoo.org/) - web microframework for Python.
- [PostgreSQL](https://www.postgresql.org/)- Open source relational database.
### UI/UX
- [ReactJs](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [Redux](https://redux.js.org/) - A predictable state container for JavaScript apps.


## Run (Use) on your local machine

* Clone the code from github.
* Run ` npm install` or `yarn install` to install dependencies.
* Run ` npm test` or `yarn test` to run tests.
* Run ` npm run build` or `yarn build` to build the app.
* Run `npm start` or `yarn start`  to run the application.
* View output in browser.


## Runtime environment variable configs for TESTS

```
    None
```

## Runtime environment variable configs for DEVELOPMENT

```
  None
```

#### Endpoints to create an attendants account and login into the application

| HTTP Method | End point       | Public Access | Action                        |
| ----------- | --------------- | ------------- | ----------------------------- |
| POST        | /users/register | False         | Create an attendant's account |
| POST        | /users/login    | True          | Login a user                  |

#### Endpoints to create, views available products and create sale records

| HTTP Method | End point        | Public Access | Action           |
| ----------- | ---------------- | ------------- | ---------------- |
| POST        | /products/create | False         | Create a product |

## Authors

[Araali Sseruwu Farooq](https://github.com/araalifarooq)
