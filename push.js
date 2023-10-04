var push = require('web-push');

let vapidKeys = {
    publicKey: 'BBk_eO5AWXuMn_V9TDSsZ8m8rCc46T_YEEO41R4DUpfeb934U140Rxuq0be0n1_gqcSshTlef6I_J_1v770rYt8',
    privateKey: 'KqDp5bfkrYaoOJYzWQ_g16ru9_CdQDdTWMiOjngr4z8'
  }

console.log(vapidKeys);

push.setVapidDetails('mailto:shakediki@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/deiRIrxoJLI:APA91bF1AVa9v_JJ68rngtxzTsKCrrHJBacfXLQ5TOPprndI4qnuxMeRvO2sQRCt4fXctOWAvYX-sK8ul9JPFDXhFaljsxmwpsI5ltTgLl172uLEUzTcXrQpvimCb0CQ6RmGU9ajKc2K","expirationTime":null,"keys":{"p256dh":"BIOatEWeu0kpR27evtPqslRETSdArT5tiHU3iL1Vis_ArVcbIdQ8W5eUiDviTOjpeIsoz0V_xGkcy8XwgI4Ji_c","auth":"h5-1bl7Xsgx9HfoFtet_Ew"}} //the 

push.sendNotification(sub, 'test message')
