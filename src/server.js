import express from 'express';
import 'dotenv/config'
import database from './config/database.js';
import router from './routes/router.js';

const app = express();

app.use(express.json());

// testing endpoint
app.get('/health', (req, res) => {
    res.status(200).send('Nice!');
})

app.use(express.static('public'));

app.use('/api/v1', router);

app.listen(process.env.PORT, (error)=>{
    if(!error){
        console.log('App in port: '+ process.env.PORT);
        database.authenticate();
    }
});