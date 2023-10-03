var push = require('web-push');

let vapidKeys = {
    publicKey: 'BBk_eO5AWXuMn_V9TDSsZ8m8rCc46T_YEEO41R4DUpfeb934U140Rxuq0be0n1_gqcSshTlef6I_J_1v770rYt8',
    privateKey: 'KqDp5bfkrYaoOJYzWQ_g16ru9_CdQDdTWMiOjngr4z8'
  }

console.log(vapidKeys);

push.setVapidDetails('mailto:shakediki@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {endpoint:
  "https://fcm.googleapis.com/fcm/send/dXABIsk1_jc:APA91bEr1Qr1qD1sKZer0Bd3u44HGIw_qeagrwQhb6s5sqXzd_LJ1v4zovOGOtkckzdf_fIEuFK_otKeAUJLL3Na4d5AF-FpMEPRR_PmC0d9aUj1cgCa2cLjZjZPOMBVPbWqkVJWMgJ2",
  expirationTime:null,
  keys: 
  {p256dh:"BAWbjWphCM8Po7h-yQ6yyJ-ByfGItJOMcl4uafJuNQrzVi4uU8E0om2OjfhVeDJqIujVmfAevzEnDoQ2CFF99b4",auth:"6YlytpciMd5YTGFZx5qSKA"}} //the 

push.sendNotification(sub, 'test message')
