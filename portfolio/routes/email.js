const keys = require('../config/keys');
const mongoose = require('mongoose');
mongoose.connect(process.env.mongoURI || keys.mongoURI);
require('../models/email');
const Email = mongoose.model('emails');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.sendGridKey || keys.sendGrid);

module.exports = app => {
    app.post('/send-email', function (req, res) {
        new Email ({
            from: req.body.emailAddress,
            subjectLine: req.body.subject.Line,
            body: req.body.emailBody,
            date: Date()})
        .save(function (err, doc) {
            if (err)
                res.json('<p>An error has occured while sending your message.</p>');
            else
                res.send('<p>Thank you! We\'ll be in contact soon</p>');
        });

        let msg = {
            to: process.env.emailAddress || keys.emailAddress,
            from: req.body.emailAddress,
            subject: req.body.subjectLine,
            text: req.body.emailBody,
            html: `<p>${req.body.emailBody}</p>`,
        };
        
        sgMail.send(msg);
    });
};