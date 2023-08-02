import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)

  const sentMsg = await conn.sendContactArray(m.chat, [
    [`${nomorwa}`, `𝐇𝐞𝐧𝐝𝐫𝐚 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥`, `Developer Bot `, `Ponsel`, `akuanakkampoeng@gmail.com`, `Cirebon - Jawa Barat - Indonesia`, `https://wa.me/6283148450932`, `Developer 𝐇𝐞𝐧𝐝𝐫𝐚 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥`]
  ], m)
  let vn = "./vn/owner.mp3"
  await conn.sendFile(m.chat, vn, 'kuru.mp3', null, m, true, {
		type: "audioMessage",
		ptt: true,
	})
  } 

handler.help = ['owner', 'creator']
handler.tags = ['main']
handler.command = /^(owner|creator)/i
export default handler