let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
=> global.DATABASE.data.users[m.sender].limit = Infinity
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*BOT TERVERIFIKASI*', 'status@broadcast')
}
handler.help = ['cheatiket']
handler.tags = ['owner']
handler.command = /^(cheatiket)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
