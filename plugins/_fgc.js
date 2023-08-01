import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {

let pp = await conn.profilePictureUrl(m.sender, 'image')

 const anu = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "6283148450932-1610340626@g.us",
			"inviteCode": "https://chat.whatsapp.com/GjrA6d1h3iO15wKA2uhPFW",
			"groupName": "𝐏𝐞𝐫𝐛𝐚𝐭𝐚𝐬𝐚𝐧 𝐁𝐨𝐭𝐳", 
            "caption": "Welcome here.\nOnly girls allowed", 
            'jpegThumbnail': await ( await fetch(pp)).buffer()
		}
	}
}
conn.sendMessage(m.chat, { text: wm} , { quoted: anu })
}


handler.help = ['fgc']

handler.tags = ['nocategory']

handler.command = /^fgc$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

export default handler