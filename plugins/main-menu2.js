let handler = async (m, { conn }) => {
let fotonya = 'https://cdn.discordapp.com/attachments/1059294094641348719/1135812689927602186/20230801_124950.jpg'
let sewa = `👋🏻Halo Kak Namaku Adalah 𝐏𝐞𝐫𝐛𝐚𝐭𝐚𝐬𝐚𝐧 𝐁𝐨𝐭𝐳, Aku adalah Chat Bot WhatsApp yang di Program menggunakan NodeJs untuk menjadi Asisten Virtual Auto-Reply di WhatsApp.\n*.allmenu* [Menampilkan Semua Perintah]\n\n_2023 © 𝐇𝐞𝐧𝐝𝐫𝐚 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥
`
conn.sendFile(m.chat, fotonya, 'anu.jpg', sewa, m)
}
handler.help = ['menu2']
handler.tags = ['main']
handler.command = /^(menu|help|bot|hai)$/i

export default handler
