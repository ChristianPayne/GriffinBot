
const OBSWebSocket = require('obs-websocket-js');

const obs = new OBSWebSocket();

async function OBS () {
  await obs.connect({ address: 'localhost:4444', password: process.env.REACT_APP_OBS_PASSWORD });
  
  console.log(`Success! We're connected & authenneticated.`);
    
  const getSceneList = await obs.send('GetSceneList');

  console.log(`${getSceneList.scenes.length} Available Scenes!`);
    
  getSceneList.scenes.forEach(scene => {
    if (scene.name !== getSceneList.currentScene) {
      console.log(`Found a different scene! Switching to Scene: ${scene.name}`);
      
      obs.send('SetCurrentScene', {
        'scene-name': scene.name
      });
    }
  });
  // .catch(err => { // Promise convention dictates you have a catch on every chain.
  //   console.log(err);
  // });
  
  obs.on('SwitchScenes', data => {
    console.log(`New Active Scene: ${data.sceneName}`);
  });
  
  // You must add this handler to avoid uncaught exceptions.
  obs.on('error', err => {
    console.error('socket error:', err);
  });
}

module.exports = {OBS}