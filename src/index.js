/*******************************************************************************
*      _____      _                                  ____        _             *
*     / ____|    | |                                |  _ \      | |            *
*     | |    __ _| |__   ___  ___  __ _    ______   | |_) | ___ | |_           *
*     | |   / _` | '_ \ / _ \/ __|/ _` |  /______\  |  _ < / _ \| __|          *
*     | |___| (_| | |_) |  __/\__ \ (_||     ||     | |_) | (_) | |_           *
*     \_____\__,_|_.__/ \___||___/\__,_|     ||     |____/ \___/ \__|          *
*                                                                              *
*     @description A chat bot to help you learn spanish in a funny way.
      Every time you mention the cabeza bot by typing "Hola @cabesa",
      you will subscribe to the the bot and from now, it will send you
      two different spanish words every day. You need to compose a
      sentence containing both words in a meaninful way and send it back
      to the bot by direct messaging. It will tell you if the sentence makes
      sense or not. Whether your success or not, it will reward you with a
      funny spanish sentence. To unsubscribe, mention the bot by typing
      "adios @cabesa". If only interested in the funny sentences, mention
      the bot by typing "say @cabesa"                                          *
*     @author Linda Debray <ldebray@itrsgroup.com>                             *
*     @author Zuri Pabon <zpabon@itrsgroup.com>                                *
*     @license MIT                                                             *
*                                                                              *
*******************************************************************************/

/* External Dependencies */
import Botkit from 'botkit';

/* Internal Dependencies */
import { Hello } from './actions';

// Make sure bot api token is given
if (!process.env.TOKEN) {
  console.log('NoTokenError: Please, add the bot api token to your local .env file');
  process.exit(1);
}

(function init(){
  const botController = Botkit.slackbot({
    debug: process.env.NODE_ENV !== 'prod',
    rtm_receive_messages: true,
  });
  const bot = botController.spawn({ token: process.env.TOKEN }).startRTM();
  botController.hears(...Hello(botController));
  process.on('SIGINT', () => bot.destroy() && process.exit());
})();
