require('dotenv').config();

const express = require ('express')
    ,bodyParser= require('body-parser')

const ref = require ('./firebase/firebase')

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;


app.listen(port, ()=> {
    console.log(`Server listening on port: ${port}`);

})

app.post('/name/:firstname/:lastname', (req,res)=>{
    // res.send(process.env.POSTMESSAGE);
    console.log(req.params.firstname);
    var firstname = req.params.firstname;
    var lastname = req.params.lastname;
    ref.push({
        person: {
            firstname: firstname,
            lastname: lastname
        }
    }, console.log("Success"))
})

app.use('/get', (req,res,next)=> {
    res.send(process.env.GETMESSAGE)
    ref.push({
        love: 'yes'
    })
})