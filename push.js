var push = require('web-push');

let vapidKeys = {
    publicKey: 'BBk_eO5AWXuMn_V9TDSsZ8m8rCc46T_YEEO41R4DUpfeb934U140Rxuq0be0n1_gqcSshTlef6I_J_1v770rYt8',
    privateKey: 'KqDp5bfkrYaoOJYzWQ_g16ru9_CdQDdTWMiOjngr4z8'
  }

console.log(vapidKeys);

push.setVapidDetails('mailto:shakediki@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/eLrCW3d0e1c:APA91bHS8KbI4EjRvTS7ni7q4EimbEGa4yPk0EKyNwGSZv7oN-d42RRh39EOnMQx9QgMUqquuny20hQlBJK1oLPgKpNhGhFacGlko-JrMhIKdgiceJitNVzYgtGB9gTQKOOHk3BB0-P1","expirationTime":null,"keys":{"p256dh":"BB8DRuK-aANIRooVQlo_Nj-HW93nrW8wB-ZC6FNth_El7SksHjI5BhOKrtsFvUV63NKVszEiXxU5u_pJjm38Quw","auth":"tDmscBBgfvslXDFnMhqtYg"}} //the 

push.sendNotification(sub, 'test message')
