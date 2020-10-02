const express = require('express');
const emailRouter = express.Router();
const nodeMailer = require('nodemailer');

console.log("from sendToMe");

const transporter = nodeMailer.createTransport({
    host: /* smtp host from your email provider */ "",
    port: /* port 587 */ "",
    secure: /* boolean */ "",
    auth: {
        user: /* your email username */ "",
        pass: /* your email password */ "",
    }
});

emailRouter.post('/', (req, res, next) => {
    const mail = {
        from: /* who the email should be sent from */ "",
        to: /* who the email should be sent to */ "",
        subject: req.body.subject,
        text: `
        from: ${req.body.name}
        
        contact: ${req.body.email}
        
        message: 
        
        ${req.body.message}`,
    }

    transporter.sendMail(mail, (err, data) => {
        if(err){
            res.json({
                status: 'fail'
            })
        } else {
            res.json({
                status: 'success'
            })
            console.log(`Email sent: ${data.response}`);
        }
    });
});

module.exports = emailRouter;