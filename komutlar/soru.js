module.exports = {
    name: "sor",
    aliases: ["<@botunun id si>", "bot", "wners", "sohbet", "Sor", "konuş", "Konuş"], // bot ıd si yerine botunun ıdsini gir!
    code: 
    `
    $argsCheck[>1;$randomText[efendim **$username** bana mı seslendin söylicen birşey varsa söyle;efendim **$username** ne oldu?;sor bakam ne oldu.]]
    $httpGet[$getServerVar[api]]
    $reply
    $httpResult[cevap]
    $suppressErrors[aaa! bir hata var. [destek sunucusunda halledelim](https://discord.gg/wnerscode)]
    `
}