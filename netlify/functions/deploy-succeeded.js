const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  const resp = await fetch('https://v1.nocodeapi.com/kokaneka/telegram/OtoWBxzkiUHeAbge/sendText?text=success', { method: 'POST'});
  console.log('hit the API!')
}