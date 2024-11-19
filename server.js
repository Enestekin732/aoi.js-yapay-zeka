const { Client, Intents } = require('discord.js'); // discord.js belirtdim.
const { AoiClient } = require('aoi.js'); // aoi.js belirtim.

const bot = new AoiClient({
    mobile: true, // pek sevmem ama siz bilirsiniz isterseniz silin isterseniz kalsın.
    token: "", // discord botunun tokeni discord developer token alabilirsin!
    prefix: ["prefix1", "prefix2", "prefix3", "w!"], // burda 1 fazla prefix ayarlayabilirsin!
    fetchInvites: true // eleme burayı kalsın.
});

//callbackler
bot.onMessage()
bot.onJoined()
bot.onLeave()
// üste ayarları yaptım eleme..

// sakın silme bunu silersen komutlar yüklenmez \\

bot.loadCommands(`komutlar`)


//variableler
bot.variables({
    sohbet: "", // değişkenleri sıraladım
    api: "https://api.codare.fun/sorv2/$authorID?soru=$message", // sakın silme ha..
})

bot.status({
    text: "gg/wnerscode | sohbet botu!",
    type: "PLAYING",
    time: 12
})