let fetch = require('node-fetch');
let ftype = require('file-type');
let { getBuffer, succes } = require('../lib/functions.js');

let handler = async(m, { conn, text }) => {
let str = `
Dasar Player Hade :v
`.trim()

    if (!text) return conn.reply(m.chat, 'Silahkan masukan parameter text1', m)

  await m.reply('Sedang membuat...')

            let buff = ('http://bot.ojansenpai.ml/ff1/img.php?nama=' + text);
            let voss = await fetch(buff)
                        let vuss = await ftype.fromStream(voss.body)
                        if (vuss !== undefined) {

     conn.sendFile(m.chat, await getBuffer(buff), 'foto.jpg', str, m)
     }
}
handler.help = ['ffserti1 <teks>']
handler.tags = ['sticker']
handler.command = /^(ffserti1)$/i
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
