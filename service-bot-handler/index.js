const TelegramBot = require('node-telegram-bot-api')
const helper = require('./helper')

const token = '829201155:AAEAsSCQXm6zbkWXh2MrwThLCvpsjZDgQOA'
const bot = new TelegramBot(token, {polling: true})

console.log(helper)

bot.onText(/\/start/, (msg) => {
  const { id, first_name, username } = msg.chat
  const response = `
    Olá, ${first_name} tudo bem? Seu perfil será: https://staging.5minutos.de/${username}.
    Como funciona?
    - Envie um áudio e ele será upload automaticamente para seu perfil.
    - Responda a mensagem de confirmação com o título que você quer para seu áudio.
    - Pronto!
  `
  bot.sendMessage(id, response)
})

bot.on('message', (msg) => {
  const {
    reply_to_message,
    text,
    voice,
    chat: { id, username }
  } = msg

  if(voice) {
    return
  }

  if(reply_to_message) {
    console.log(reply_to_message)
    const title = helper.string_to_slug(text)
    const response = `
      Okay. Aqui está seu post https://staging.5minutos.de/${username}/${title}
    `
    bot.sendMessage(id, response)
    return
  }

  bot.sendMessage(id, 'Por enquanto só fui programado para receber e salvar áudios. Manda um áudio, bem :)')
})

bot.on('voice', async (msg) => {
  console.log(msg)
  const {
    voice: { file_id },
    chat: { id }
  } = msg

  await bot.sendMessage(id, 'Ok, fazendo upload')
  await helper.mockUpload()
  bot.sendMessage(id, 'Upload pronto. Responda esta mensagem para adicionar um título')
})
