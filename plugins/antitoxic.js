let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./audio/uh.mp3')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*HATI HATI BANG NANTI KENA BADWORD*', 'status@broadcast')
}
handler.customPrefix = /anjing|memek|kontol|ngentod|goblok|goblog/i
handler.command = new RegExp

module.exports = handler
