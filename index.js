const Discord = require('discord.js')
const bot = new Discord.Client()
const fs = require("fs");
//bot.user.setPresence({ game: { name: '!help', type: 0 } });
//bot.user.setPresence({ status: 'online', game: { name: 'GAME HERE' } });


//bot.on('ready', () => { bot.user.setGame('!aide') })

//test


bot.on('ready', () => {
    bot.user.setPresence({game: {name: '!aide', type: 0}});
});
 

bot.on('message', message => {
  if (message.content === 'ping') {
    message.channel.send('pong !')
  }
})

// THIS  MUST  BE  THIS  WAY
bot.login(process.env.BOT_TOKEN);





bot.on('message', message => {
  var input = message.content.toUpperCase();
  if (input.indexOf('FUEA')>=0) {
 var vaResp = [' http://www.captiongenerator.com/581702/SHOCKING-interview-with-CGEA-regarding-SWGOH ',' http://weknowmemes.com/wp-content/uploads/2014/07/the-sad-truth-about-ea.jpg ',' lib\351rrrr\351\351\351\351 d\351livr\351\351\351\351\351, zador je l\'utiliserais plus jamais, lib\351rrrr\351\351\351\351 d\351livr\351\351\351\351\351, ea c\'est vraiment des encul\351s !!! '];
message.channel.send('' + vaResp[Math.floor(Math.random() * 3)])
  }
})


bot.on('message', message => {
        if (message.content.toLowerCase().indexOf("siteweb") !== -1) {
            message.channel.send('http://rogueff.fr')
        }
})







bot.on('message', message => {
  var input = message.content.toUpperCase();
  if (input.indexOf('REINE JUCYLA')>=0) {
 var vaResp = [' Notre reine! Jucyla FOREVER! ',' Elle est sexy Padme! ',' Quelqu\'un aurait le 06 de la reine de Naboo? ',' I\'m a princess. That\'s all. ',' Chuuut ! je solote l\'HAAT la ! ',' D�sol�e elle n\'est pas la, reviens vers 3h du matin tu auras plus de chances'];
message.channel.send('' + vaResp[Math.floor(Math.random() * 6)])
  }
})









bot.on('message', message => {
        if (message.content.toLowerCase().indexOf("tata") !== -1) {
            message.channel.send('<@420164642682437632>')
        }
})


bot.on('message', message => {
        if (message.content.toLowerCase().indexOf("raclette") !== -1) {
            message.channel.send('<@420164642682437632>')
        }
})


//bot.on('message', message => {
//        if (message.content.toLowerCase().indexOf("hein") !== -1) {
//            message.channel.send('<@!353277253183995904>')
//        }
//})

//bot.on('message', message => {
//        if (message.content.toLowerCase().indexOf('<@!353277253183995904>') !== -1) {
//            message.channel.send(':muscle:')
//        }
//})

bot.on('message', message => {
        if (message.content.toLowerCase().indexOf("rip cocisa") !== -1) {
            message.channel.send('https://zupimages.net/up/18/10/9rap.jpg')
        }
})

bot.on('message', message => {
        if (message.content.toLowerCase().indexOf("elimine") !== -1) {
            message.channel.send('https://zupimages.net/up/18/26/fyzp.jpg')
        }
})

bot.on('message', message => {
        if (message.content.toLowerCase().indexOf("elimination") !== -1) {
            message.channel.send('https://zupimages.net/up/18/26/fyzp.jpg')
        }
})





bot.on('message', message => {
        if (message.content.toLowerCase().indexOf("comme meme") !== -1) {
            message.channel.send('comme pépé aussi papavau')
        }
})

bot.on('message', message => {
        if (message.content.toLowerCase().indexOf("comme même") !== -1) {
            message.channel.send('comme pépé aussi papavau')
        }
})


bot.on('message', message => {
        if (message.content.toLowerCase().indexOf("nord") !== -1) {
            message.channel.send('https://zupimages.net/up/18/17/1hmg.jpg')
        }
})


