const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const logger = require("morgan");
const cors = require("cors");
const creds = require("./config/config");

const app = express();

const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//use cors to allow cross origin resource sharing
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(logger("dev"));

app.listen(port, () => {
  console.log("We are live on port 8080");
});

app.get("/", (req, res) => {
  res.send("Welcome to my api");
});

//routes for posting info from contact
app.post("/send", function (req, res) {
  var data = req.body;
  const output = `
  <p>You have a new contact request</>
  <h3>Contact details</h3>
  <ul>
    <li>First name: ${data.fname}</li>
    <li>Last name: ${data.lname}</li>
    <li>Company name: ${data.company}</li>
    <li>Phone number: ${data.phone}</li>
    <li>Email address: ${data.email}</li>
  </ul>
  <h3>Message</h3>
  <p>${data.message}</p>
  `;
  const autoEmail = `
  <h3>Contact request confirmation</h3>
  <p>Hey ${data.fname},</p>
  <p>Thank you for submitting your request. I will get back to you as soon as possible through this email or phone number: ${data.phone}. if your phone number has changed, please email me back with your new phone number.</p>
  <p>Thank you,</p>
  <p>Janvier Mbilizi</p>
  <p>Full Stack Web Developer</p>
  `;
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    // host: "smtp.ethereal.email",
    // port: 587,
    // secure: false, // true for 465, false for other ports
    host: "smtp.gmail.com",
    port: 465,
    secureConnection: true,
    auth: {
      type: "OAuth2",
      user: creds.USER, // generated ethereal user
      pass: creds.PASS, // generated ethereal password
      clientId: creds.clientID,
      clientSecret: creds.clientSecret,
      refreshToken: creds.refreshToken,
      accessToken: creds.accessToken,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  let mailOptions = {
    from: '"Janvier Mbilizi" <janviermbilizi@gmail.com>', // sender address
    to: data.email, // list of receivers
    subject: "Confirmation", // Subject line
    html: autoEmail, // html body
  };

  let contactRequest = {
    from: '"Portfolio" <janviermbilizi@gmail.com>', // sender address
    to: "janviermbilizi@gmail.com", // list of receivers
    subject: "Contact request", // Subject line
    html: output, // html body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  });
  //send an inform the team or me that someone request to be
  transporter.sendMail(contactRequest, (error, info) => {
    if (error) {
      return console.log(error);
    }
  });

  console.log(req.body);
});
