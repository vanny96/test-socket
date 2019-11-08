const sendButton = document.getElementById('send');
const io = require('socket.io-client');

const socket = io.connect('http://localhost:3000/chat-room');

socket.emit('data', {
    userId: '5dc081d2b1a5c42e4861ed6b'
})

sendButton.addEventListener('click', () => {
    socket.emit('send-message', ({
        message: 'Ciao mondo'
    }))
})

socket.on('get-message', (response) => {
    const message = document.createElement('div');
    message.textContent = `${response.message} by ${response.username}`;
    document.body.appendChild(message);
})
