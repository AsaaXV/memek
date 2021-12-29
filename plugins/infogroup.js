let { getGroupAdmins } = require('../lib/functions')

let handler = async(m, { conn, isGroup, isAdmin, participants, groupMetadata }) => {

let member = (await conn.groupMetadata(m.chat)).participants.map(u => u.jid)
let admin = await getGroupAdmins(await groupMetadata.participants)
let totalmin = Object.keys(admin).length
let totalmem = Object.keys(member).length
let desk = await groupMetadata.desc
let group = await conn.getName(m.chat)
let pp = await conn.getProfilePicture(m.chat)
let welcome = global.DATABASE.data.chats[m.chat].welcome
let antidelete = global.DATABASE.data.chats[m.chat].antidelete
let antilink = global.DATABASE.data.chats[m.chat].antiLink
let antivirtex = global.DATABASE.data.chats[m.chat].antivirtex
let antitoxic = global.DATABASE.data.chats[m.chat].antitoxic
let leveling = global.DATABASE.data.users[m.sender].autolevelup
let banned = global.DATABASE.data.chats[m.chat].isBanned

 conn.sendFile(m.chat, pp, 'pp.jpg', `
*「 INFO GROUP 」*

Nama : ${group}
Member : ${totalmem}
Admin : ${totalmin}
Banned : ${banned}
Welcome : ${welcome}
Leveling : ${leveling}
AntiDelete : ${antidelete}
AntiLink : ${antilink}
AntiVirtex : ${antivirtex}
Deskripsi :
${desk}
`.trim(), m)
}
handler.help = ['infgc']
handler.tags = ['group']
handler.command = /^(infgc)$/i
handler.group = true

module.exports = handler
