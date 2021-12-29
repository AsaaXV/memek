let fetch = require('node-fetch')
let handler  = async (m, { conn }) => {
pepe = await conn.getProfilePicture().catch(() => 'https://i.ibb.co/cyM9YyH/logoku.jpg')
ampun-mak = await fetch(pepe).then(a => a.buffer())
let listMessage = {
      "title": "Sewa Bot",
      "description": "Sewa Bot",
      "listType": "PRODUCT_LIST",
      "productListInfo": {
        "productSections": [
          {
            "title": "Sewa Bot",
            "products": [
              {
                "productId": "4437769029651145"
              }
            ]
          }
        ],
        "headerImage": {
          "productId": "4437769029651145",
          "jpegThumbnail": ampun-mak
          },
        "businessOwnerJid": "6287834993722@s.whatsapp.net"
      },
      "footerText": "ZEROBOT"
    }
  

 conn.sendMessage(m.chat, listMessage, 'listMessage', { quoted: m })
 }
handler.help = ['sewa', 'sewabot']
handler.tags = ['main']
handler.command = /^sewa(bot)?$/i
module.exports = handler