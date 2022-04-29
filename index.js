const EventEmitter = require('events')
const emitter = new EventEmitter()

emitter.on('FizzBuzz', function(arg) {
    if(isNaN(arg)) {
        console.log("Ce n'est pas un nombre")
    } else {
        if (arg % 5 == 0 && arg % 3 == 0) {
            console.log("FizzBuzz")
        } else if (arg % 5 == 0) {
            console.log("Buzz")
        } else if (arg % 3 == 0) {
            console.log("Fizz")
        } else console.log(arg)
    }
})

emitter.emit('FizzBuzz', 'Coucou')
emitter.emit('FizzBuzz', 53)
emitter.emit('FizzBuzz', 25)
emitter.emit('FizzBuzz', 15)
emitter.emit('FizzBuzz', 9)
