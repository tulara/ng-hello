All the things about running the app


### TO RUN LOCALLY  

Open chrome via command line with following arguments to avoid cross origin errors on your local file system
  
1. `npm install` 
2. `npm start`
3. `open -a 'Google Chrome' --args -allow-file-access-from-files` and go to localhost:8080


quick stack:
- angular
- gulp
- node

have installed:
- node.js

- npm

- gulp
```
$ npm install --global gulp
```

### DEPLOYMENT

Heroku dynamically assigns your app a port, so you can't set the port to a fixed number. Heroku adds the port to the env, so you can pull it from there

1. `heroku login`
2. `git push heroku master`
3. `heroku ps:scale web=1`
4. `heroku open`

