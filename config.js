/**
   * Created By LoRD.
   * Contact Me on wa.me/919778383987
   * Follow https://github.com/Lord-official
**/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': 'Your api key',
}

// Other
global.watermark = 'ยซ๐๐๐๐.๐๐๐ยป๐ฎ๐ณ'
global.owner = ['919778383987']
global.premium = ['919778383987']
global.packname = '๐๐จ๐๐-๐๐'
global.author = '๐ฟ๐๐๐-๐๐๐๐๐๐๐๐'
global.sessionName = 'lord'
global.prefa = ['','!','.','๐ฆ',',','*']
global.sp = 'โ๏ธ'
global.mess = {
    success: '๐บ๐๐๐๐๐๐โ๏ธ',
    admin: 'Group Admin Special Features!',
    botAdmin: 'Bot Must Be Admin First!',
    owner: 'Bot Owner Special Features',
    group: 'Features Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'Bot Number Users Special Feature',
    wait: 'Loading...',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/lord.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
