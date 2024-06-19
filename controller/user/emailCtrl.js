const nodemailer = require("nodemailer");
const asyncHandler = require("express-async-handler");

const sendEmail = asyncHandler(async (data, req, res) => {
    try {
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.Mail_ID,
                pass: process.env.pass,
            },
        });

        let info = await transporter.sendMail({
            from: '"✧˚·̩̩̥͙˚̩̥̩̥·̩̩̥͙✧·̩̩̥͙˚̩̥̩̥˚·̩̩̥͙✧ 𝒜𝓃𝓀𝒾𝓉 ✧˚·̩̩̥͙˚̩̥̩̥·̩̩̥͙✧·̩̩̥͙˚̩̥̩̥˚·̩̩̥͙✧" <ankit2022svnit@gmail.com>',
            to: data.to,
            subject: data.subject,
            text: data.text,
            html: data.htm,
        });
        
        console.log("Email sent:", info.response);
        res.status(200).send("Email sent successfully");
    } catch (err) {
        console.error("Error sending email:", err);
        res.status(500).send("Failed to send email");
    }
});

module.exports = { sendEmail };
