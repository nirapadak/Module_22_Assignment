const app = require('./app');
require('dotenv').config();

const port = process.env.RUNNING_PORT || 8080;

app.listen(port,()=>{
  console.log(`listening on port http//localhost:${port}`);
})