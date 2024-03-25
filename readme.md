# Initialize the project first using

```shell
npm init
```

## Create a folder public in root

- Inside that create another file temp
- Inside temp create .gitkeep

- Visit https://mrkandreev.name/snippets/gitignore-generator/
  Create the gitignore and paste in the .gitignore file

  ## Make another folder in root, src

  - Inside src create index.js, constants.js and app.js files

## Make module js from package.json file

"type": "module"

## Install the nodemon so

You'll not have to stop and restart the server after making changes, so we'll install nodemon dev dependencies so that it will not have any effect on the production

```shell
npm i -D nodemon
```

## Edit the package.json again

Inside the scripts block add

> "dev": "nodemon src/index.js"

## Create folders in src

- controllers, db, middlewares, models, routes, utils,

## Install prettier

```shell
npm i -D prettier
```

- Create another file in root .prettierrc and prettierignore
- Write the contents in both the files for code formatting(see that on github prettier files)

## Update the setting in mongoAtlas

- Create new project
- Create new cluster
- Create new username and password
- Config the ip allowed to 0.0.0.0/0
- Allow the permission to user as read and write any database
- Then go to database click on connect then cluster
- Copy the connection string paste that in .env

## Install mongoose, express, and dotenv

```shell
npm i mongoose express dotenv
```

## Install cookie-parser and cors

```shell
npm i cookie-parser cors
```

## Install aggregation

```shell
npm i mongoose-aggregate-paginate-v2
```

## Install bcrypt.js and jsonwebtoken

```shell
npm i bcrypt jsonwebtoken
```

## Make a free account on cloudinary

https://cloudinary.com/users/register_free

> npm install cloudinary multer
