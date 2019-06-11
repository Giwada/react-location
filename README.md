# Geolocation Platform - React/Redux + Express/Node/MongoDB

This is a React application which helps the user to search a place with grid and map.

---
<table>
  <tr>
    <td><img src="./client/assets/demo.jpg" width="100%"></td>
  <tr>
</table>

### Prerequisites

What things you need to install the software and how to install them

```
npm create-react-app `project_name`
cd `project_name`
```

### Directory Structure (version 1.1)

```
react-geolocation
├── client/
    │   ├── package.json
    ├── node_modules/ *not included
    ├── public/
    └── src
    │   ├── components/
    │   ├── containers/
    │   ├── helpers/
    │   ├── service/
    │   ├── styles/
    │   ├── App.js
    |   ├── index.js
    |   └── ...
├── server/
    ├── auth/
    ├── models/
    │   ├── reservation.model.js
    ├── node_modules/ *not included
    ├── routes/
    │   ├── index.js
    │   ├── reservation.route.js
    │   ├── user.js
    ├── package-lock.json
    ├── package.json
    └── server.js
├── README.md
```

## Built With

* [express-locallibrary-tutorial](https://github.com/mdn/express-locallibrary-tutorial) - Tutorial "Local Library" website written in in Node/Express.