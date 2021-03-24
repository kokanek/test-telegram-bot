const fetch = require('node-fetch');

exports.handler = async (event, context) => {

  console.log('starting the build')
  try {
    console.log('hitting the telegram API')
    const resp = await fetch('https://v1.nocodeapi.com/kokaneka/telegram/OtoWBxzkiUHeAbge/sendText?text=building', { method: 'POST'});
  } catch(e) {
    console.log('error while hitting the telegram API', JSON.stringify(e));
  }
  console.log('hit the API!')
}