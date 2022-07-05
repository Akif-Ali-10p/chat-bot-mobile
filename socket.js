import {io} from "socket.io-client";

// const URl = 'http://172.16.23.1:2800';
const URl = 'https://4c25-117-20-31-76.in.ngrok.io';
const socket = io.connect(URL, {transports: ['websocket'], jsonp:false, forceNew: true,});
console.log("socket created");
socket.onAny((event, ...args) => {
  console.log(event, args);
});

export default socket;