# cs411fall2019
## Author: Miao Liu, Yuyang Huang, Daniel

### OAuth 2.0 using Google+ Login (updated 11.29)
***ONLY BU EMAIL CAN USE GOOGLE+ OAUTH NOW***

For the demo purpose, here I only implement a simple click that require you using your own google account to login/create a user for our website. Nothing fancy here, only display a message telling you that you login with your email and user information will be stored in our database. I choose mongo db because it is easy to manage and learn. Please use your weekend to learn a little bit about mongo db and its logic so that you can manage the db your own.

Also, I hide keys [`/config/key.js`] for both our api and my google keys since the project is related to my own bu account. So either **acquire your own google developer id or use my schema as the following exactly**
```
module.exports = {
  openWeather : {
    apiKey : <shared in the text>
  },
  google: {
    clientID: <your own clientID>,
    clientSecret: <your own clientSecret>
  },
  mongodb: {
    dbURL: <shared in the text>
  }
}

```

- install Passport

We use passport library to help us implement oauth 2.0. It's really simple and easy, the documentation for more information will be [here](http://www.passportjs.org/docs/oauth/).

We will install two library `passport` and `passport-google-oauth20`. In your terminal, type
`npm install passport passport-google-oauth20`
to install them.

For simplicity, the `package.json` already declared all the dependencies we need to use, so `npm install` will works too.

- create `key.js`

As mentioned above, create a `key.js` file so that we can use api, oauth, and mongodb

------
do ***NOT*** change the files except in app_server/views/ (update in 10.25)

~~ Ignore the vulnerability for now. I will fix this for next update. ~~ **fixed**

Here's the way to update the html file.

- pull your data

Just pull from the github using `git pull`

- install npm

Here is the [link](https://nodejs.org/en/download/) for you to install npm first. Use the
`sudo npm install -g npm`  
(sudo is not necessary for some cases, and I don't know the reason) to update after you install it but before starting the project. We need to make sure that we use the same version (not necessary, but good to debug).

- install npm dependencies

First you need to `npm install`.

You have to make sure your npm is correctly installed when your dependencies are updated.

Please mark what dependencies you add in each commit so that the server side can correctly respond to the changes.
`npm install` will help you install whatever you want to use for the app

- start the server

`nodemon` is installed in the dependencies. So you don't need to rerun the server to see the changes, but simply refresh the page is enough. For now there should be only a sample page to view. If there's an error, it will displayed directly. Server will ***NOT*** accept any request of POST, DELETE. But simply a GET message.

- edit index.html.

This is the temp solution for now. We will use front-end frameworks later.
