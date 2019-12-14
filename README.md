# cs411fall2019
## Author: Miao Liu, Yuyang Huang, Daniel

### OAuth 2.0 using Google+ Login (updated 11.29)
***ONLY BU EMAIL CAN USE GOOGLE+ OAUTH NOW***

View engine changes from html to ejs. Those two are similar to each other but the latter one easily allows us to render dynamic data. Documentation can be found [here](https://ejs.co/#install). But the main calendar page is using html.

When you login with your email and user information will be stored in our database. I choose mongo db because it is easy to manage and learn. Please use your weekend to learn a little bit about mongo db and its logic so that you can manage the db your own.

Also, I hide keys [`/config/key.js`] for both our api and my google keys since the project is related to my own bu account. So **acquire your own google developer id and use my schema as the following exactly**.
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
If hard to apply, use mine in the text.


- install Passport

We use passport library to help us implement oauth 2.0. It's really simple and easy, the documentation for more information will be [here](http://www.passportjs.org/docs/oauth/).

We will install two library `passport` and `passport-google-oauth20`. In your terminal, type
`npm install passport passport-google-oauth20`
to install them.

For simplicity, the `package.json` already declared all the dependencies we need to use, so `npm install` will works too.

- create `key.js`

As mentioned above, create a `key.js` file so that we can use weather API, oauth, and mongodb


### Explaination for code
Now the logic is user have to login in order to see the data from openWeather api.
If user do not has the correct cookie in side of the browser, server will provide a 403 code telling it is forbidden since he does not has the permission. Here are listed the major routes I use:
```
GET: /                       Login screen, will jump to calender page if logged in
GET: /search                 Allow current user to search the temp for given city
GET: /profile                User can access its profile only if he logs in

GET: /auth/google            allow user to sign in with google
GET: /auth/logout            The current user will be logout
GET: /auth/google/redirect   For google oauth to redirect

GET: /privacy                For google use not to complain about privacy
```
When user successfully login to their account, he should be redirected to the calender page. Note that current cookie will not be deleted though.

All the routers equipped with "non-user login" proof so that they cannot access the link above (except for the home address) if they are not logged in.

Data schema for now just use
```
user_schema.js
const userSchema = new Schema({
  googleid: String,
  username: String
});
eventSchema.js
const eventSchema = new Schema({
  title: {
      type: String,
      required: true
  },
  attendees: {
      type: String,
      required: true
  },
  place: {
      type: String,
      required: true
  },
  date: {
      type: String,
      required: true
  },
  userid: {
      type: String
  }
});
```
------
~~do ***NOT*** change the files except in app_server/views/ (update in 10.25)~~

~~Ignore the vulnerability for now. I will fix this for next update.~~ **fixed**

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

- start the server by running 'nodemon'

`nodemon` is installed in the dependencies. So you don't need to rerun the server to see the changes, but simply refresh the page is enough. For now there should be only a sample page to view. If there's an error, it will displayed directly. Server will ***NOT*** accept any request of POST, DELETE. But simply a GET message.

