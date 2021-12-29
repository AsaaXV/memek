let handler = async m => m.reply(`
┏━━°❀❬ *PERATURAN BOT* ❭❀°━━┓
┃
┃> PERINGATAN :
┃• Telpon/VC = Blok Otomatis
┃ 
┃> BANNED + DENDA 5K :
┃• Spam Chat
┃• Spam Call
┃• Spam SMS
┃• Menghina Bot
┃
┃> BANNED SEMENTARA :
┃• Laporan Request Fitur Palsu/Main-Main
┃• Laporan Bug Pada Fitur Palsu/Main-Main
┃
┃> BANNED + BLOK PERMANEN :
┃• Merusak Nama Baik Bot
┃• Meniru/Menyalin Teks² Pesan Pada Bot Tanpa Izin
┃• Spam Menu Ga Jelas
┃
┃
┃> Note : Jika Tidak Membayar Denda
┃Maka Bot Akan Banned User Permanen
┃
┃> Jika User Membayar Denda Maka
┃User Tidak Kena Banned Lagi
┃
┗━━━━━━━━━━━━━━━━

┏━━°❀❬ *DENDA* ❭❀°━━┓
┣➥ *XL:* 087834993722
┣➥ *DANA:* 087834993722
┗━━━━━━━━━━━━━━━━
`.trim()) // Tambah sendiri kalo mau
handler.help = ['rules'] 
handler.tags = ['info'] 
handler.command = /^(rules)$/i

module.exports = handler