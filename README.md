# TeddyBot

**TeddyBot** est un bot MITM (Man-in-the-Middle) pour Dofus Unity. Il a été conçu pour aider les joueurs dans leurs aventures et intégration avec le jeu. Actuellement, TeddyBot permet de faire des chasses au trésor et intègre plusieurs systèmes de notifications anti-modérateur pour assurer une utilisation sécurisée.

[Nous rejoindre sur Discord](https://discord.gg/9r4djqqQSm)

![image](https://github.com/user-attachments/assets/d016b26d-b994-4a7c-bf77-0d93fe8b16c4)


### Fonctionnalités

- **Chasses au Trésor** : Automatisation des quêtes de chasse au trésor, vous aidant à collecter des récompenses rapidement et efficacement.
- **Récolte** : Créé vos trajets de récoltes
- **Notifications Anti-Modérateur** : TeddyBot intègre des systèmes de notifications pour avertir de la présence de modérateurs, vous permettant ainsi d'éviter les suspensions ou bannissements.
- **Réponse automatique** : Une IA peut répondre automatiquement à vos messages privés pour vous rendre plus humain
- **World Pahfinding** : Un pathfinding est disponible pour permettre à votre bot de se déplacer rapidement d'une position à l'autre sans renseigner le trajet complet

### TeddyScript

**TeddyScript** est une base de script créée pour faciliter la création et la personnalisation de scripts pour TeddyBot. Il permet d'écrire des scripts personnalisés pour automatiser diverses tâches dans le jeu. 🚀

### Créer mon premier script

**Ce dont vous avez besoin**
- Une machine Windows pouvant faire tourner Dofus Unity
- Une licence **TeddyBot**
- **NodeJS** version 20+
- Le gestionnaire de packet nodeJS `pnpm` installable avec `npm install -g pnpm`
- Installer la dernière version de **TeddyBot** [ici](https://github.com/BoltKun5/teddy-bot/releases)

**Ce dont vous n'avez pas besoin**
- Une machine dédiée pour le bot car la souris n'est pas monopolisée
- Une machine puissante car même si le client du jeu est lent, le socket MITM gère lui-même les paquets 🔥
- Une configuration spécifique de l'interface Dofus 🤯

> Nous mettons à disposition un paquet NodeJS [@teddy-bot/main](https://www.npmjs.com/package/@teddy-bot/main) permettant de vous faciliter l'intégration de script

Accéder à l'utilitaire TeddyUtils pour
- Déplacer votre bot (dans une direction, sur une cellule, avec un world pathfinding)
- Lire, modifier ou envoyer des paquets 🚀
- Lire informations de votre bot (inventaire, détails, position...)

> ⚠️ Veuilliez utiliser toujours la version la plus récente du package NodeJS

1. Télécharger le script d'exemple ou cloner le répository
2. Vérifier la version de `@teddy-bot/main` dans le fichier `package.json`
3. Installer les dépendances avec `pnpm install`
4. Générer le build avec la commande `pnpm build` dans un terminal à la racine
5. Démarrer TeddyBot, connecter un bot et importer le script

> ⚠️Lors de l'importation du script, veuillez bien choisir le fichier `dist/script.js`

```typescript
import * as TeddyBotMain from '@teddy-bot/main';
import { CoreConfig } from '@teddy-bot/main';

export class TeddyScript
  extends TeddyBotMain.TeddyScript
  implements TeddyBotMain.TeddyImplementScript
{
  // Webhook Discord pour être notifié automatiquement
  public discordAlertWebhook = null;

  constructor(
    listener: any,
    teddyUtils: TeddyBotMain.ITeddyUtils,
    coreConfig: CoreConfig,
    internalListener: any,
  ) {
    super(listener, teddyUtils, coreConfig, internalListener);
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
```
