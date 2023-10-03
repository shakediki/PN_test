var push = require('web-push');

let vapidKeys = {
    publicKey: 'BBk_eO5AWXuMn_V9TDSsZ8m8rCc46T_YEEO41R4DUpfeb934U140Rxuq0be0n1_gqcSshTlef6I_J_1v770rYt8',
    privateKey: 'KqDp5bfkrYaoOJYzWQ_g16ru9_CdQDdTWMiOjngr4z8'
  }

console.log(vapidKeys);

push.setVapidDetails('mailto:shakediki@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/c91c3555ixw:APA91bFJD5CW2OwB3n0oucidFmVsD753yyZjTl2XqURAUY4nR7SyVwSGTKi3e3e_4PxTNkc5D8G7FYL_6x8MtLrsEsVFpr8SL5YO6i64cM38Y_0roecTJEVFlNCf69plOle7cg0iENF7","expirationTime":null,"keys":{"p256dh":"BOUhi3WhyVSRgDDzZCoH5vwm3y0HeWDuP_vkHbtpiT7Xqp3wmhYwbZ5bF99I0scMvVf3-WCKcEQhGK8mTRzy5GM","auth":"ep5XnUISXQ143D26cy96Yw"}} //the 

push.sendNotification(sub, 'test message')
