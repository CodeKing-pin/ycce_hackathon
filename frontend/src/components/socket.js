import { io } from 'socket.io-client';

export const initSocket = async() =>{
    const options = {
        'force new connection':true,
        reconnectionAttempt: 'Infinity',
        timemout : 10000,
        transports: ['websocket'],
    };
    return io('http://localhost:3001',options);
}