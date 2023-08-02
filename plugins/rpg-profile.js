import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let user = db.data.users[m.sender]
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png')
    let { premium, level, limit, exp, lastclaim, registered, regTime, age, pasangan } = global.db.data.users[m.sender]
    let username = conn.getName(who)
    let name = conn.getName(who)
    let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
    let str = `
👤𝗡𝗮𝗺𝗮: ${username} 
☣️𝗨𝗺𝘂𝗿:  ${registered ? age : ''} Tahun
⚕️𝗦𝘁𝗮𝘁𝘂𝘀:  ${user.premiumTime > 0 ? 'Premium' : 'Free'}
☎️𝗡𝗼𝗺𝗼𝗿: ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
👥𝗣𝗮𝘀𝗮𝗻𝗴𝗮𝗻: ${pasangan ? `@${pasangan.split("@")[0]}` : `Tidak Punya`}
📎𝗟𝗶𝗻𝗸 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽: https://wa.me/${who.split`@`[0]}

👾𝗥𝗲𝗴𝗶𝘀𝘁𝗲𝗿: ${registered ? 'Terdaftar': 'Tidak'}
`.trim()
   await conn.sendFile(m.chat, pp, '', str, m)
}
handler.help = ['profile']
handler.tags = ['main']
handler.command = /^profile$/i
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, '*Hari*\n ', h, ' *Jam*\n ', m, ' *Menit*\n ', s, ' *Detik* '].map(v => v.toString().padStart(2, 0)).join('')
}