
export function Hello(controller) {
  const listenTo = ['hola', 'Hola'];
  const messageTypes = 'direct_message';
  const messageHandler = (bot, message) => bot.reply(message, 'hola');
  return [listenTo, messageTypes, messageHandler];
}
