import express from 'express'
import dotenv from 'dotenv'
dotenv.config()


const app = express();
const port = process.dotenv || 8000;




// api endpoints
app.get('/', (req, res) => res.status(200).send('hello world'));
//listen
app.listen(port, () => console.log(`listening on localhost: ${port}`));