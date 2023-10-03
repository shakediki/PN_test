self.addEventListener('push', function(e) {
    var options = {
        body: 'notification from push',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival:Date.now(),
            primaryKey: '2'
        }    
    };
    e.waitUntill(
        self.registration.showNotification('Hello World!', options)
    );
});