import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['6283148450932', '𝐇𝐞𝐧𝐝𝐫𝐚 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥', true] //Ganti aja
]
global.mods = []
global.prems = []
// Info
global.nomorwa = '6285624128286' //Ganti
global.packname = '© Sticker by 𝐏𝐞𝐫𝐛𝐚𝐭𝐚𝐬𝐚𝐧 𝐁𝐨𝐭𝐳'
global.author = '𝐇𝐞𝐧𝐝𝐫𝐚 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥'
global.namebot = '𝐏𝐞𝐫𝐛𝐚𝐭𝐚𝐬𝐚𝐧 𝐁𝐨𝐭𝐳'
global.wm = '© 𝐏𝐞𝐫𝐛𝐚𝐭𝐚𝐬𝐚𝐧 𝐁𝐨𝐭𝐳 By 𝐇𝐞𝐧𝐝𝐫𝐚 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥'
global.stickpack = '© Sticker by 𝐇𝐞𝐧𝐝𝐫𝐚 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥'
global.stickauth = '𝐏𝐞𝐫𝐛𝐚𝐭𝐚𝐬𝐚𝐧 𝐁𝐨𝐭𝐳'
// Link Sosmed
global.sig = 'https://instagram.com/hendra_official1307'
global.sgh = 'https://github.com/Pabedilan'
global.sgc = 'https://chat.whatsapp.com/GjrA6d1h3iO15wKA2uhPFW'
// Donasi
global.psaweria = 'https://saweria.co/Perbatasan'
global.ptrakterr = 'https://saweria.co/Perbatasan'
global.povo = '0831-4845-0932'
// Info Wait
global.wait = '⏳ Proses...'
global.eror = 'Terjadi Kesalahan Coba Lagi Nanti!'
global.multiplier = 69 
// Apikey
global.xyro = 'OFIVE4TMLW'
// Catatan : Jika Mau Work Fiturnya
// Masukan Apikeymu
// Gapunya Apikey? Ya Daftar
// Website: https://api.xyroinee.xyz
// Daftar Ke Website Tersebut Untuk
// Mendapatkan Apikey Kamu
global.APIs = {
    xyro: "https://api.xyroinee.xyz",
}

/*Apikey*/
global.APIKeys = {
    "https://api.xyroinee.xyz": "OFIVE4TMLW",
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})