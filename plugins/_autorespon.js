let fs = require('fs')
let handler = m => m

handler.all = async function (m, { isBlocked }) {

    if (isBlocked) return
    if (m.isBaileys) return
    if (m.chat.endsWith('broadcast')) return
    let setting = DATABASE.data.settings
    let { isBanned } = DATABASE.data.chats[m.chat]
    let { banned } = DATABASE.data.users[m.sender]

    // ketika kena tag
    try {
        if (m.mentionedJid.includes(this.user.jid) && m.isGroup) {
            await this.send2Button(m.chat,
                isBanned ? 'ZEROBOT NEXT PROJECT NOT ACTIVE' : banned ? 'TELAH DI BANNED' : 'ZEROBOT NEXT PROJECT IN HERE',
                '©ZEROBOT',
                isBanned ? 'UNBAN' : banned ? 'BAN' : 'MENU',
                isBanned ? '.unbanchat' : banned ? '.banchat' : '.menu',
                m.isGroup ? 'BAN' : isBanned ? 'UNBAN' : 'MENU',
                m.isGroup ? '.banchat' : isBanned ? '.unbanchat' : '.menu')
        }
    } catch (e) {
        return
    }

    // ketika ada yang invite/kirim link grup di chat pribadi
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
        this.sendButton(m.chat, `┌〔 Undang Bot Masuk Grup 〕
7 Hari / Rp 7.000
30 Hari / Rp 15.000
└────
https://youtube.com/c/ZEROBOT7
Subscribe Me To Get Trial 1 Days

`.trim(), '©ZEROBOT', 'CHAT ME TO BUY', ',owner', { contextInfo: { mentionedJid: [global.owner[0] + '@s.whatsapp.net'] } })
    }

    // salam
    let reg = /(ass?alam|اَلسَّلاَمُ عَلَيْكُمْ|السلام عليکم)/i
    let isSalam = reg.exec(m.text)
    if (isSalam && !m.fromMe) {
        m.reply(`Salam Bang`)
    }

    // backup db
    if (setting.backup) {
        if (new Date() * 1 - setting.backupDB > 1000 * 60 * 60) {
            let d = new Date
            let date = d.toLocaleDateString('id', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            })
            await global.DATABASE.write()
            this.reply(global.owner[0] + '@s.whatsapp.net', `Database: ${date}`, null)
            this.sendFile(global.owner[0] + '@s.whatsapp.net', fs.readFileSync('./database.json'), 'database.json', '', 0, 0, { mimetype: 'application/json' })
            setting.backupDB = new Date() * 1
        }
    }

    // update status
    if (new Date() * 1 - setting.status > 1000) {
        let _uptime = process.uptime() * 1000
        let uptime = clockString(_uptime)
        let totalreg = Object.keys(global.DATABASE._data.users).length
        await this.setStatus(`Aktif Selama ${uptime}
Mode: ${global.opts['self'] ? 'Private' : setting.groupOnly ? 'Hanya Grup' : 'Publik'} 
User In Database: ${totalreg} User 
ZEROBOT NEXT PROJECT`).catch(_ => _)
        setting.status = new Date() * 1
    }

}

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}