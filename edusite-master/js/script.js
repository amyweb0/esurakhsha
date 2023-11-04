const getlocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    alert("Geolocation is not supoorted by this browser");
  }
};

const showPosition = (position) => {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
  console.log(lat, long);
};

const showError = (error) => {
  console.log(error);
};

const accountSid = "AC14218bca4e9a0e701df94a1855746785";
const authToken = "ec73c0ddf422fbfff56e28fedee31f59";
const client = require("twilio")(accountSid, authToken);

// Get user's location (latitude and longitude) using Geolocation API

// Construct the message with the user's location
const message = `User's Location - Latitude: ${lat}, Longitude: ${long}`;

// Twilio phone numbers (sender and recipient)
const from = +12562293372;
const to = +918210946637;

// Send SMS
client.messages
  .create({
    body: message,
    from: from,
    to: to,
  })
  .then((message) => console.log(`SMS sent with SID: ${message.sid}`))
  .catch((error) => console.error(`Error: ${error.message}`));
getlocation();
