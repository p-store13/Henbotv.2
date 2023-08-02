import fetch from 'node-fetch'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, usedPrefix, command, text }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw '❗Kirim/Reply Gambar Dengan Caption .toanime'
m.reply(wait)
try {
let media = await q.download()
let url = await uploadImage(media)
let hasil = `https://api.xyroinee.xyz/api/others/toanime?url=${url}&apikey=${global.xyro}`
await conn.sendMessage(m.chat, { image: { url: hasil }, caption: 'Nih Kak, Maaf Kalau Hasilnya Tidak Sesuai Keinginan' }, { quoted: m })
} catch (e) {
m.reply(eror)
}
}
handler.help = ['toanime']
handler.tags = ['ai']
handler.command = /^(jadianime|toanime)$/i
handler.premium = false
handler.limit = true

export default handler