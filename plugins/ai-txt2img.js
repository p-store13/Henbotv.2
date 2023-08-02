import axios from "axios"

let handler = async (m, { conn, usedPrefix, command, args }) => {
let response = args.join(' ').split('|')
if (!args[0]) throw '❗Masukan Promptnya Dan Negative Promptnya Kak\n\nExample: .txt2img asuna, (sword art online), highly detailed|(worst quality, low quality, extra hand), monochrome'
m.reply(wait)
const payloads = {
	prompt: `${response[0]}`,
  negative_prompt: `${response[1]}`,
  sampler: "Euler a",
  seed: -1,
  ratio: "1:1",
  style: "ACG",
  url: false,
  cfg: 7.5,
  controlNe: "none",
  image_num: 1,
  steps: 25
}
const { data } = await axios
	.request({
		baseURL: "https://api.itsrose.life",
		url: "/image/diffusion",
		method: "POST",
		params: {
			apikey: global.rose,
		},
		data: payloads,
	})
	.catch((e) => e?.["response"]);
const { status, message } = data; 

if (!status) {
	return console.error(message);
}
const { result } = data;
console.log(result);
conn.sendMessage(m.chat, { image: { url: result.images[0] }, caption: `Prompt: ${response[0]}`}, m)
}
handler.help = ['txt2img']
handler.tags = ['ai']
handler.command = /^(txt2img)$/i
handler.limit = true

export default handler