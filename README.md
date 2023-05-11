
# Taiyō.Ai Front-End Task

A Data creation and visualization app making use of publicly available apis.




## Tech Stack👨‍💻

**Client:** React, Redux, TailwindCSS, Typescript,  React query aka Tanstack query, 




## Run Locally🌐

Clone the project

```bash
  git clone https://github.com/DaraUkpong/taiyo-task
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Installation🔥

React Query

**In root folder run**
```bash
$ npm install react query

# or

$ yarn add react-query
```

Axios

**In root folder run**
```bash
$ npm install axios

# or

$ yarn add axios
```

Chart.js

**In root folder run**
```bash
$ npm install chartjs

# or

$ yarn add chartjs
```
    
Tailwindcss 

**In root folder run**
```bash
$ npm install -D tailwindcss
npx tailwindcss init
```
## Deployment

To deploy this project run

**In root folder**
```bash
  npm run start
```


## Demo✨️🚀

https://taiyo-task-dara.vercel.app/

## API Reference🤖

#### Get all contacts

```http
  GET https://645bba4da8f9e4d6e7715bbb.mockapi.io/contacts
```

| Request | Mutation     | Response                |
| :-------- | :------- | :------------------------- |
| `Get` | `none` | **Array<[]>**. |

#### Get Single Contact

```http
  GET https://645bba4da8f9e4d6e7715bbb.mockapi.io/contacts/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of contact to fetch |

#### Create New Contact
```http
  POST https://645bba4da8f9e4d6e7715bbb.mockapi.io/contacts/
```

| Parameters | Type     | Description                   |
| :-------- | :------- | :-------------------------------- | 
| `firstname`, `lastname`,`status`  | `string` | **Required**. Request parameters

#### Edit a Single Contact

```http
  PUT https://645bba4da8f9e4d6e7715bbb.mockapi.io/contacts/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of contact to edit



#### Delete a Single Contact

```http
  DELETE https://645bba4da8f9e4d6e7715bbb.mockapi.io/contacts/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of contact to delete


#### Get All Countries Data

```http
  GET https://disease.sh/v3/covid-19/all
```

| Response | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `countries `      | `object Array` |  `Response containing all data for each country`  |


#### Get All Case, Death, Recovered Data

```http
  GET https://disease.sh/v3/covid-19/historical/all?lastdays=all
```

| Response | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `cases `, `deaths`, `recovered`      | `object  of Key:value pairs ie Date:amount` |  `Response containing specific date and amount`  |

## Authors

- [@daraukpong](https://www.github.com/daraukpong)

