let handler = async (m, { conn }) => {
let sewa = `
*❏––––––『 𝐒𝐂𝐑𝐈𝐏𝐓 𝐁𝐎𝐓 』––––––❏*

Mau Scriptnya? 
Ada Di YouTube, Tidak Untuk Di Jual Belkan!!! Sc Ini Gratis.\nhttps://youtu.be/OLaCtjGE2zU\nKebutuhan Bot WhatsApp\nhttps://https://sites.google.com/view/fallzxstore/\n⚠️Jika Ada Yang Menjual Hub Pembuat http://wa.me/6285813708397

⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['sewa']
handler.tags = ['main']
handler.command = /^(sc|script)$/i

export default handler