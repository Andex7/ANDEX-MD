const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.evn.ALIVE_IMG || "https://telegra.ph/file/c8be6c96d4c1ac33b4681.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "Hello, I am ANDEX-MD I alive now 🎉",
};
