let fetch = require('node-fetch');
let ftype = require('file-type');
let { getBuffer, succes } = require('/data/data/com.termux/files/home/kuhong/lib/functions.js');

let handler = async(m, { conn, text }) => {
let str = `
Awoakakak Si ${text} Bocil EpEp😂
`.trim()

    if (!text) return conn.reply(m.chat, 'Siapa yang disangka bocil epep?', m)

  await m.reply('Sedang membuat...')

  let hasil = await (await fetch('https://onlydevcity.xyz/CilEpepSerti/img.php?nama=' + text)).buffer()

     conn.sendFile(m.chat, hasil, 'foto.jpg', str, m)
}
handler.help = ['bocilff <teks>']
handler.tags = ['sticker']
handler.command = /^(bocilepep|bocilff)$/i
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
