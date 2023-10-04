var push = require('web-push');

let vapidKeys = {
    publicKey: 'BBk_eO5AWXuMn_V9TDSsZ8m8rCc46T_YEEO41R4DUpfeb934U140Rxuq0be0n1_gqcSshTlef6I_J_1v770rYt8',
    privateKey: 'KqDp5bfkrYaoOJYzWQ_g16ru9_CdQDdTWMiOjngr4z8'
  }

console.log(vapidKeys);

push.setVapidDetails('mailto:shakediki@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/cCIGFYSAPd8:APA91bGA6tFMJMRxtyNqowg88-crLxoV0Ege5cVe7G8Eory4EqjTzOQqr8ouHaF2vTWcs1fYt39dQ3W-eA__0H187YYX10aIezLxDRMxU5Rbub1kJRwNWfVrkWz_o57GP54xNAymDwC3","expirationTime":null,"keys":{"p256dh":"BLiuapWZGZqTFPVmqhCLtvgAodUWPHVwPsSzuskRCkm1rrMA7BnbRGOjoupGwrGeuc8DfZU1vswLZe3tiU-iusQ","auth":"eeX0sXak2lW5gNDuRN28vA"}} //the 

push.sendNotification(sub, 'test message')
