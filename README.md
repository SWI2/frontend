# Frontend for fictive car service company

## Installation & Preview

The project requires [**Node.js**][node-download] and [**NPM**][npm-install] package manager.

After cloning run these commands:

```sh
npm install      # to install all dependencies
npm run start    # to start simple development server
```

Open [localhost:3000](http://localhost:3000) to preview.

## Production deployment

For using on production you need to run these commands:

```sh
npm install        # to install all dependencies
npm run build      # to build all files 
```

Server starts listen on `localhost:3000`

## Code linters
In order to have unified code formatting we use Eslint.


```sh
npm run lint               # check code for errors
npm run lint -- --fix      # fix all errors 
```


[node-download]: https://nodejs.org/en/download/
[npm-install]: https://www.npmjs.com/get-npm
