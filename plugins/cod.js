let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = await fetch(`https://lolhuman.herokuapp.com/api/ephoto2/codwarzone?apikey=HIRO&text1=${response[0]}&text2=${response[1]}`)
  conn.sendFile(m.chat, res, 'cod.jpg', `Nih Kak`, m, false)
}
handler.help = ['cod'].map(v => v + ' <teks|teks>')
handler.tags = ['image']

handler.command = /^(cod)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler