const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  const resp = await fetch('https://v1.nocodeapi.com/kokanek/telegram/enkhcbolRKGeTbEA/sendText?text=failed', { method: 'POST'});
  console.log('hit the API!')
}
