import express  from 'express';
import conexaoBD from './database/index.js';
import routes from './routes/index.js'
import cors from 'cors'


const app = express();

app.use((req,res,next)=>{
    console.log('xd')
    res.header("Access-Control-Allow-Origin","*")
    next()
})

//conexão com o banco de dados
conexaoBD()



routes(app)

export default app;
