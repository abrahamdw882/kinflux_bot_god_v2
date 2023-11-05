import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import { canLevelUp, xpRange } from '../lib/levelling.js'
import fetch from 'node-fetch'
import fs from 'fs'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
import { promises } from 'fs'
import { join } from 'path'
const time = moment.tz('Asia/Kolkata').format('HH')
let wib = moment.tz('Asia/Kolkata').format('HH:mm:ss')
//import db from '../lib/database.js'

let handler = async (m, { conn, usedPrefix, command}) => {
    let d = new Date(new Date + 3600000)
    let locale = 'en'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `✳️ The user is not found in my database`
let pp = './kinfluxbot.jpg'
let user = global.db.data.users[who]
let { name, exp, diamond, lastclaim, registered, regTime, age, level, role, warn } = global.db.data.users[who]
let { min, xp, max } = xpRange(user.level, global.multiplier)
let username = conn.getName(who)
let math = max - xp
let prem = global.prems.includes(who.split`@`[0])
let sn = createHash('md5').update(who).digest('hex')
let totaluser = Object.values(global.db.data.users).length 
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850) 
let greeting = ucapan()
let quote = quotes[Math.floor(Math.random() * quotes.length)];

let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `
🚀 *_Buckle up ${name}, ${greeting}! We're going to be happy!_* 🚀

📜 *_Quote of the day: ${quote}_* 📜

┏─────────────────⬣
┆ Hello, ${name}  
┗┬──────────────┈ ⳹
┏┤ Bot Info  
┆┗──────────────┈ ⳹
┆♠︎ 𝗕𝗼𝘁 𝗡𝗮𝗺𝗲 : ${botname}
┆♠︎ 𝗢𝘄𝗻𝗲𝗿 𝗡𝗮𝗺𝗲 : ${author}
┆♠︎ 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿 𝗡𝗮𝗺𝗲 : Abraham Dwamena 
┆♠︎ 𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 :Kali 
┆♠︎ *Uptime* : ${uptime}
┆♠︎ *Experience:* ${exp}
┆♠︎ *Rank:* ${role}
┆♠︎ *Diamonds:* ${diamond}
┆♠︎ *Total users:* ${rtotalreg}
┗┬──────────────┈ ⳹
┏┤   User Info
┆┗──────────────┈ ⳹ 
┆♠︎ 𝗡𝗮𝗺𝗲 :${name}
│♠︎ 𝗡𝘂𝗺𝗯𝗲𝗿 : ${taguser}
│♠︎ 𝗣𝗿𝗲𝗺𝗶𝘂𝗺 : ${user.premium = 'true' ? '✅' : '❌'}
┗┬──────────────┈ ⳹
┏┤ Calender
┆┗──────────────┈ ⳹
┆Time :${wib} 
┆𝗗𝗮𝘁𝗲 :${date} 
┗─────────────────⬣
┆──────────────┈ ⳹
┆type /list to
┆to see all cmd
💡 *_Remember, when in doubt, use ${usedPrefix}list or ${usedPrefix}help2. It's like my Friends book!_* 💡
`


    conn.sendFile(m.chat, pp, 'perfil.jpg', str, m, null, rpyt)
    m.react(done)

}
handler.help = ['main']
handler.tags = ['group']
handler.command = ['menu', 'help','h','command'] 

