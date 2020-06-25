class Game {
    constructor() {}

    getState() {
        var emailRef = database.ref('email');
        emailRef.on('value',function (data) {
            email = data.val();
        });
    }
  
}     
           