const OBSWebSocket = require('obs-websocket-js');
const tmi = require('tmi.js');

export class GriffinBot {

  obs = new OBSWebSocket();

  async Start () {
    try {
      const client = new tmi.Client({
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

      client.connect().catch(console.error);

      client.on('message', (channel, tags, message, self) => {
        if(self) return;
        if(message.toLowerCase() === '!hello') {
          client.say(channel, `@${tags.username}, heya!`);
        }
      });
    } catch (err) {
      console.log(err);
    }

    try {
      await this.obs.connect({ address: process.env.REACT_APP_OBS_ADDRESS, password: process.env.REACT_APP_OBS_PASSWORD });
      
      console.log(`Success! We're connected & authenneticated.`);
        
      const getSceneList = await this.obs.send('GetSceneList');

      console.log(`${getSceneList.scenes.length} Available Scenes!`);
        
      getSceneList.scenes.forEach(scene => {
        if (scene.name !== getSceneList.currentScene) {
          console.log(`Found a different scene! Switching to Scene: ${scene.name}`);
          
          this.obs.send('SetCurrentScene', {
            'scene-name': scene.name
          });
        }
      });
    } catch (err) {
      //Promise convention dictates you have a catch on every chain.
      console.log(err);
    }
    
    this.obs.on('SwitchScenes', data => {
      console.log(`New Active Scene: ${data.sceneName}`);
    });
    
    // You must add this handler to avoid uncaught exceptions.
    this.obs.on('error', err => {
      console.error('socket error:', err);
    });
  }
}