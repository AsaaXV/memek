let { MessageType, Presence, mimetype } = require('@adiwajshing/baileys')
let ffmpeg = require('fluent-ffmpeg');
let fetch = require('node-fetch');
let ftype = require('file-type');
let fs = require('fs');
let { exec } = require('child_process');

let handler = async(m, { conn, text, args }) => {

     await m.reply('Sedang memproses...')
          if (!m.quoted) return conn.reply(m.chat, 'Tag Audionya!', m)
          let type = Object.keys(m.message)[0]
          let content = JSON.stringify(m.message)
          let isMedia = (type === 'imageMessage' || type === 'videoMessage')
          let isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		  if (!isQuotedAudio) return m.reply('Itu Audio?')
				let encmedia = JSON.parse(JSON.stringify(m).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				let media = await conn.downloadAndSaveMediaMessage(encmedia)
				let ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return m.reply('Ada yang Error!')
						let slow = fs.readFileSync(ran)
                                                conn.sendFile(m.chat, slow, 'slow.mp3', '', m, false, { ptt: true })
						fs.unlinkSync(ran)
				})
}
handler.help = ['slow (reply audio)']
handler.tags = ['sound']
handler.command = /^(slow)$/i
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

const getRandom = (ext) => {
  return `${Math.floor(Math.random() * 10000)}${ext}`
}
