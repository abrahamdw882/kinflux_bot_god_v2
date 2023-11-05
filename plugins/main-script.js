import { promises } from 'fs'
import { join } from 'path'

let handler = async function (m, { conn, __dirname }) {
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
  
m.reply(`

*A christain bot  WHATSAPP USER BOT 💃🏻♥️*

_Abraham Christain Bot Is a Multi device Whatsapp User Bot created By Abraham Dwamena, , _
ᴘʟᴇᴀꜱᴇ ꜱᴛᴀʀ ᴛʜᴇ ʀᴇᴘᴏ ᴀɴᴅ ꜰᴏʟʟᴏᴡ ᴍᴇ ᴏɴ ɢɪᴛʜᴜʙ:

  ▢ Git : ${_package.homepage}


⭐ Total Stars: *0*
🍽️ Forks: *Mine*
💭 language : *JavaScript* 
⚖️ license : *MIT License* 
⚙️ Branch : *main*
🧰 Last Updated :2023-08-29T05:10:54Z 
🚁 owner number : Wa.me//233533763772
                : Wa.me//233533763772
 😇 bot group https://chat.whatsapp.com/C0dwHVxigmgC6C2UZwQyy4
              
      
*🙏Thanks for using our Christain bot 🔥*

*® Abraham*
*© 2023 Abraham Dwamena 😇*

`.trim())
    
}

handler.help = ['script']
handler.tags = ['main']
handler.command = ['sc', 'git', 'script'] 

export default handler