//bot.on('message', message => {
//        if (message.content.toLowerCase().indexOf("yoda") !== -1) {
//            message.channel.send('https://zupimages.net/up/18/17/vys7.jpg')
//        }
//})

bot.on('message', message => {
        if (message.content.toLowerCase().indexOf("anakin") !== -1) {
            message.channel.send('https://zupimages.net/up/18/17/gcod.png')
        }
})

bot.on('message', message => {
        if (message.content.toLowerCase().indexOf("oignon") !== -1) {
            message.channel.send('https://zupimages.net/up/18/17/gcod.png')
        }
})




bot.on('message', message => {
        if (message.content.toLowerCase().indexOf("ou ca") !== -1) {
            message.channel.send('dans ton cul ! ' + message.author.username)
        }
})


bot.on('message', message => {
        if (message.content.toLowerCase().indexOf("ou \347a") !== -1) {
            message.channel.send('dans ton cul ! ' + message.author.username)
        }
})


bot.on('message', message => {
        if (message.content.toLowerCase().indexOf("es ou") !== -1) {
            message.channel.send('dans ton cul ! ' + message.author.username)
        }
})


bot.on('message', message => {
        if (message.content.toLowerCase().indexOf("est pas faux") !== -1) {
            message.channel.send('c\'est quel mot que tu as pas compris ' + message.author.username + ' ?')
        }
})


bot.on('message', message => {
        if (message.content.toLowerCase().indexOf("merci qui") !== -1) {
            message.channel.send('Merci Jacquie et Michel bien sur !')
        }
})


bot.on('message', message => {
        if (message.content.toLowerCase().indexOf("!meta") !== -1) {
            message.channel.send('https://swgoh.gg/meta-report/')
        }
})


bot.on('message', message => {
        if (message.content.toLowerCase().indexOf("lost") !== -1) {
            message.channel.send('http://i.imgur.com/fxIGuM9.jpg')
        }
})






bot.on('message', message => {
        if (message.content.toLowerCase().indexOf("!zeta") !== -1) {
            message.channel.send('https://swgoh.gg/zeta-report/')
        }
})


bot.on('message', message => {
        if (message.content.toLowerCase().indexOf("!zetalist") !== -1) {
            message.channel.send('https://swgoh.gg/characters/zeta-abilities/')
        }
})




bot.on('message', message => {
        if (message.content.toLowerCase().indexOf("bdrff") !== -1) {
            message.channel.send('http://bd.rogueff.fr')
        }
})





bot.on('message', message => {
        if (message.content.toLowerCase().indexOf("guignol") !== -1) {
            message.channel.send('C\'est Cocisa, c\'est Cocisa, avec son chapeau noir, ses gros sourcils et son bâton, C\'est Cocisa, c\'est Cocisa nananana')
        }
})








bot.on('message', message => {
        if (message.content.toLowerCase().indexOf(" trans ") !== -1) {
            message.channel.send('Je ne vois pas trop l\'interet de ressembler a une femme.')
        }
})

bot.on('message', message => {
        if (message.content.toLowerCase().indexOf(" trav ") !== -1) {
            message.channel.send('Je ne vois pas trop l\'interet de ressembler a une femme.')
        }
})


bot.on('message', message => {
        if (message.content.toLowerCase().indexOf("whisky") !== -1) {
            message.channel.send('Juste un doigt...')
        }
})


bot.on('message', message => {
        if (message.content.toLowerCase().indexOf("mentir") !== -1) {
            message.channel.send('Tu bluffes Martoni!')
        }
})


bot.on('message', message => {
        if (message.content.toLowerCase().indexOf("clone") !== -1) {
            message.channel.send('A farmer en priorité absolue, jango fett arrive bientôt. Jugement le 12/05/2017')
        }
})



bot.on('message', message => {
        if (message.content.toLowerCase().indexOf("canard") !== -1) {
            message.channel.send('pattes de canaaaaaaaaaaaaaaaaaaaaaaaaaaaaard !')
        }
})


