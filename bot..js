var prefix = "#";

client.on("message", message => {
  let args = message.content.split(" ").slice(1).join(" ")
  const storechannel = message.guild.channels.find(c => c.name === '𝐁𝐮𝐲𝐒𝐞𝐥𝐥');
    if(message.content.startsWith(config.prefix + 'buysell')) {
    if(!args) return message.channel.send('Please Type First The `Product` Then `Price`').then(m => m.delete(5000));
      if(storechannel) {
          let Storepost = new Discord.RichEmbed()
          .setThumbnail("http://download.seaicons.com/icons/webalys/kameleon.pics/128/Online-Shopping-icon.png")
          .addField('Sent By:',`${message.author.tag}`, true)
          .addField('Product:',`${args}`, true)
          .setFooter('Berserker', client.user.avatarURL)
          .setTimestamp()
          .setColor('RANDOM');
          storechannel.sendEmbed(Storepost)
          let Successful = new Discord.RichEmbed()
          .setColor("RANDOM")
          .setTitle(`Your Product Was Sent Successful`)
          .addField('StoreChannel:',`Go ${storechannel} To See Your Post`, true)
          .setFooter('Berserker', client.user.avatarURL)
          .setTimestamp();
          message.channel.sendEmbed(Successful)
      } else {
          message.guild.createChannel('𝐁𝐮𝐲𝐒𝐞𝐥𝐥', 'text').then(channel => {
          let everyoneRole = message.guild.roles.find('name', '@everyone');
          channel.overwritePermissions(everyoneRole, {
              SEND_MESSAGES: false,
              READ_MESSAGES: true
              })
            }).then(() => {
          message.channel.send('Please Try Again Cause There Was No Store Channel... Type First The `Product` Then `Price`')
      });
    }      
  }
});//By medo the boss Royal 
