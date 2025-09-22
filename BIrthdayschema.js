const express=require('express')
const mongoose=require('mongoose')
const birthdaySchema=require('./model')
const cors=require('cors')
const app=express()
app.use(express.json())
const PORT=5000
mongoose.connect('mongodb+srv://Maddirala:abcd123@cluster0.bvk8aa0.mongodb.net/Maddirala')
.then(()=>{
  console.log('mongo db connected successfully')
})
.catch((error)=>{
  console.log(error)
})
app.post('/', async (req, res) => {
  try {
    const {name,birthday,email,phone} = (req.body);
    await birthday.save();
    res.send('Birthday added successfully!');
  } catch (err) {
    res.status(200).send(err);
  }
});

app.get('/send-greetings', async (req, res) => {
  try {
    const birthdays = await Birthday.find();
    await sendGreetings(birthdays);
    res.send('Birthday greetings sent successfully!');
  } catch (err) {
    res.status(200).send(err);
  }
});
const nodemailer = require('nodemailer');
const twilio = require('twilio');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-password'
  }
});

const accountSid = 'ACKJDWJ';
const authToken = '8327468';
const client = new twilio(accountSid, authToken);

async function sendGreetings(birthdays) {
  const today = new Date();
  birthdays.forEach((birthday) => {
    if (birthday.birthday.getMonth() === today.getMonth() && birthday.birthday.getDate() === today.getDate()) {
     const mailOptions = {
        from: 'she123@gmail.com',
to: birthday.email,
        subject: 'Happy Birthday!',
        text: `Happy birthday, ${birthday.name}!`
      };
      transporter.sendMail(mailOptions, (err) => {
        if (err) {
          console.log(err);
        }
      });
      client.messages
        .create({
          body: `Happy birthday, ${birthday.name}!`,
          from: 'your-twilio-phone-number',
          to: birthday.phone
        })
        .done();
    }
  });
}
app.listen(PORT,()=>{
  console.log('server running')
})