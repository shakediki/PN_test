var push = require('web-push');

let vapidKeys = {
    publicKey: 'BBk_eO5AWXuMn_V9TDSsZ8m8rCc46T_YEEO41R4DUpfeb934U140Rxuq0be0n1_gqcSshTlef6I_J_1v770rYt8',
    privateKey: 'KqDp5bfkrYaoOJYzWQ_g16ru9_CdQDdTWMiOjngr4z8'
  }

console.log(vapidKeys);

push.setVapidDetails('mailto:shakediki@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/cnIB-lq1Y-c:APA91bEWi6b504m6S2OgQnweKAlg62TgHGMYz2o0v3qVmR5dGbKfPUL_Y-vyz03CItJjYCFiSpYzvFwLcztTEgtib7L-RsaXIT9bPas_i1y1b8ctmcmZKtWDvr1PhaYiyUdShvaH0-js","expirationTime":null,"keys":{"p256dh":"BD-xTlk_AOFA2EWa3cVG5tlAd_8EIWTw2SlnjqNyMAneQIZ5N-RnN8eiHo7u1Hkc0bQyPL7GHcGSG-VYg0fztVY","auth":"uEpttMF7XMOULmLIeYBIRg"}} //the 

push.sendNotification(sub, 'test message')
