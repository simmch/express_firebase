require('dotenv').config();

const express = require ('express')
    ,bodyParser= require('body-parser')

const db = require ('./firebase/firebase')

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;


app.listen(port, ()=> {
    console.log(`Server listening on port: ${port}`);

})

app.post('/name', (req,res)=>{
    console.log(req.body);
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    // var address = req.params.address;
    db.person.push({
        firstname: firstname,
        lastname: lastname
    }, console.log("Person success"))

    // db.address.push({
    //     address: address
    // }, console.log("Address success"))
})

app.use('/get', (req,res,next)=> {
    res.send(process.env.GETMESSAGE)
    ref.push({
        love: 'yes'
    })
})