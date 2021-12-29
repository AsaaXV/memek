//created by Scooppt
let fetch = require('node-fetch')

let handler  = async (m, { conn, text }) => {
  try {
     let res = await fetch('https://cataas.com/cat')
     let img = await res.buffer()
     let caption = `
©BakaBOTZ
`.trim()
    conn.sendFile(m.chat, img, 'cat.jpg', caption, m)
   } catch (e) {
        console.log(e)
        throw '_*Error!*_'
    }
}

handler.help = ['cat']
handler.tags = ['images']
handler.command = /^cat$/i

handler.fail = null

module.exports = handler
