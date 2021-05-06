const OBSWebSocket = require('obs-websocket-js');
const tmi = require('tmi.js');

export class GriffinBot {

  private static _instance: GriffinBot;
  public get instance() : GriffinBot {return GriffinBot._instance;}
  public set instance(instance: GriffinBot) {if(GriffinBot._instance) return; GriffinBot._instance = instance;}
  

  obs = new OBSWebSocket();
  client;
  messages: String[] = [];
  log: Function = (message: string) => {
    this.messages.push(message);
  }

  async Start (messagesState) {
    this.instance = this;
    

    try {
      this.client = new tmi.Client({
        options: { debug: true, messagesLogLevel: "info" },
        connection: {
          reconnect: true,
          secure: true
        },
        identity: {
          username: 'GriffinBot',
          password: process.env.REACT_APP_BOT_OAUTH
        },
        channels: [ process.env.REACT_APP_CHANNELS ]
      });

      this.client.connect().catch(console.error);

      this.client.on('message', (channel, tags, message, self) => {
        if(self) return;
        
        if(message.toLowerCase() === '!hello') {
          this.client.say(channel, `@${tags.username}, heya!`);
          this.instance.log("TEST");
        }
        console.log(this.messages);
        
        messagesState(this.messages);
      });
    } catch (err) {
      this.log(err);
    }

    try {
      await this.obs.connect({ address: process.env.REACT_APP_OBS_ADDRESS, password: process.env.REACT_APP_OBS_PASSWORD });
      
      this.log(`Success! We're connected & authenneticated.`);
        
      const getSceneList = await this.obs.send('GetSceneList');

      this.log(`${getSceneList.scenes.length} Available Scenes!`);
        
      // getSceneList.scenes.forEach(scene => {
      //   if (scene.name !== getSceneList.currentScene) {
      //     this.log(`Found a different scene! Switching to Scene: ${scene.name}`);
          
      //     this.obs.send('SetCurrentScene', {
      //       'scene-name': scene.name
      //     });
      //   }
      // });
    } catch (err) {
      //Promise convention dictates you have a catch on every chain.
      this.log(err);
    }
    
    this.obs.on('SwitchScenes', data => {
      this.log(`New Active Scene: ${data.sceneName}`);
    });
    
    // You must add this handler to avoid uncaught exceptions.
    this.obs.on('error', err => {
      this.log('socket error:', err);
    });
  }
}