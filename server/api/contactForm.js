const router = require('express').Router();


router.post("/contactForm", (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const projectType = req.body.projectType;
    const payRange = req.body.payRange;
    const details =  req.body.details;
    const mail = {
        from: name,
        to: 'sarah.lozier@gmail.com',
        subject: "Portfolio Contact Form Submission",
        html: `<p>Name: ${name}</p>`
              `<p>Email: ${email}</p>`
              `<p>Project Type: ${projectType}</p>`
              `<p>Pay Range: ${payRange}</p>`
              `<p>Project Details: ${details}</p>`
    };
    contactEmail.sendMail(mail, (error) => {
        if(error){
            res.json({ status: 'ERROR' });
        }else {
            res.json({ status: 'Message Sent'});
        }
    });
});