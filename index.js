const EventEmitter = require('events')
const emitter = new EventEmitter()

emitter.on('FizzBuzz', function(arg) {
    if(isNaN(arg)) {
        console.log("Ce n'est pas un nombre")
    } else {
        if (arg % 5 == 0) {
            console.log("Buzz")
        }
    }
})

emitter.emit('FizzBuzz', 'Coucou')
emitter.emit('FizzBuzz', 54)
emitter.emit('FizzBuzz', 25)
emitter.emit('FizzBuzz', 15)
emitter.emit('FizzBuzz', 9)
