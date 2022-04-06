// ------------Applicaiton initial setting-------------
const express = require('express');
const app = express();
const port = 3000;
const sumNum = require('./sumFunction');

app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.render('index');
})

app.get('/data', (req, res)=>{
    let inputNum = req.query.number;
    if(!inputNum){
        res.send('Lack of Parameter');
    }else if(isFinite(inputNum)){
        
            inputNum = parseInt(inputNum);
            // res.send(inputNum);
            res.send(`${sumNum(inputNum)}`);
        
        
    }else{
        res.send('Wrong Parameter');
    }
})

app.use(function(err, req, res, next) {
    res.locals.error = err;
    res.status(500);
    res.render('error');
  })

app.listen(port, () => {
    console.log(`Applicaiton is operating and listening on port ${port}`)
  })