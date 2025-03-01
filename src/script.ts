import * as TeddyBotMain from '@teddy-bot/main';
import { CoreConfig } from '@teddy-bot/main';

export class TeddyScript
  extends TeddyBotMain.TeddyScript
  implements TeddyBotMain.TeddyImplementScript
{
  public discordAlertWebhook = null;

  constructor(listener: any, teddyUtils: TeddyBotMain.ITeddyUtils, coreConfig: CoreConfig) {
    super(listener, teddyUtils, coreConfig);
  }
}
