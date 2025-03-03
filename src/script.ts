import * as TeddyBotMain from '@teddy-bot/main';
import { CoreConfig } from '@teddy-bot/main';

export class TeddyScript
  extends TeddyBotMain.TeddyScript
  implements TeddyBotMain.TeddyImplementScript
{
  // Webhook Discord pour être notifié automatiquement
  public discordAlertWebhook = null;

  constructor(listener: any, teddyUtils: TeddyBotMain.ITeddyUtils, coreConfig: CoreConfig) {
    super(listener, teddyUtils, coreConfig);
  }

  // Déclencher une action lors d'un nouvel event
  public async onEvent(_event: TeddyBotMain.EventPayloadContent): Promise<void> {
    if (_event.type === TeddyBotMain.EventType.NEW_PACKET) {
      const { type: name } = _event.payload.packet;

      const currentMap = this.teddyUtils.getCurrentMap();

      switch (name) {
        case 'MapComplementaryInformationEvent': {
          // Faire une action quand j'arrive sur une nouvelle map
          this.logger.debug(`Je suis sur la map ${currentMap?.mapId}`);
        }
      }
    }

    if (_event.type === TeddyBotMain.EventType.SCRIPT_START) {
      // Faire une action quand le script démarre
      this.logger.info(`Le script démarre`, { enableAlert: true });
    }
  }
}
