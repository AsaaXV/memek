let handler = m => handler.all = async function (m, { isAdmin, isBotAdmin }) {
  if (m.mtype == 'groupInviteMessage') {
idnya = await this.reply(m.chat, `「 Donasi • Pulsa 」

• *XL:* 6287834993722
• *DANA:* 6287834993722

Donasi semampunya untuk mendukung bot ini tetap hidup untuk kalian^_^
Kalo Gak Mau Subscribe Aja Channel Zero 
https://youtube.com/channel/UC7SydwUESoyOQ3qZZuoaNHw

Kontak Owner Saya⬇️⬇️
`, m)
this.sendContact(m.chat, '6287834993722', 'RakuChan', idnya)
  }
  return true
}

module.exports = handler