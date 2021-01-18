
const accountSid = process.env.TWILIO_ACCOUNT_SID;// hidden for purpose of confidentiality
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'Local Hack Day is fun. Testing Twilio for a daily challenge',
     from: '+18327894868',
     to: '+917303233892'// it is a random number not an actual one
   })
  .then(message => console.log(message.sid));
