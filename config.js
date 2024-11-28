youconst fs = require('fs-extra')
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
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/KngViPTA6CWFgYxJ9lUfd8";
global.website=process.env.GURL || "https://chat.whatsapp.com/KngViPTA6CWFgYxJ9lUfd8" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.postimg.cc/V6N69D2L/IMG-20241127-WA0226.jpg" || "https://i.postimg.cc/V6N69D2L/IMG-20241127-WA0226.jpg" ; // SET LOGO FOR IMAGE 
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
global.userImages= process.env.USER_IMAGES || "https://i.postimg.cc/V6N69D2L/IMG-20241127-WA0226.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,27688338288";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,27688338288";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "27710200228,27688338288";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_59_11_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA3MixcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDMyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDU0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjA5LFxuICAgICAgICA0MCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4LFxuICAgICAgICAyMyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyOCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDQxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDc5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTA2LFxuICAgICAgICA1MixcbiAgICAgICAgMjUyLFxuICAgICAgICA0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjA3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDY4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDExLFxuICAgICAgICAxNCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDIxMixcbiAgICAgICAgNzksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDksXG4gICAgICAgIDkxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA2NixcbiAgICAgICAgMTg1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDkxLFxuICAgICAgICAzNyxcbiAgICAgICAgODIsXG4gICAgICAgIDg0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDc5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDM2LFxuICAgICAgICA0MixcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzksXG4gICAgICAgIDU4LFxuICAgICAgICA3LFxuICAgICAgICA0LFxuICAgICAgICAxODQsXG4gICAgICAgIDM0LFxuICAgICAgICA3OSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDcyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDUxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNDksXG4gICAgICAgIDMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTA2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDUxLFxuICAgICAgICAxODcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5LFxuICAgICAgICA4MixcbiAgICAgICAgNjcsXG4gICAgICAgIDQsXG4gICAgICAgIDg3LFxuICAgICAgICA4MixcbiAgICAgICAgMjU1LFxuICAgICAgICAyOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1LFxuICAgICAgICA5OCxcbiAgICAgICAgMTkzLFxuICAgICAgICA0NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjIsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTIsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTAsXG4gICAgICAgIDI0MixcbiAgICAgICAgOTcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDksXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDI4LFxuICAgICAgICAyMjksXG4gICAgICAgIDEzNixcbiAgICAgICAgNzcsXG4gICAgICAgIDkzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxODQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTM3LFxuICAgICAgICA1MixcbiAgICAgICAgMjI1LFxuICAgICAgICA1MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDYwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTA4LFxuICAgICAgICA4NCxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEyN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDc5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjksXG4gICAgICAgIDcwLFxuICAgICAgICAxODQsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjIwLFxuICAgICAgICA2OSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDg2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDM0LFxuICAgICAgICAxLFxuICAgICAgICAxODYsXG4gICAgICAgIDE3MixcbiAgICAgICAgNTAsXG4gICAgICAgIDkzLFxuICAgICAgICA0MixcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjA4LFxuICAgICAgICA1MCxcbiAgICAgICAgNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQzLFxuICAgICAgICA3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTk0LFxuICAgICAgICA4NyxcbiAgICAgICAgODgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTY4LFxuICAgICAgICA3MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTM4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyOSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlE5SldBRGlUNVZLbkI5TU9qa1NuZk1pSTlCam5zNml0YWVGdnVGZGV1Skk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInZKVm83NjBjVEwtajVWRy1ZVHdIUkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTEzMjRmMjAtYjNjZS00NDBkLTlhM2QtZjgyNTg0NTIzM2RkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzNCxcbiAgICAgIDc0LFxuICAgICAgMTgwLFxuICAgICAgMTY4LFxuICAgICAgOTcsXG4gICAgICAyMzIsXG4gICAgICAxMjcsXG4gICAgICAxNTYsXG4gICAgICAwLFxuICAgICAgMjEyLFxuICAgICAgNzcsXG4gICAgICAxMTgsXG4gICAgICAxMjgsXG4gICAgICAzLFxuICAgICAgMTA2LFxuICAgICAgOCxcbiAgICAgIDUzLFxuICAgICAgMTY5LFxuICAgICAgODMsXG4gICAgICAxNDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQzLFxuICAgICAgOTEsXG4gICAgICA3MyxcbiAgICAgIDE0LFxuICAgICAgMjI4LFxuICAgICAgMTUyLFxuICAgICAgMTg5LFxuICAgICAgMjA4LFxuICAgICAgMjgsXG4gICAgICAyMzcsXG4gICAgICAxOCxcbiAgICAgIDIwMCxcbiAgICAgIDE5MixcbiAgICAgIDE3NCxcbiAgICAgIDEzMCxcbiAgICAgIDQzLFxuICAgICAgNTIsXG4gICAgICAxOSxcbiAgICAgIDExMixcbiAgICAgIDMxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkc0NEhFS1gyXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNzcxMDIwMDIyODo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMzk5NzM0NTM5OTYyMjE6N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMK3Y0UFVHRU5lbW9yb0dHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInJVU3BJVDZNTXJKd09TUlZGek12SVBsQVRnM0h3MUVMOHdqOVRwSFloRnc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWmgzcXJKWFdjQkk2VnFsY2NubWFJSEhFS0IxRWZUa0tHZkZ0UjdrZXpkQk9UYjBqZ1kzRVhlaVd6SDZ4VStHYm52dmwrREJxOUNCR20rZ1BReFo0QVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNkt3cC9uSG45NTU5dnJ6d2J2TTBiVHBUNHJNTXFBMjczVERjNFdRdEU1MmMrYXRBSHNJTURYZ3h0eEMxbmRFN25LajB0dnhGaUxjNkNqcjhsZUhGaWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjc3MTAyMDAyMjg6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDkyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzI4MDk1NjIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJTWpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlNai5qc29uIjogIntcImtleURhdGFcIjpcInJScnhENXYyaEY2WEhOTGtBYThsU2lnTWl1dXFWK05MR292NnVUekxnUms9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTg1NzU1ODQ2MyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ baby tenshi ® 』```", //*『PLAY THIS SONG• TENSHI』*\n youtu.be/SNIogCOtZQQ?si=s5--zH4h01iUUxoN"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "tenshiiiii",
  botname : process.env.BOT_NAME  || "🟧O-RANGE⬛",
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
  LANG: ( process.env.THEME ||  "O-RANGE"  ).toUpperCase(),



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
