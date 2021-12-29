let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
Tutorial Buat Bot WA:
Credit: *~BakaBOTZ*

Ketik di *[TERMUX]*
1) $ apt update
2) $ apt upgrade
3) $ pkg install ffmpeg
4) $ pkg install imagemagick
5) $ pkg install nodejs

Untuk SC Nya..
Cek Di Channel Ku
6) $ termux-setup-storage
7) $ cd storage/downloads/(nama file yg kmu rename)

*Terakhir*..
Penginstalannya cuy :)
9 ) $ npm start

[ Note : Tanda $ Ga Perlu Di Ketik ]

*Nih Channel Nya*..
https://youtube.com/channel/UC7SydwUESoyOQ3qZZuoaNHw

Jangan Lupa Subscribe Yaa!!
`.trim(), m)
}
handler.help = ['tutorial']
handler.tags = ['tutor']
handler.command = /^(tutorial)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