bot.on('message', message => {
        if (message.content.toLowerCase().indexOf(" vent ") !== -1) {
            message.channel.send('Pour savoir s\'il va y avoir du vent, il faut mettre son doigt dans le cul du coq.')
        }
})



bot.on('message', message => {
        if (message.content.toLowerCase().indexOf("c\'est à qui") !== -1) {
            message.channel.send('À Kadoc ! À Kadoc !')
        }
})












bot.on('message', message => {
        if (message.content.toLowerCase().indexOf("direction") !== -1) {
            message.channel.send('Faut arreter ces conneries de nord et de sud ! Une fois pour toutes, le nord, suivant comment on est tourné, ça change tout !')
        }
})









bot.on('message', message => {
        if (message.content.toLowerCase().indexOf("tartine") !== -1) {
            message.channel.send('J\'aime me beurrer la biscotte')
        }
})

bot.on('message', message => {
        if (message.content.toLowerCase().indexOf("voiture") !== -1) {
            message.channel.send('A l\'occasion, je vous mettrai un petit coup de polish...')
        }
})





//bot.on('message', message => {
//        if (message.content.toLowerCase().indexOf("trokpa") !== -1) {
//            message.channel.send(':muscle:')
//        }
//})




//bot.on('message', message => {
//        if (message.content.toLowerCase().indexOf("poum") !== -1) {
//            message.channel.send('https://m.youtube.com/watch?v=hSvUSYxueGg')
//        }
//})



//bot.on('message', message => {
//        if (message.content.toLowerCase().indexOf("boom") !== -1) {
//            message.channel.send('https://m.youtube.com/watch?v=hSvUSYxueGg')
//        }
//})




bot.on('message', message => {
        if (message.content.toLowerCase().indexOf("gras") !== -1) {
            message.channel.send('le stan c\'est la vie')
        }
})



bot.on('message', message => {
        if (message.content.toLowerCase().indexOf("hall of shame") !== -1) {
            message.channel.send('Karlvondraakhs, Sherveen, Mass, Mysticia, Papavau 2X, Danick, Nico Fofo, MacFarmer, Drinko')
        }
})






bot.on('message', message => {
        if (message.content.toLowerCase().indexOf("placard") !== -1) {
            message.channel.send('https://zupimages.net/up/18/01/rnnj.jpg')
        }
})



bot.on('message', message => {
        if (message.content.toLowerCase().indexOf("ventre ") !== -1) {
            message.channel.send('http://zupimages.net/up/17/19/6pzk.jpg')
        }
})

bot.on('message', message => {
        if (message.content.toLowerCase().indexOf("hazebrouck") !== -1) {
            message.channel.send('Bordel mais chevrouze va farmer tes viocs !!!')
        }
})


bot.on('message', message => {
        if (message.content.toLowerCase().indexOf("putain") !== -1) {
            message.channel.send('c\'est pas poli de dire \347a , on dit cocisa travaille !')
        }
})



bot.on('message', message => {
        if (message.content.toLowerCase().indexOf("bite") !== -1) {
            message.channel.send('Arretez de me tag j\'ai pas le temps de parler, faut que je suive les bons conseils des jedistar, sign\351 khal')
        }
})




bot.on('message', message => {
        if (message.content.toLowerCase().indexOf("on en a gros") !== -1) {
            message.channel.send('https://i0.wp.com/gazette-du-geek.fr/wp-content/uploads/2016/08/Gif-Kaamelott-le-top-20-9.gif')
        }
})



bot.on('message', message => {
        if (message.content.toLowerCase().indexOf("vous ne passerez pas") !== -1) {
            message.channel.send('https://i.makeagif.com/media/6-06-2016/KOQ-kq.gif')
        }
})



bot.on('message', message => {
        if (message.content.toLowerCase().indexOf("ils ne passeront pas") !== -1) {
            message.channel.send('https://i.makeagif.com/media/6-06-2016/KOQ-kq.gif')
        }
})












