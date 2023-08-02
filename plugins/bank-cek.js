let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender]
  const caption = `
▧「 *B A N K  U S E R* 」
👤𝗡𝗮𝗺𝗲: ${user.registered ? user.name : conn.getName(m.sender)}
💳𝗔𝘁𝗺: ${user.atm > 0 ? 'Level ' + user.atm : 'Tidak Punya'}
🏦𝗕𝗮𝗻𝗸: $.${user.bank} / $.${user.fullatm}
💰𝗠𝗼𝗻𝗲𝘆: $.${user.money}

⚕️𝗦𝘁𝗮𝘁𝘂𝘀: ${user.premiumTime > 0 ? 'Premium' : 'Free'}
👾𝗥𝗲𝗴𝗶𝘀𝘁𝗲𝗿𝗲𝗱: ${user.registered ? 'Ya':'Tidak'}
`.trim()
  conn.sendMessage(m.chat, { image: { url: 'https://en.pimg.jp/071/200/649/1/71200649.jpg' }, caption: caption }, {quoted: m })
}
handler.help = ['bank']
handler.tags = ['rpg']
handler.command = /^(bank)$/i

handler.register = true
export default handler
