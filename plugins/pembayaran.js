let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
╔════════════════════
║ *PEMBAYARAN*
╠════════════════════
║╭───❉ *VIA* ❉─────
║│
║│➸ *OVO*: 088217066706
║│➸ *DANA*: 085855159153
║│➸ *PULSA*:085855159230
║│➸ *GOPAY*: 085855159230
║│
║╰──────────────────
║ Silahkan Ketik *UP*
╠════════════════════
║       
║  ▌│█║▌║▌║║▌║▌║█│▌
║  ▌│█║▌║▌║║▌║▌║█│▌
║        
╠════════════════════
║ _*POWERED BY LAZUARDI*_
╚════════════════════
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*🔥 VIGEN SHOP TERPERCAYA 🔥*', 'status@broadcast')
}
handler.customPrefix = /^(PEMBAYARAN)$/i
handler.command = new RegExp

module.exports = handler
 