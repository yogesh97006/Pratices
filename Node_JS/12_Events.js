let Events = require('events')

let event = new Events()


event.on('profile',()=>{
    console.log("My Name Yogesh and I am a web developer");
})

event.on('profile',()=>{
    console.log('Its Done')
})

event.emit('profile')


