const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const cors = require("cors");
const fileUpload = require("express-fileupload");
require("dotenv").config();

// middleware
app.use(express.json());
app.use(cors());


 // I don't know why
  app.use(express.urlencoded({ extended: true })); // But this is required. I dropped it
  app.use(fileUpload({
    createParentPath: true                        // and it stopped working.
  }));

 

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.EMAIL,
      pass: process.env.WORD,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    },
   });

   transporter.verify((err, success) => {
    err
      ? console.log(err)
      : console.log(`=== Server is ready to take messages: ${success} ===`);
   });


   //send email for query
   app.post("/", (req, res) => {
   
    if(req.files != null)
    {
    const docs = Object.keys(req.files).map(key => {
      return {
        filename: req.files[key].name,
        content: req.files[key].data
      }
    });
  
  
    let mailOptions = {
      from: `${req.body.Email}`,
      to: process.env.EMAIL,
      subject: `Message from: ${req.body.Email}`,
      text: `Phone:${req.body.Message} 
            FirstName:${req.body.FirstName} LastName:${req.body.LastName}
            Message:${req.body.Message}
            `  ,
      
        attachments: docs
  
     };
  
     transporter.sendMail(mailOptions, function (err, data) {
      if (err) {
          res.json({
              status: "fail",
            });
      } else {
          console.log("== Message Sent ==");
          res.json({
            status: "success",
          });
      }
     });

    }

    if(req.files == null)
    {
  
    let mailOptions = {
      from: `${req.body.Email}`,
      to: process.env.EMAIL,
      subject: `Message from: ${req.body.Email}`,
      text: `Phone:${req.body.Message} 
            FirstName:${req.body.FirstName} LastName:${req.body.LastName}
            Message:${req.body.Message}
            `  ,
  
     };
  
     transporter.sendMail(mailOptions, function (err, data) {
      if (err) {
          res.json({
              status: "fail",
            });
      } else {
          console.log("== Message Sent ==");
          res.json({
            status: "success",
          });
      }
     });

    }
    // res.send(200);
  });

  //CAREER

  app.post("/career", (req, res) => {
   
    if(req.files != null)
    {
    const docs = Object.keys(req.files).map(key => {
      return {
        filename: req.files[key].name,
        content: req.files[key].data
      }
    });
  
  
    let mailOptions = {
      from: `${req.body.Email}`,
      to: process.env.EMAIL,
      subject: `Message from: ${req.body.Email}`,
      text: `Phone:${req.body.Message} 
            FirstName:${req.body.Name} 
            Vacancy:${req.body.Vacancy}
            Message:${req.body.Message}
            `  ,
      
        attachments: docs
  
     };
  
     transporter.sendMail(mailOptions, function (err, data) {
      if (err) {
          res.json({
              status: "fail",
            });
      } else {
          console.log("== Message Sent ==");
          res.json({
            status: "success",
          });
      }
     });

    }

    if(req.files == null)
    {
  
    let mailOptions = {
      from: `${req.body.Email}`,
      to: process.env.EMAIL,
      subject: `Message from: ${req.body.Email}`,
      text: `Phone:${req.body.Message} 
            FirstName:${req.body.Name} 
            Vacancy:${req.body.Vacancy}
            Message:${req.body.Message}
            `  ,
  
     };
  
     transporter.sendMail(mailOptions, function (err, data) {
      if (err) {
          res.json({
              status: "fail",
            });
      } else {
          console.log("== Message Sent ==");
          res.json({
            status: "success",
          });
      }
     });

    }
    // res.send(200);
  });




const port = 3001;
app.listen(port, () => {
 console.log(`Server is running on port: ${port}`);
});