export default handler
function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
    
    function ucapan() {
      const time = moment.tz('Asia/Kolkata').format('HH')
      let res = "happy early in the day☀️"
      if (time >= 4) {
        res = "Good Morning 🌄"
      }
      if (time >= 10) {
        res = "Good Afternoon ☀️"
      }
      if (time >= 15) {
        res = "Good Afternoon 🌇"
      }
      if (time >= 18) {
        res = "Good Night 🌙"
      }
      return res
    }
    const quotes = [
     "In my diligence, I abide in Proverbs 13:4, for 'The soul of the sluggard craves and gets nothing, while the soul of the diligent is richly supplied.'",
"As John 3:16 reminds us, 'For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.' Jesus loves you.",
"Rejoice in the presence of the Lord, for 'The Lord your God is with you, the Mighty Warrior who saves. He will take great delight in you; in his love, he will no longer rebuke you; he will rejoice over you with singing.' - Zephaniah 3:17",
 "I strive to be a God-fearing person, learning from the wisdom of Jesus Christ, who said, 'I am the way, the truth, and the life.' - John 14:6",
 "In reflection, some relationships don't work out, for 'What therefore God has joined together, let not man separate.' - Mark 10:9",
 "As it is written, 'Be kind to one another, tenderhearted, forgiving one another, as God in Christ forgave you.' - Ephesians 4:32. I encouraged my wife to embrace her mistakes, and she gave me a hug.",
"I strive to be diligent and faithful, for 'Whatever you do, work heartily, as for the Lord and not for men.' - Colossians 3:23.",
"In the process of growing old, I remember 'Gray hair is a crown of glory; it is gained in a righteous life.' - Proverbs 16:31",
"In the Psalms, it is said, 'In peace, I will both lie down and sleep; for you alone, O Lord, make me dwell in safety.' - Psalm 4:8",
 "If you think nobody cares if you're alive, remember 'Are not two sparrows sold for a penny? Yet not one of them will fall to the ground outside your Father’s care.' - Matthew 10:29",
 "I used to think I was indecisive, but now I'm not so sure, for 'Commit to the Lord whatever you do, and he will establish your plans.' - Proverbs 16:3",
 "If you can't convince them, 'For God is not a God of confusion but of peace.' - 1 Corinthians 14:33.",
"I told my wife she was drawing her eyebrows too high. She looked surprised, as 'A soft answer turns away wrath, but a harsh word stirs up anger.' - Proverbs 15:1",
 "I am not clumsy, I am 'being strengthened with all power according to his glorious might so that you may have great endurance and patience.' - Colossians 1:11.",
 "I told my wife she should do more push-ups. She said, 'I could do a hundred!' So I counted to ten and stopped, for 'Better a patient person than a warrior, one with self-control than one who takes a city.' - Proverbs 16:32",
 "Life is like a box of chocolates; it doesn't last long if you're hungry, for 'I am the bread of life; whoever comes to me shall not hunger, and whoever believes in me shall never thirst.' - John 6:35",
 "I'm not saying I'm Wonder Woman, I'm just saying 'I can do all things through him who strengthens me.' - Philippians 4:13.",
"Why do they call it beauty sleep when you wake up looking like a troll? Remember, 'Charm is deceitful, and beauty is vain, but a woman who fears the Lord is to be praised.' - Proverbs 31:30",
 "I don't always lose my phone, but when I do, it's always on silent, like 'Be still before the Lord and wait patiently for him.' - Psalm 37:7",
 "My bed is a magical place where I suddenly remember everything I was supposed to do, for 'In peace I will lie down and sleep, for you alone, Lord, make me dwell in safety.' - Psalm 4:8",
"I love the sound you make when you shut up, for 'When words are many, transgression is not lacking, but whoever restrains his lips is prudent.' - Proverbs 10:19",
 "I'm not arguing, I'm just explaining why I'm right, as 'The Lord gives wisdom; from his mouth come knowledge and understanding.' - Proverbs 2:6",
"I'm not a complete idiot, I am 'fearfully and wonderfully made.' - Psalm 139:14",
 "When life gives you lemons, remember 'Beloved, never avenge yourselves, but leave it to the wrath of God.' - Romans 12:19",
 "I don't need anger management. You just need to stop making me angry, for 'A hot-tempered man stirs up strife, but he who is slow to anger quiets contention.' - Proverbs 15:18",
 "I'm not saying I'm Batman, I'm just saying 'The night is far gone, the day is at hand.' - Romans 13:12",
 "I'm not saying I'm Superman, I'm just saying 'I can do all things through him who strengthens me.' - Philippians 4:13",
 "I'm not saying I'm Spider-Man, I'm just saying 'The Lord is my strength and my song, and he has become my salvation.' - Exodus 15:2",
"I'm not saying I'm a superhero, I'm just saying 'My soul finds rest in God alone; my salvation comes from him.' - Psalm 62:1",
 "The early bird can have the worm because worms are gross and mornings are stupid, or 'It is good to give thanks to the Lord.' - Psalm 92:1",
"If life gives you lemons, make lemonade. Then find someone whose life has given them vodka and have a party, for 'A joyful heart is good medicine.' - Proverbs 17:22",
"The road to success is always under construction, as 'Commit your work to the Lord, and your plans will be established.' - Proverbs 16:3",
"I am so clever that sometimes I don't understand a single word of what I am saying, for 'The heart of the discerning acquires knowledge, for the ears of the wise seek it out.' - Proverbs 18:15",
 "Some people just need a high-five. In the face. With a chair, or 'A man of wrath stirs up strife, and one given to anger causes much transgression.' - Proverbs 29:22",
 "I'm not saying I'm perfect, but I'm pretty close, for 'For all have sinned and fall short of the glory of God.' - Romans 3:23", 
"A day without sunshine is like, you know, night, as 'The Lord will be your everlasting light.' - Isaiah 60:19"
];
