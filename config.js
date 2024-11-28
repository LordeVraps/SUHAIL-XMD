const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="HEAVEN, ANGEL'S PALACE."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© LORD TENSHI" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "27710200228";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_01_15_11_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDM5LFxuICAgICAgICA5MSxcbiAgICAgICAgNTksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDMsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDM3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDcxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2NixcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzUsXG4gICAgICAgIDgwLFxuICAgICAgICAyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDI1LFxuICAgICAgICAyMjksXG4gICAgICAgIDYzLFxuICAgICAgICA5NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTEyLFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAzNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1NixcbiAgICAgICAgOTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDUzLFxuICAgICAgICAyMDksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDksXG4gICAgICAgIDUyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDkyLFxuICAgICAgICA3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI3LFxuICAgICAgICA0OCxcbiAgICAgICAgMjA0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDYzLFxuICAgICAgICA0MixcbiAgICAgICAgNzAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMixcbiAgICAgICAgMTE0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyLFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDExNixcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDksXG4gICAgICAgIDYxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjksXG4gICAgICAgIDMzLFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTE5LFxuICAgICAgICA1NixcbiAgICAgICAgOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDg0LFxuICAgICAgICA0MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDg4LFxuICAgICAgICAxODYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDU2LFxuICAgICAgICA5LFxuICAgICAgICA4MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQwLFxuICAgICAgICAzOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA3MixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA4NixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDgxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDgxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTc5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDQ2LFxuICAgICAgICA2OCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjM3LFxuICAgICAgICA0OSxcbiAgICAgICAgOCxcbiAgICAgICAgMTExLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgODcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDY5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgODYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE4MixcbiAgICAgICAgODMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxODUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDM1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDYzLFxuICAgICAgICAyNCxcbiAgICAgICAgODIsXG4gICAgICAgIDYzLFxuICAgICAgICA2MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMSxcbiAgICAgICAgNSxcbiAgICAgICAgMTM0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIrSThhbWZxbXNOUmcvWG9ZMS9IY1krb2V2WnBZUm5kWmVOamlyUmRkTFFFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI3NzEwMjAwMjI4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4QjM3QTg5RTI2QUE1RUM1NjUxQjdGRUNFRDQ5OUU0OFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzI3NTY1NTBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSno0VjhTV3dSZE91TGtTUVlqV21HQVwiLFxuICBcInBob25lSWRcIjogXCI0YjVlNjI3My0yNTAwLTQ2NzgtYWEwYS04Y2FlZDdkMDdkOTBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTksXG4gICAgICA3MCxcbiAgICAgIDI0NSxcbiAgICAgIDEyOCxcbiAgICAgIDExNSxcbiAgICAgIDE4MSxcbiAgICAgIDEyOCxcbiAgICAgIDI0OSxcbiAgICAgIDQyLFxuICAgICAgMjAzLFxuICAgICAgMTI5LFxuICAgICAgMzUsXG4gICAgICAyMjUsXG4gICAgICAxMDEsXG4gICAgICAxNzIsXG4gICAgICAxOTEsXG4gICAgICAxMDUsXG4gICAgICAxMTksXG4gICAgICAxODMsXG4gICAgICAyMzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI1LFxuICAgICAgMTA0LFxuICAgICAgMjQzLFxuICAgICAgMjEwLFxuICAgICAgMTQ2LFxuICAgICAgODUsXG4gICAgICAyMDYsXG4gICAgICAxOTUsXG4gICAgICAxNTcsXG4gICAgICA3LFxuICAgICAgMTI5LFxuICAgICAgMTQxLFxuICAgICAgMTcxLFxuICAgICAgMTg1LFxuICAgICAgMzksXG4gICAgICAyMjgsXG4gICAgICA1MCxcbiAgICAgIDU4LFxuICAgICAgMTMxLFxuICAgICAgMjM1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkNCUVBMTVhGXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNzcxMDIwMDIyODo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMzk5NzM0NTM5OTYyMjE6NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMK3Y0UFVHRUx1SW43b0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInJVU3BJVDZNTXJKd09TUlZGek12SVBsQVRnM0h3MUVMOHdqOVRwSFloRnc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYlZYWEd6ZTJna0FIUkkvR2xIR0pkdk15Mis1UzJNWmRnVDE2V0thYXRQVjltb2NsWGloVGV1dFBvZExkTU5YY2IzSDdURWVWZlBKME95TzVRMlBEQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiK085SmlPbCtzWFhkdEE0T2NHRldBZmNlL3NXQmxXUzlRNHROSHJHR1ZLTTd4ZzdKYS9XcDRIQXhZQlY1NUV4eTI5YWwxNEF0TjFLMTZGUEhDOW5kaFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjc3MTAyMDAyMjg6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDkyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzI3NTY1NDMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJTWpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlNai5qc29uIjogIntcImtleURhdGFcIjpcInJScnhENXYyaEY2WEhOTGtBYThsU2lnTWl1dXFWK05MR292NnVUekxnUms9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTg1NzU1ODQ2MyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMyMDM5NjY0NTI1XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Dirty boots",
  ownername:process.env.OWNER_NAME|| "𝙺𝙴ͥ𝙽ͣ𝚃ᷟ𝙴𝙽𝚂𝙷𝙸⍣楤",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
