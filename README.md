# firebase-functions-boilerplate

READY-TO-USE repo for real-world firebase cloud functions

#### Features
- hot-reloading in development mode
- deployment (staging, production)
- support ES6 syntax
- support absolute import
- simple, configurable, and extendable

## WHY?
I am a real fan of firebase services. I love cloud functions because it connects other firebase services together which allow us 
to create magical things. However, we have to write it in ES5 and it annoyed me a lot. Fortunately, I found this [story from James Hegedus](https://codeburst.io/es6-in-cloud-functions-for-firebase-2-415d15205468) explains
how to use ES6 in cloud functions. But it is not enough, because I want to use it in dev and production too. So, I made a little changes with
some basic knowledge to make hot-reloading and continuous deployment available. I hope this project can save you some time. Feel free to suggest and comment.

## SET UP + HOW TO USE
1. Create a project in [firebase console](https://firebase.google.com/)
2. Install firebase-tools globally

    ```
    npm install -g firebase-tools 
    ```
    or with yarn
    ```
    yarn global add firebase-tools
    ```
3. Login firebase in terminal
    ```
    firebase login
    ```
4. Go to file .firebaserc in this directory, add your project-id
    ```
    "staging": "<project-id>",
    "production": "<project-id>"
    ```
    or you can use firebase cli
    ```
    firebase use --add
    ```
5. Run this command to create build directory
    ```
    yarn install:packages
    ```
    \** ***if you install new packages, you need to run this cmd before dev*** **
6. Run this command in console
    ```
    yarn dev
    ```
    _this will watch file changes in_ `./src/functions`
    
    open another **console**, then run
    ```
    yarn serve
    ```
    _create firebase emulator which enables local http function test_
7. Make changes in `./src/functions`
8. Open browser | postman with
    ```
    
    ```
9. If you want to test functions locally with production database, go to
 
    `./src/functions/config/localEnv.js`
    ```
    change 'staging' => 'production'
    ```

## Deployment
    
    yarn deploy:staging
    
   or 
   
    yarn deploy:production
  

