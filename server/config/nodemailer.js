import nodemailer from "nodemailer";
import ejs from "ejs";
import path from "path";

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "shubhamduttanovember@gmail.com", // generated ethereal user
    pass: "bolbona:)", // generated ethereal password
  },
});

export { transporter };
