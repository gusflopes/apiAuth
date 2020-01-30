# API Multiple Authentication Strategies
## Backend

### Description
This project started as a boilerplate for multiple Authentication Strategies using [Passport.js](), allowing the user to register with any of the Strategies.

The user will be allowed to register/signIn using JWT Tokens, Google OAuth2 or Facebook OAuth2.

### Initial setup

To setup this project you'll need to set the Environment Variables, especially the credentials from Google and Facebook. Just type `cp .env.example .env` and then put your credentials on the **.env** file.

After that, just run the following commands to setup your MongoDB and start the project:

```bash
docker run --name mongodb -p 27017:27017 -d -t mongo

yarn

yarn dev
```
### Final Comments
Project still under development.

### Author
Developed by [Gustavo Lopes](https://blog.gusflopes.dev).
