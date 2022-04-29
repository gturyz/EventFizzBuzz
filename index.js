const EventEmitter = require('events')
const emitter = new EventEmitter()

emitter.on('FizzBuzz', function(arg) {
    if(isNaN(arg)) {
        console.log("Ce n'est pas un nombre")
    } else {
        console.log(arg, " est bien un nombre")
    }
})

emitter.emit('FizzBuzz', 'Coucou')
emitter.emit('FizzBuzz', 54)
