let handler = async m => m.reply(`
┏━━°❀❬ *DONASI* ❭❀°━━┓
┣➥ *XL:* [0878-3499-3722]
┣➥ *Dana:* [0878-3499-3722]
┃ 「 *Chat OWNER* 」
┃ > *Ingin donasi? Wa.me/6287834993722*
┗━━━━━━━━━━━━━━━━
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
