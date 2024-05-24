const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""

global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"


global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/YosafN/YOUSAF-KHAN";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaXTvQ7JuyAHXjJBs61T";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaXTvQ7JuyAHXjJBs61T" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/4c6df8243017a1f7e7890.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923194778990" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923194778990";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923115971525,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://yousaf khan-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_56_05_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDkxLFxuICAgICAgICA2NSxcbiAgICAgICAgODksXG4gICAgICAgIDM5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDU1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDkxLFxuICAgICAgICA0OCxcbiAgICAgICAgODMsXG4gICAgICAgIDEzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDg5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDgsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwMixcbiAgICAgICAgNTQsXG4gICAgICAgIDk1LFxuICAgICAgICAxODQsXG4gICAgICAgIDkxLFxuICAgICAgICAxMyxcbiAgICAgICAgMTYzLFxuICAgICAgICA2MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTgxLFxuICAgICAgICAxODQsXG4gICAgICAgIDEsXG4gICAgICAgIDMwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTksXG4gICAgICAgIDgwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDg3LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjAwLFxuICAgICAgICA0OCxcbiAgICAgICAgODQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTY0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjEyLFxuICAgICAgICAzMixcbiAgICAgICAgNTcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDcxLFxuICAgICAgICAyNCxcbiAgICAgICAgNSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcxLFxuICAgICAgICAzMixcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjU0LFxuICAgICAgICA3OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDk4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTksXG4gICAgICAgIDE5NixcbiAgICAgICAgMjMsXG4gICAgICAgIDcxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDU1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTI3LFxuICAgICAgICA4NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDkzLFxuICAgICAgICA5NixcbiAgICAgICAgMTA5LFxuICAgICAgICA2NixcbiAgICAgICAgMzAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDksXG4gICAgICAgIDY2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNCxcbiAgICAgICAgMzksXG4gICAgICAgIDE4NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjA1LFxuICAgICAgICA0MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDc2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDksXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgODlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTA1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDExMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDI3LFxuICAgICAgICA5MyxcbiAgICAgICAgMixcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTk3LFxuICAgICAgICA4OCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDYxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzNSxcbiAgICAgICAgNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDM2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE2LFxuICAgICAgICA0NixcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDYzLFxuICAgICAgICA0OSxcbiAgICAgICAgMjE5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiYVJPRWdPQTZ6OHIwQ1Vkbi9Yam1SdXFWTnB0MjdjdWlFbktWeW9naHc3QT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMxOTQ3Nzg5OTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjM0NUEzMjU3NzFFMDIxODc5OUQ5ODYxMjk5MDg2QjdDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNjUyNjU4M1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzE5NDc3ODk5MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOUNENDkxMTI0MEMxNjUyOTE1NDQzMTFBNzM0QzA5QzFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE2NTI2NTgzXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMTk0Nzc4OTkwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI0NTdCQkIyNUZFRUFEQzg1MDdGMDk2NDcxRkQ4OTM0NFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTY1MjY1ODdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMxOTQ3Nzg5OTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjI3QTc0QTRENjY2MDQxRjE4QkZENUUxMTNEMTIzQkU3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNjUyNjU4OFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJvTEZrMlN5QVJibUZhQVNOZ2hPUENnXCIsXG4gIFwicGhvbmVJZFwiOiBcImI2MDJhM2UxLWNhNjUtNGNjOS05YzY1LWVlN2YyZjk2ZmUxY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTMsXG4gICAgICAxNTQsXG4gICAgICA3NCxcbiAgICAgIDE1NSxcbiAgICAgIDQ5LFxuICAgICAgMTA0LFxuICAgICAgMjAyLFxuICAgICAgNTMsXG4gICAgICAyLFxuICAgICAgMjQ3LFxuICAgICAgMjQ2LFxuICAgICAgODAsXG4gICAgICAxMTMsXG4gICAgICAyMDksXG4gICAgICAzOCxcbiAgICAgIDE0MCxcbiAgICAgIDE5NCxcbiAgICAgIDIyMyxcbiAgICAgIDIyLFxuICAgICAgMTUyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1OSxcbiAgICAgIDIxNyxcbiAgICAgIDI2LFxuICAgICAgMTUwLFxuICAgICAgMTEwLFxuICAgICAgMTkzLFxuICAgICAgMTA2LFxuICAgICAgMTk1LFxuICAgICAgMjM4LFxuICAgICAgMjM1LFxuICAgICAgMTM2LFxuICAgICAgMTkxLFxuICAgICAgNTIsXG4gICAgICAxNzUsXG4gICAgICAyLFxuICAgICAgNTksXG4gICAgICA3MixcbiAgICAgIDIwMSxcbiAgICAgIDIxMSxcbiAgICAgIDE5OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI3SDFBUUw1RFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMTk0Nzc4OTkwOjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQmFsb2NoXCIsXG4gICAgXCJsaWRcIjogXCIxMTA1ODI5NzU5NzE0MDc6MTBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUHFSMS9JRkVQQzd3TElHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJRUlBuYlVkOWd3eVV1dy9venJzZjkya28xMXJRR0hZUHZlM2xTK2pKeUhrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInMzV291Yk5EbndUc0VRZkdMcXZoWmdCbG1xUVdNanpHVThOOHJXbzcxa256ajNLcEVNTTdlMnhnVmRLUHo5ZGcwVlNoYUxKNHBFdXRSVUcvT0hEMkJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImtWaHN6eSsrL0JGSE5KWVN6MTdwazZBbXhsNlE5SkxlcnhCNE9LUUErenVaQnY3aDg3MFpEY1JjUWpvMUhHT0dabWhhZlhuM2xkQ3J6ako1L3lnNUN3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzE5NDc3ODk5MDoxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTIxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTY1MjY1ODAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJd1JcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUl3Ui5qc29uIjogIntcImtleURhdGFcIjpcIlp6WC9DdVZSOGxUdHZ6cVRlYjBLK1lNNFRTY21USTNZOTdkTW1ucDdicjg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTU4MjY4MDMxNCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE2NTI2NTgyOTUwXCJ9Igp9" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: SULTAN KHAN Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.9",
  caption : process.env.CAPTION || "➳🇲R" , // ```『 SULTAN KHAN BALOCH  』```", //*『SULTAN • KHAN BALOCH』*\n https://youtube.com/@Y.BGamer110"),
 
  author : process.env.PACK_AUTHER|| "SULTAN BALOCH",
  packname: process.env.PACK_NAME || "❤️",
  botname : process.env.BOT_NAME  || "SULTAN KHAN",
  ownername:process.env.OWNER_NAME|| "SULTAN KHAN",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "public",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SULTAN KHAN",



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
