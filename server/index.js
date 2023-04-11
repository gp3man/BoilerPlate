const port = process.env.PORT || 3000;
const app = require('./app');
const chalk = require('chalk')

// const db = require('./db')

// const init = ()=>{
  // await db.syncAndSeed()
  app.listen(port, ()=> console.log(chalk.bgGreenBright(`listening on port ${port}`)));
// }

// init()
