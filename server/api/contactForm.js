// const router = require('express').Router();
// const mail = require('./config/mailer')();


// router.post("/contactForm", (req, res, next) => {
    
//     const name = req.body.name;
//     const email = req.body.email;
//     const projectType = req.body.projectType;
//     const payRange = req.body.payRange;
//     const details =  req.body.details;
//     console.log('API EMAIL NAME', name);
//     const formInfo = {
//         from: name,
//         to: 'sarah.lozier@gmail.com',
//         subject: "Portfolio Contact Form Submission",
//         html: `<p>Name: ${name}</p>`
//               `<p>Email: ${email}</p>`
//               `<p>Project Type: ${projectType}</p>`
//               `<p>Pay Range: ${payRange}</p>`
//               `<p>Project Details: ${details}</p>`
//     };
//     mail.send(formInfo, (error, data) => {
//         if(error){
//             console.log('NODEMAILER ERROR')
//             res.json({ status: 'ERROR' });
//         }else {
//             console.log('EMAIL SENT!')
//             res.json({ status: 'Message Sent'});
//         }
//     });
// });

// module.exports = router;