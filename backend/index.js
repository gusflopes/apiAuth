const app = require('./src/app');

// Start the server
const port = process.env.APP_PORT || 3333;
app.listen(port);
console.log(`Server listening at ${port}`);
