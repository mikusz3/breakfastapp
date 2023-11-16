// Install nodemailer using: npm install nodemailer

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'mikusz3plooppoopa@gmail.com', // replace with your email
        pass: 'Z768si6TrMqPNs*gZuEP6xl' // replace with your email password
    }
});

app.post('/submit', (req, res) => {
    const userEmail = req.body.email;

    const mailOptions = {
        from: 'mikusz3plooppoopa@gmail.com', // replace with your email
        to: userEmail,
        subject: 'Breakfast TV App Launch Notification',
        text: 'Thank you for joining the waitlist! We will keep you informed about the app launch.'
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
