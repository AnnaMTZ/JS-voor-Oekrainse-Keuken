const express = require('express');
const nodemailer = require('nodemailer');
const app = express();


const PORT = process.env.PORT || 8001;


//Middleware
app.use(express.static('public'));
app.use(express.json());
//

//Renders html page 
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/contactform.html')
});

//Handling POST request from app.js

app.post('/', (req, res) => {
    console.log(req.body);

      //OK email

    const transporter = nodemailer.createTransport({
        host: '.......',
        port: 500,
        auth: {
            user: '.............',
            pass: '............'
        }
    });


    const mailOptions = {
        from: req.body.email,
        to: '.....@oekraiensekeuken.nl',
        subject: `Message from ${req.body.email}: ${req.body.subject}`, 
        text: req.body.message
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            console.log(error);
            res.send('error');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('success');
        }
    })

})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});



