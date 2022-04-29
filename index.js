const EventEmitter = require('events')
const emitter = new EventEmitter()

emitter.on('FizzBuzz', function(arg) {
    console.log(arg)
})

emitter.emit('FizzBuzz', 'Coucou')
emitter.emit('FizzBuzz', 54)