bot.on('message', message => {
        if (message.content.toLowerCase().indexOf("shame") !== -1) {
            message.channel.send('https://www.youtube.com/watch?v=WaKtjteyvgw')
        }
})




bot.on('message', message => {
        if (message.content.toLowerCase().indexOf("noulllachier") !== -1) {
            message.channel.send('https://www.youtube.com/watch?v=qlZWUk11F24')
        }
})



bot.on('message', message => {
        if (message.content.toLowerCase().indexOf("pain au chocolat") !== -1) {
            message.channel.send('http://image.noelshack.com/fichiers/2015/50/1449597631-chocolatine-vs-pain-au-chocalat.jpg')
        }
})



bot.on('message', message => {
        if (message.content.toLowerCase().indexOf("chocolatine") !== -1) {
            message.channel.send('https://i.servimg.com/u/f86/18/40/42/64/14439610.png')
        }
})



bot.on('message', message => {
        if (message.content.toLowerCase().indexOf("cocisa bb8") !== -1) {
            message.channel.send('https://www.captiongenerator.com/805592/Cocisa-et-BB8')
        }
})



bot.on('message', message => {
        if (message.content.toLowerCase().indexOf("bb8 cocisa") !== -1) {
            message.channel.send('https://www.captiongenerator.com/805592/Cocisa-et-BB8')
        }
})



bot.on('message', message => {
        if (message.content.toLowerCase().indexOf("p2w") !== -1) {
            message.channel.send('https://i.imgur.com/Cd9cF4r.gif')
        }
})



bot.on('message', message => {
        if (message.content.toLowerCase().indexOf("bidon") !== -1) {
            message.channel.send('https://zupimages.net/up/18/10/r7ey.png')
        }
})





bot.on('message', message => {
        if (message.content.toLowerCase().indexOf("heroic") !== -1) {
            message.channel.send('https://zupimages.net/up/18/10/r7ey.png')
        }
})


bot.on('message', message => {
        if (message.content.toLowerCase().indexOf("heroique") !== -1) {
            message.channel.send('https://zupimages.net/up/18/10/r7ey.png')
        }
})


bot.on('message', message => {
        if (message.content.toLowerCase().indexOf("melon") !== -1) {
            message.channel.send('https://zupimages.net/up/18/10/r7ey.png')
        }
})


bot.on('message', message => {
        if (message.content.toLowerCase().indexOf("merde") !== -1) {
            message.channel.send('https://media0.giphy.com/media/Uh1ZPq7mA7xa8/giphy.gif')
        }
})








bot.on('message', message => {
        if (message.content.toLowerCase().indexOf("h\351ro\357que") !== -1) {
            message.channel.send('https://zupimages.net/up/18/10/r7ey.png')
        }
})


bot.on('message', message => {
        if (message.content.toLowerCase().indexOf("!planetes") !== -1) {
            message.channel.send('https://goo.gl/forms/tBF0fOY3GAgRlOs42')
        }
})


bot.on('message', message => {
        if (message.content.toLowerCase().indexOf("!planete") !== -1) {
            message.channel.send('https://goo.gl/forms/tBF0fOY3GAgRlOs42')
        }
})

bot.on('message', message => {
        if (message.content.toLowerCase().indexOf("!planet") !== -1) {
            message.channel.send('https://goo.gl/forms/tBF0fOY3GAgRlOs42')
        }
})

bot.on('message', message => {
        if (message.content.toLowerCase().indexOf("jobijoba") !== -1) {
            message.channel.send('<@228970758058147840>')
        }
})

// var fs = require('fs');
var CommandsList = fs.readFileSync('commands.txt', 'utf8');

// var msg = message.content.toUpperCase();

bot.on('message', message => {

if (message.content.toUpperCase()  === '!AIDE') {

    message.channel.send(CommandsList)
  }
})

























bot.on('ready', function () {
  console.log("Je suis connect� !")
})

bot.login('NDIxNzA0OTc4NjM4NDM4NDAw.DYTNyQ.OgWZUxC0KY50clJH7YoW0aUIekM')
