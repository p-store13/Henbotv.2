import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
let vn = "./vn/sc2.mp3"
	conn.sendFile(m.chat, vn, "gada.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
let stiker = await sticker(null, `https://telegra.ph/file/5ddb1194fb6f8b71c03d8.jpg`, global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
    
}

handler.customPrefix = /^(.sc|sc|sourcecode)$/i;
handler.command = new RegExp()

export default handler