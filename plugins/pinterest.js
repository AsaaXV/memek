let { getBuffer } = require('../lib/functions')

let handler = async(m, { conn, text }) => {

  if (!text) return conn.reply(m.chat, 'Harap masukan query', m)

 await m.reply('Searching...')
let str = `
*Hasil Pencarian :*

${text}
`.trim()

  let hasil = await getBuffer('http://lolhuman.herokuapp.com/api/gimage?apikey=HIRO&query=' + text)

     conn.sendFile(m.chat, hasil, 'foto.jpg', str, m)
}
handler.help = ['pinterest <query>']
handler.tags = ['image']
handler.command = /^(pinterest)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler
