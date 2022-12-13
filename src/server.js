const express = require("express");
const nodemailer = require("nodemailer");
const serverless = require("serverless-http");



const app = express();
const cors = require("cors");
const path  = require("path")
const router = express.Router();
router.get("/",(req,res)=>{
  req.json({
    message:"hosting nodejs backend successfull"
  })
})

app.use('/.netlify/functions/api',router)
const fileUpload = require("express-fileupload");
require("dotenv").config();

// middleware
router.use(express.json());
router.use(cors());

// const __dirname = path.resolve();

 // I don't know why
 router.use(express.urlencoded({ extended: true })); // But this is required. I dropped it
 router.use(fileUpload({
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
   router.post("/", (req, res) => {
   
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

  router.post("/career", (req, res) => {
   
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



//   app.use(express.static(path.join(__dirname, '/build')));
//   app.get('*', (req, res) =>
//   res.sendFile(path.join(__dirname, '/build/index.html'))
// );

// app.use((err, req, res, next) => {
//   res.status(500).send({ message: err.message });
// });
//    "build": "react-scripts build",

// const port = 3001;"proxy": "http://127.0.0.1:3001",
// const port = process.env.PORT || 3001;
// app.listen(port, () => {
//  console.log(`Server is running on port: ${port}`);
// });

module.exports=app;
module.exports.handler = serverless(app)
