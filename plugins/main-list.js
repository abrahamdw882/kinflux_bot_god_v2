let handler = async (m, { conn, usedPrefix, command}) => {
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`
let pp = './kinfluxbot.jpg'
let more = String.fromCharCode(8206)
let readMore = more.repeat(850) 
let lkr = `❀° ┄──•••───╮
      CHRISTAINS BOT MENU  
╰───•••──┄ °😇    
bot created by Abraham Dwamena 
┌─⊷ *CHRISTAIN BOT*
▢ .blocklist
▢ .info
▢ .owner
▢ .donate
▢ .listprem
▢ .help
▢ .audios
▢ .ping
▢ .runtime
└───────────

┌─⊷ *GAMES*
▢ .dado
▢ .delttt
▢ .Math <mode>
▢ .ppt <stone/paper/scissors>
▢ .slot <gamble>
▢ .tictactoe <tag Someone>
└───────────

┌─⊷ * OUR LEVELS AND ECO*
▢ .adddi <@user>
▢ .addxp <@user>
▢ .balance
▢ .daily
▢ .leaderboard
▢ .levelup
▢ .mine
▢ .rob
▢ .buy
▢ .buyall
▢ .transfer [tip] [amount] [@tag]
▢ .work
└───────────

┌─⊷ *REGISTER*
▢ .reg <name.age>
▢ .mysn
▢ .unreg <Num Serie>
└───────────

┌─⊷ *OUR STICKER*
▢ .attp <text>
▢ .emojimix <emoji+emoji> (ⓓ)
▢ .getsticker (ⓓ)
▢ .smaker (ⓓ)
▢ .sticker
▢ .toimg <sticker>
▢ .tovid
▢ .trigger <@user>
▢ .ttp <text>
▢ .take <name>|<author>
└───────────

┌─⊷ *OUR IMAGE*
▢ .tvid (ⓓ)
▢ .imagen (ⓓ)
▢ .girl (ⓓ)
▢ .meme (ⓓ)
▢ .pinterest
▢ .wallpaper (ⓓ)
└───────────

┌─⊷ *MAKER*
▢ .logololi-dont use (ⓓ)
▢ .neon (ⓓ)
▢ .devil-Dont use (ⓓ)
▢ .wolf (ⓓ)
▢ .phlogo (ⓓ)
└───────────

┌─⊷ *PREMIUM*
▢ .gdrive (ⓓ) (Ⓟ)
▢ .mediafire <url> (ⓓ)
▢ .🤥 (ⓓ) (Ⓟ)
▢ .🐀 (ⓓ) (Ⓟ)
└───────────

┌─⊷ *GROUP*
▢ .add
▢ .delete
▢ .delwarn @user
▢ .demote (@tag)
▢ .infogp
▢ .hidetag
▢ .invite <917xxx>
▢ .kick @user
▢ .link
▢ .poll <Guru|piro|xd>
▢ .perfil
▢ .promote
▢ .resetlink
▢ .setbye <text>
▢ .group *open/close*
▢ .setwelcome <text>
▢ .simulate <event> @user
▢ .staff
▢ .tagall
▢ .totag
▢ .warn @user
▢ .warns
▢ .checkexpired
└───────────

┌─⊷ *EN/DISABLE OPTIONS*
▢ .enable <option>
▢ .disable <option>
└───────────

┌─⊷ *ONLY OWNER*
▢ .Sad (ⓓ)
▢ .fz (ⓓ)
▢ .kite (ⓓ)
▢ . 🐐 (ⓓ)
└───────────

┌─⊷ *ANIME REACTIONS*
▢ .kill @tag (ⓓ)
▢ .kiss @tag (ⓓ)
▢ .pat @tag (ⓓ)
▢ .slap @tag (ⓓ)
└───────────

┌─⊷ *DOWNLOADERS*
▢ .facebook <url> (ⓓ)
▢ .gdrive (ⓓ) (Ⓟ)
▢ .gitclone <url> (ⓓ)
▢ .igstalk
▢ .instagram <link ig> (ⓓ)
▢ .mediafire <url> (ⓓ)
▢ .play
▢ .play2
▢ .tiktok (ⓓ)
▢ .tiktokstalk
▢ .twitter <url> (ⓓ)
▢ .ytmp3 <url> (ⓓ)
▢ .ytsearch
▢ .ytmp4 <link yt> (ⓓ)
└───────────

┌─⊷ *TOOLS*
▢ .cal <equation>
▢ .google (ⓓ)
▢ .lyrics
▢ .readmore <text1>|<text2>
▢ .ssweb <url> (ⓓ)
▢ .tourl
▢ .trad <leng> <text>
▢ .tts <lang> <teXTSs>
▢ .wikipedia
└───────────

┌─⊷ *FUN*
▢ .afk <razon>
▢ .tomp3
▢ .toav
▢ .gay @user
▢ .pregunta
▢ .bot
└───────────

┌─⊷ *DATABASE*
▢ .listcmd
▢ .setcmd <txt>
└───────────

┌─⊷ *NOT FOR +KIDS*
▢ .xwaifu (ⓓ)
▢ .xneko (ⓓ)
▢ .blowjob (ⓓ)
▢ .ass (ⓓ)
▢ .boobs (ⓓ)
▢ .lesbian (ⓓ)
▢ .pussy (ⓓ)
▢ .pack (ⓓ)
▢ .chut (ⓓ)
▢ .gand (ⓓ)
└───────────

┌─⊷ *OWNER*
▢ .expired <days>
▢ .addprem <@tag>
▢ .banchat
▢ .listban
▢ .ban @user
▢ .tx
▢ .cleartmp
▢ .delexpired
▢ .delprem @user
▢ .getplugin <name file>
▢ .getfile <name file>
▢ .join <chat.whatsapp.com> <dias>
▢ .reset <54xxx>
▢ .restart
▢ .unbanchat
▢ .unban @user
▢ .update
group link  https://chat.whatsapp.com/EKeNBKlZPoICcHCJ227P61
└───────────

┌─⊷ *ADVANCED*
▢ >
▢ =>
▢ $
└───────────  
  Christain bot
┗━━━ʕ•㉨•ʔ━━━┛`
conn.sendFile(m.chat, pp, 'perfil.jpg', lkr, m, false, { mentions: [who] })
m.react(done)
}
handler.help = ['allmenu']
handler.tags = ['main']
handler.command = ['list', 'all menu'] 

export default handler
