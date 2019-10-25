# cs411fall2019
## Author: Miao Liu, Yuyang Huang, Daniel
do ***NOT*** change the files except in app_server/views/ (update in 10.25)

Ignore the vulnerability for now. I will fix this for next update.

Here's the way to update the html file.

- pull your data
Just pull from the github using `git pull`

- install npm
Here is the [link](https://nodejs.org/en/download/) for you to install npm first. Use the
`sudo npm install -g npm`  
(sudo is not necessary for some cases, and I don't know the reason) to update after you install it but before starting the project. We need to make sure that we use the same version (not necessary, but good to debug).

- install npm dependencies
You have to make sure your npm is correctly installed when your dependencies are updated.
Please mark what dependencies you add in each commit so that the server side can correctly respond to the changes.
`npm install` will help you install whatever you want to use for the app

- edit index.html. This is the temp solution for now. We will use front-end frameworks later.
